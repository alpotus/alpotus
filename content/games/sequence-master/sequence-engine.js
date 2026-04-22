/**
 * ALPOTUS 5.0 - MEDICAL SEQUENCE ENGINE (v5.5 FINAL)
 * Features: Unified Subject Scaling, VOID Merging, Tap-to-Assign, & History API.
 */

let state = {
    sub: "Microbiology",
    activeTask: null,
    nextIdx: 0,
    wrong: 0,
    total: 0,
    timer: null,
    secs: 0
};

// --- 1. INITIALIZATION ---

function init() {
    if (typeof SequenceData === 'undefined') {
        console.error("Alpotus: SequenceData not found.");
        return;
    }
    
    // Set initial theme color
    const initialColor = SequenceData[state.sub] ? SequenceData[state.sub].color : "#facc15";
    document.documentElement.style.setProperty('--sub-color', initialColor);

    renderSubjectNav();
    updateChapters();
    renderGrid();
}

// --- 2. DYNAMIC NAVIGATION ---

function renderSubjectNav() {
    const nav = document.getElementById('subject-nav');
    if (!nav) return;

    let subjectList = new Set(Object.keys(SequenceData));
    if (typeof MyAddedSequences !== 'undefined') {
        MyAddedSequences.forEach(item => { if (item.subject) subjectList.add(item.subject); });
    }

    nav.innerHTML = Array.from(subjectList).sort().map(s => {
        const color = SequenceData[s] ? SequenceData[s].color : "#facc15";
        return `
            <button class="sub-btn ${state.sub === s ? 'active' : ''}" 
                    onclick="setSub('${s}')" 
                    style="border-color:${color}; --sub-color:${color};">
                ${s}
            </button>
        `;
    }).join('');
}

function setSub(s) {
    state.sub = s;
    const themeColor = SequenceData[s] ? SequenceData[s].color : "#facc15";
    document.documentElement.style.setProperty('--sub-color', themeColor);
    init();
}

function updateChapters() {
    const drop = document.getElementById('chapter-dropdown');
    if (!drop) return;
    let chapters = new Set();

    if (SequenceData[state.sub]?.chapters) {
        Object.keys(SequenceData[state.sub].chapters).forEach(c => chapters.add(c));
    }

    if (typeof MyAddedSequences !== 'undefined') {
        MyAddedSequences.forEach(item => {
            if (item.subject === state.sub && item.chapter) chapters.add(item.chapter);
        });
    }

    let html = '<option value="All">All Chapters</option>';
    Array.from(chapters).sort().forEach(c => {
        html += `<option value="${c}">${c}</option>`;
    });
    drop.innerHTML = html;
}

function renderGrid() {
    const grid = document.getElementById('topic-grid');
    if (!grid) return;
    const chFilter = document.getElementById('chapter-dropdown').value;
    const searchFilter = document.getElementById('global-search').value.toLowerCase();
    
    let list = [];
    const chaps = SequenceData[state.sub]?.chapters || {};
    for (let key in chaps) {
        if (chFilter === "All" || key === chFilter) list = [...list, ...chaps[key]];
    }

    if (typeof MyAddedSequences !== 'undefined') {
        const extra = MyAddedSequences.filter(s => 
            s.subject === state.sub && (chFilter === "All" || s.chapter === chFilter)
        );
        list = [...list, ...extra];
    }

    grid.innerHTML = list.filter(t => t.name.toLowerCase().includes(searchFilter)).map(t => `
        <div class="topic-list-item" onclick="startTask('${t.id}')">
            <h3>${t.name}</h3>
            <span class="play-indicator">BEGIN →</span>
        </div>
    `).join('');
}

// --- 3. SEARCH INTELLIGENCE ---

function globalSearch(query) {
    const results = document.getElementById('search-dropdown');
    if (!results) return;
    if (!query || query.length < 2) { results.style.display = 'none'; return; }
    
    let allPool = [];
    for (let s in SequenceData) {
        for (let c in SequenceData[s].chapters) allPool = [...allPool, ...SequenceData[s].chapters[c]];
    }
    if (typeof MyAddedSequences !== 'undefined') allPool = [...allPool, ...MyAddedSequences];

    const matches = allPool.filter(t => t.name.toLowerCase().includes(query.toLowerCase()));
    if (matches.length > 0) {
        results.style.display = 'block';
        results.innerHTML = matches.slice(0,8).map(m => `
            <div class="search-item" onclick="startTask('${m.id}')">
                <small style="color:var(--primary-dark); font-weight:900; text-transform:uppercase;">${m.subject}</small><br>
                <b style="color:var(--text-main)">${m.name}</b>
            </div>
        `).join('');
    } else {
        results.style.display = 'none';
    }
}

