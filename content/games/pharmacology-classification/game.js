/**
 * ALPOTUS 5.0 - ADVANCED CHALLENGE ENGINE (v5.3 PREMIUM)
 * Features: Custom Modals, Adaptive UI, Drawer Logic, Mastery Sync.
 */

let state = {
    subject: "Pharmacology",
    game: null,
    selected: null,
    correct: 0,
    attempts: 0,
    isConsoleExpanded: false
};

// --- 1. INITIALIZATION & DYNAMIC THEMING ---

function init() {
    if (typeof ClassificationData === 'undefined') {
        console.error("Alpotus: ClassificationData not found in data.js.");
        return;
    }

    const filterRow = document.getElementById('subject-filters');
    const subjects = Object.keys(ClassificationData);
    
    // Render Subject Selector Buttons
    filterRow.innerHTML = subjects.map(s => `
        <button class="sub-btn ${state.subject === s ? 'active' : ''}" 
                onclick="setSubject('${s}')"
                style="border-color: ${ClassificationData[s].color}">
            ${s}
        </button>
    `).join('');

    // Apply Theme Colors to CSS Variables
    const themeColor = ClassificationData[state.subject].color;
    document.documentElement.style.setProperty('--sub-color', themeColor);
    document.documentElement.style.setProperty('--sub-bg', hexToRgbA(themeColor, 0.1));

    updateChapters();
    renderTopics();
}

function setSubject(s) {
    state.subject = s;
    init();
}

function updateChapters() {
    const dropdown = document.getElementById('chapter-dropdown');
    const subjectData = ClassificationData[state.subject];
    let uniqueChapters = new Set();
    
    // Get chapters from hardcoded bank
    if (subjectData && subjectData.chapters) {
        Object.keys(subjectData.chapters).forEach(ch => uniqueChapters.add(ch));
    }

    // Get chapters from VOID bank (Added via Data Helper)
    if (typeof MyAddedClassifications !== 'undefined') {
        MyAddedClassifications.forEach(g => {
            if (g.subject === state.subject && g.chapter) uniqueChapters.add(g.chapter);
        });
    }

    let html = '<option value="All">All Chapters</option>';
    Array.from(uniqueChapters).sort().forEach(ch => {
        html += `<option value="${ch}">${ch}</option>`;
    });
    dropdown.innerHTML = html;
}

// --- 2. TOPIC LISTING & PERSISTENCE ---

function renderTopics() {
    const grid = document.getElementById('topic-grid');
    const chFilter = document.getElementById('chapter-dropdown').value;
    const searchFilter = document.getElementById('topic-search').value.toLowerCase();
    
    let topics = [];
    const chData = ClassificationData[state.subject].chapters;
    
    // Merge hardcoded and void items
    for (let key in chData) {
        if (chFilter === "All" || key === chFilter) {
            topics = [...topics, ...chData[key]];
        }
    }
    if (typeof MyAddedClassifications !== 'undefined') {
        const extra = MyAddedClassifications.filter(g => 
            g.subject === state.subject && (chFilter === "All" || g.chapter === chFilter)
        );
        topics = [...topics, ...extra];
    }

    grid.innerHTML = topics.filter(t => t.name.toLowerCase().includes(searchFilter)).map(t => {
        const mastery = localStorage.getItem(`alpotus_mastery_${t.id}`);
        const isMastered = mastery !== null;

        return `
            <div class="topic-card" onclick="startChallenge('${t.id}')">
                <div>
                    <h3 style="${isMastered ? 'color:#10b981' : ''}">${t.name}</h3>
                    <p style="font-size:0.65rem; font-weight:900; color:var(--text-muted); margin-top:5px; text-transform:uppercase;">
                        ${isMastered ? `✅ BEST ACCURACY: ${mastery}%` : '🕒 Not Attempted'}
                    </p>
                </div>
                <span style="font-weight:900; color:var(--sub-color)">PLAY →</span>
            </div>
        `;
    }).join('');
}

// --- 3. GAMEPLAY ENGINE (TAP-TO-ASSIGN) ---

function startChallenge(id) {
    let all = [];
    for (let s in ClassificationData) {
        for (let c in ClassificationData[s].chapters) all = [...all, ...ClassificationData[s].chapters[c]];
    }
    if (typeof MyAddedClassifications !== 'undefined') all = [...all, ...MyAddedClassifications];
    
    state.game = all.find(g => g.id === id);
    if(!state.game) return;

    // Reset Session Stats
    state.correct = 0;
    state.attempts = 0;
    state.selected = null;

    // Switch Views
    document.getElementById('home-screen').style.display = "none";
    document.getElementById('game-header').style.display = "flex";
    document.getElementById('play-screen').style.display = "grid";
    document.getElementById('game-console').style.display = "block";
    
    resetConsole();
    renderPool();
    renderBuckets();
}