// --- 4. GAMEPLAY ENGINE ---

function startTask(id) {
    let allPool = [];
    for (let s in SequenceData) {
        for (let c in SequenceData[s].chapters) allPool = [...allPool, ...SequenceData[s].chapters[c]];
    }
    if (typeof MyAddedSequences !== 'undefined') allPool = [...allPool, ...MyAddedSequences];
    
    state.activeTask = allPool.find(t => t.id === id);
    if (!state.activeTask) return;

    state.nextIdx = 0; state.wrong = 0; state.total = 0; 

    document.getElementById('hub-screen').style.display = 'none';
    document.getElementById('game-arena').style.display = 'block';
    document.getElementById('report-view').style.display = 'none';
    document.getElementById('task-title').innerText = state.activeTask.name;

    const pool = document.getElementById('steps-pool');
    const shuffled = [...state.activeTask.steps].sort(() => Math.random() - 0.5);
    pool.innerHTML = shuffled.map(s => `
        <div class="step-pill" onclick="handleTap('${s.replace(/'/g, "\\'")}', this)">${s}</div>
    `).join('');
    
    document.getElementById('user-order').innerHTML = "";
    document.getElementById('acc-val').innerText = "100%";
    document.getElementById('search-dropdown').style.display = 'none';
    
    startTimer();
}

function handleTap(text, el) {
    state.total++;
    const correctStep = state.activeTask.steps[state.nextIdx];

    if (text === correctStep) {
        state.nextIdx++;
        el.style.display = 'none';
        document.getElementById('user-order').innerHTML += `
            <div class="flow-step"><span class="s-num">${state.nextIdx}</span> ${text}</div>`;
        
        if (state.nextIdx === state.activeTask.steps.length) showAnalysis();
    } else {
        state.wrong++;
        el.classList.add('wrong');
        setTimeout(() => el.classList.remove('wrong'), 400);
    }
    updateAcc();
}

function updateAcc() {
    const el = document.getElementById('acc-val');
    const acc = Math.round(((state.total - state.wrong) / state.total) * 100);
    if (el) el.innerText = (acc < 0 ? 0 : acc) + "%";
}

// --- FIXED TIMER ---
function startTimer() {
    if (state.timer) clearInterval(state.timer);
    state.secs = 0;
    state.timer = setInterval(() => {
        state.secs++;
        const timerEl = document.getElementById('timer-display');
        if (timerEl) {
            let m = Math.floor(state.secs/60).toString().padStart(2,'0');
            let s = (state.secs%60).toString().padStart(2,'0');
            timerEl.innerText = `${m}:${s}`;
        }
    }, 1000);
}

// --- 5. CLINICAL ANALYSIS REPORT ---

function showAnalysis() {
    if (state.timer) clearInterval(state.timer);
    
    document.getElementById('game-arena').style.display = 'none';
    document.getElementById('report-view').style.display = 'block';
    
    document.getElementById('rep-acc').innerText = document.getElementById('acc-val').innerText;
    document.getElementById('rep-time').innerText = state.secs + "s";
    document.getElementById('rep-note').innerText = state.activeTask.note;
    
    // High-Contrast Vertical Flowchart review
    document.getElementById('final-flowchart').innerHTML = state.activeTask.steps.map((s, i) => `
        <div class="flow-step" style="border-color:#333; color:#fff; background:#111;">
            <span class="s-num" style="background:var(--primary); color:#000;">${i+1}</span> 
            ${s}
        </div>
    `).join('<div style="text-align:center; color:var(--primary); font-size:0.8rem; margin: -5px 0;">▼</div>');
}

// Outside-click listener for search
document.addEventListener('click', (e) => {
    const sBox = document.getElementById('search-dropdown');
    if (sBox && !document.getElementById('global-search').contains(e.target)) {
        sBox.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', init);