function renderPool() {
    const container = document.getElementById('drug-pool');
    const shuffled = [...state.game.items].sort(() => Math.random() - 0.5);
    container.innerHTML = shuffled.map(item => `
        <div class="drug-pill" id="pill-${item.name.replace(/\s+/g, '')}" 
             onclick="selectDrug('${item.name.replace(/'/g, "\\'")}', this)">
            ${item.name}
        </div>
    `).join('');
}

function renderBuckets() {
    const container = document.getElementById('bucket-container');
    container.innerHTML = state.game.categories.map(cat => `
        <div class="bucket" onclick="assignTo('${cat.replace(/'/g, "\\'")}')">
            <h4>${cat}</h4>
            <div class="placed-area" id="bucket-${cat.replace(/\s+/g, '')}"></div>
        </div>
    `).join('');
}

function selectDrug(name, el) {
    document.querySelectorAll('.drug-pill').forEach(p => p.classList.remove('selected'));
    state.selected = state.game.items.find(i => i.name === name);
    el.classList.add('selected');
    document.querySelectorAll('.bucket').forEach(b => b.classList.add('highlight'));
}

function assignTo(cat) {
    if (!state.selected) return;
    state.attempts++;

    const pill = document.getElementById(`pill-${state.selected.name.replace(/\s+/g, '')}`);
    
    if (state.selected.category === cat) {
        // SUCCESS
        state.correct++;
        const area = document.getElementById(`bucket-${cat.replace(/\s+/g, '')}`);
        area.innerHTML += `<span class="placed-pill">${state.selected.name}</span>`;
        
        updateConsole(state.selected.note);
        
        pill.remove();
        state.selected = null;
        document.querySelectorAll('.bucket').forEach(b => b.classList.remove('highlight'));
    } else {
        // FAILURE
        pill.classList.add('shake');
        setTimeout(() => pill.classList.remove('shake'), 400);
    }
    
    const acc = Math.round((state.correct / state.attempts) * 100);
    document.getElementById('accuracy-stat').innerText = `ACCURACY: ${acc}%`;

    if (state.correct === state.game.items.length) {
        showWinModal(acc);
    }
}

// --- 4. CONSOLE & DRAWER LOGIC ---

function toggleConsole() {
    const consoleEl = document.getElementById('game-console');
    const handleText = document.getElementById('handle-text');
    state.isConsoleExpanded = !state.isConsoleExpanded;

    if (state.isConsoleExpanded) {
        consoleEl.classList.remove('collapsed');
        consoleEl.classList.add('expanded');
        handleText.innerText = "▼ CLOSE INSIGHTS";
    } else {
        consoleEl.classList.remove('expanded');
        consoleEl.classList.add('collapsed');
        handleText.innerText = "📖 SHOW CLINICAL INSIGHTS";
    }
}

function updateConsole(note) {
    document.getElementById('note-text').innerHTML = note;
    const handleText = document.getElementById('handle-text');
    handleText.innerText = "✨ NEW INSIGHT READY (TAP)";
    handleText.style.color = "#fff";
    setTimeout(() => handleText.style.color = "var(--sub-color)", 2000);
}

function resetConsole() {
    document.getElementById('note-text').innerText = "Correct matches will reveal insights here.";
    document.getElementById('mnem-display').style.display = "none";
    document.getElementById('game-console').classList.add('collapsed');
    document.getElementById('game-console').classList.remove('expanded');
    state.isConsoleExpanded = false;
}

function toggleMnemonic() {
    const box = document.getElementById('mnem-display');
    const isVisible = box.style.display === "block";
    box.innerText = state.game.mnemonic || "No specific mnemonic provided.";
    box.style.display = isVisible ? "none" : "block";
}

// --- 5. CUSTOM MODAL & PERSISTENCE ---

function showWinModal(accuracy) {
    // Save to LocalStorage
    try {
        const existing = localStorage.getItem(`alpotus_mastery_${state.game.id}`);
        if (existing === null || accuracy > parseInt(existing)) {
            localStorage.setItem(`alpotus_mastery_${state.game.id}`, accuracy);
        }
    } catch(e) {}

    // Inject Modal HTML
    const modalHtml = `
        <div class="alpotus-modal-overlay" id="winModal">
            <div class="alpotus-modal">
                <span class="modal-icon">⭐</span>
                <h2 class="modal-title">Challenge Mastered!</h2>
                <p class="modal-text">You completed this classification with <b>${accuracy}% accuracy</b>. Keep practicing to achieve 100%!</p>
                <button class="modal-btn" onclick="location.reload()">BACK TO HUB</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Trigger Entry Animation
    setTimeout(() => {
        document.getElementById('winModal').classList.add('active');
    }, 50);
}

function hexToRgbA(hex, alpha) {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Start Engine
document.addEventListener('DOMContentLoaded', init);