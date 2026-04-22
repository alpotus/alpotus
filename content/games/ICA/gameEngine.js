/**
 * PHARMAMASTER v3.4 - NAVIGATION PROTECTED ENGINE
 * Logic: Prevents accidental exit via Browser Back Button.
 */

let state = {
    screen: "hub",      // 'hub', 'setup', 'game', 'analysis'
    type: "",           
    mode: "quiz",       
    selectedChapter: "All",
    selectedClass: "All",
    currentSet: [],
    currentIndex: 0,
    score: 0,
    correctCount: 0,
    themeColor: "#2563eb",
    resultsLog: [],
    currentDrugError: false 
};

/**
 * 1. BROWSER NAVIGATION CONTROL
 */
window.addEventListener('load', () => {
    // Push an initial state
    history.pushState({ screen: "hub" }, "");
});

window.onpopstate = function(event) {
    if (state.screen === "game") {
        if (confirm("Quit game? Your current progress will be lost.")) {
            showSetupScreen();
        } else {
            // Push the state back so they stay in the game
            history.pushState({ screen: "game" }, "");
        }
    } else if (state.screen === "setup") {
        location.reload(); // Returns to the Main Hub
    }
};

/**
 * 2. INITIALIZE GAME
 */
function initGame(type, color) {
    state.type = type;
    state.themeColor = color;
    state.resultsLog = [];
    document.documentElement.style.setProperty('--primary', color);
    showSetupScreen();
}

/**
 * 3. SETUP SCREEN
 */
function showSetupScreen() {
    state.screen = "setup";
    history.pushState({ screen: "setup" }, "");

    const container = document.getElementById('game-container');
    const chapters = [...new Set(pharmacologyData.map(d => d.chapter))].sort();
    const titles = { 'indications': 'Drug Indications', 'side_effects': 'Adverse Effects', 'contraindications': 'Contraindications', 'scenario': 'Clinical Scenarios' };

    container.innerHTML = `
        <div class="card">
            <h1>${titles[state.type]}</h1>
            <div class="mode-toggle" style="${state.type === 'scenario' ? 'display:none' : 'display:flex; background:#f1f5f9; padding:5px; border-radius:12px; margin-bottom:25px;'}">
                <button class="btn ${state.mode === 'quiz' ? 'correct' : ''}" style="flex:1; border:none;" onclick="setMode('quiz', this)">Quiz Mode</button>
                <button class="btn ${state.mode === 'sata' ? 'correct' : ''}" style="flex:1; border:none;" onclick="setMode('sata', this)">SATA Mode</button>
            </div>
            <div style="text-align:left; margin-bottom:20px;">
                <label style="font-weight:800; font-size:0.75rem; color:#64748b;">CHAPTER</label>
                <select id="chapterSelect" onchange="updateClassifications()" style="width:100%; padding:15px; border-radius:12px; border:2px solid #e2e8f0; margin-top:5px; outline:none;">
                    <option value="All">All Chapters</option>
                    ${chapters.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
            </div>
            <div style="text-align:left; margin-bottom:30px;">
                <label style="font-weight:800; font-size:0.75rem; color:#64748b;">CLASSIFICATION</label>
                <select id="classSelect" style="width:100%; padding:15px; border-radius:12px; border:2px solid #e2e8f0; margin-top:5px; outline:none;">
                    <option value="All">All Classifications</option>
                </select>
            </div>
            <button class="btn" style="width:100%; background:var(--primary); color:white;" onclick="prepareSet(true)">START MISSION</button>
        </div>
    `;
    updateClassifications();
}

function setMode(m, btn) {
    state.mode = m;
    btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('correct'));
    btn.classList.add('correct');
}

function updateClassifications() {
    const chapEl = document.getElementById('chapterSelect');
    if(!chapEl) return;
    const chapter = chapEl.value;
    const classSelect = document.getElementById('classSelect');
    let filtered = (chapter === "All") ? pharmacologyData : pharmacologyData.filter(d => d.chapter === chapter);
    const classes = [...new Set(filtered.map(d => d.classification))].sort();
    classSelect.innerHTML = `<option value="All">All Classifications</option>` + classes.map(c => `<option value="${c}">${c}</option>`).join('');
}

/**
 * 4. PREPARE SET
 */
function prepareSet(isFirstLaunch = false) {
    state.screen = "game";
    history.pushState({ screen: "game" }, "");

    if (isFirstLaunch) {
        state.selectedChapter = document.getElementById('chapterSelect').value;
        state.selectedClass = document.getElementById('classSelect').value;
    }
    let pool = [...pharmacologyData];
    if (state.selectedChapter !== "All") pool = pool.filter(d => d.chapter === state.selectedChapter);
    if (state.selectedClass !== "All") pool = pool.filter(d => d.classification === state.selectedClass);

    const setSize = (state.type === 'scenario') ? 5 : 10;
    state.currentSet = pool.sort(() => 0.5 - Math.random()).slice(0, Math.min(pool.length, setSize));
    state.currentIndex = 0; state.score = 0; state.correctCount = 0; state.resultsLog = [];
    renderQuestion();
}

/**
 * 5. RENDER QUESTION
 */
function renderQuestion() {
    const container = document.getElementById('game-container');
    const drug = state.currentSet[state.currentIndex];
    const total = state.currentSet.length;
    const progress = (state.currentIndex / total) * 100;
    state.currentDrugError = false; 

    let html = `
        <div class="card">
            <div class="hud">
                <span>DRUG ${state.currentIndex + 1} OF ${total}</span>
                <span style="color:var(--primary)">ACCURACY: ${state.currentIndex === 0 ? 0 : Math.round((state.correctCount / state.currentIndex) * 100)}%</span>
            </div>
            <div class="progress-container"><div class="progress-bar" style="width:${progress}%"></div></div>
    `;

    if (state.type === 'scenario') {
        html += `<div class="scenario-text">${drug.scenario}</div>
                 <div class="quiz-grid">
                    ${drug.scenario_options.map(opt => `<button class="btn btn-option" onclick="checkQuiz('${opt.replace(/'/g, "\\'")}', '${drug.name.replace(/'/g, "\\'")}', this)">${opt}</button>`).join('')}
                 </div>`;
    } else {
        html += `<p style="text-transform:uppercase; font-size:0.7rem; font-weight:800; color:#94a3b8; letter-spacing:1px;">Identify ${state.type.replace('_',' ')}</p>
                 <h1 class="drug-title">${drug.name}</h1>`;

        const correctOnes = drug[state.type];
        if (state.mode === 'quiz') {
            const singleCorrect = correctOnes[Math.floor(Math.random() * correctOnes.length)];
            const distractors = getDistractors(state.type, correctOnes, 3);
            const options = [singleCorrect, ...distractors].sort(() => 0.5 - Math.random());
            html += `<div class="quiz-grid">
                ${options.map(opt => `<button class="btn btn-option" onclick="checkQuiz('${opt.replace(/'/g, "\\'")}', '${singleCorrect.replace(/'/g, "\\'")}', this)">${opt}</button>`).join('')}
            </div>`;
        } else {
            const distractors = getDistractors(state.type, correctOnes, correctOnes.length);
            const options = [...correctOnes, ...distractors].sort(() => 0.5 - Math.random());
            html += `<p id="sata-instr" style="margin-bottom:15px; font-size:0.9rem; font-weight:700; color:var(--primary)">Find all ${correctOnes.length} correct options:</p>
                     <div class="sata-grid">
                        ${options.map(opt => `<button class="btn btn-option btn-sata" style="padding:12px; font-size:0.85rem;" onclick="checkSata(this, '${opt.replace(/'/g, "\\'")}')">${opt}</button>`).join('')}
                     </div>`;
        }
    }
    html += `<button id="next-btn" class="btn next-btn" style="display:none;" onclick="goToNext()">CONTINUE TO NEXT DRUG →</button></div>`;
    container.innerHTML = html;
}

/**
 * 6. FEEDBACK
 */
function checkQuiz(selected, correct, btn) {
    document.querySelectorAll('.btn-option').forEach(b => b.disabled = true);
    const isPass = selected === correct;
    if (isPass) { state.correctCount++; state.score += 20; btn.classList.add('correct'); }
    else { 
        btn.classList.add('wrong'); 
        document.querySelectorAll('.btn-option').forEach(b => { if (b.innerText.trim() === correct) b.classList.add('correct'); });
    }
    state.resultsLog.push({ drug: state.currentSet[state.currentIndex].name, status: isPass ? 'PASS' : 'FAIL' });
    document.getElementById('next-btn').style.display = 'block';
}

function checkSata(btn, val) {
    const drug = state.currentSet[state.currentIndex];
    const correctList = drug[state.type];
    const isCorrect = correctList.includes(val);

    if (isCorrect) {
        btn.classList.add('correct');
        btn.disabled = true;
        const foundCount = document.querySelectorAll('.btn-sata.correct').length;
        if (foundCount === correctList.length) {
            const status = state.currentDrugError ? 'FAIL' : 'PASS';
            if (!state.currentDrugError) { state.correctCount++; state.score += 20; }
            state.resultsLog.push({ drug: drug.name, status: status });
            document.querySelectorAll('.btn-sata').forEach(b => b.disabled = true);
            document.getElementById('next-btn').style.display = 'block';
            document.getElementById('sata-instr').innerText = "All correct answers found!";
        }
    } else {
        btn.classList.add('wrong');
        state.currentDrugError = true; 
    }
}

function goToNext() {
    state.currentIndex++;
    if (state.currentIndex < state.currentSet.length) renderQuestion();
    else showAnalysis();
}

/**
 * 7. ANALYSIS
 */
function showAnalysis() {
    state.screen = "analysis";
    const container = document.getElementById('game-container');
    const accuracy = (state.correctCount / state.currentSet.length) * 100;
    container.innerHTML = `
        <div class="card">
            <h1>Session Analysis</h1>
            <div class="score-circle">${Math.round(accuracy)}%</div>
            <table class="analysis-table">
                <thead><tr><th>DRUG</th><th>STATUS</th></tr></thead>
                <tbody>${state.resultsLog.map(res => `<tr><td>${res.drug}</td><td style="color:${res.status === 'PASS' ? 'var(--success)' : 'var(--danger)'}; font-weight:900;">${res.status}</td></tr>`).join('')}</tbody>
            </table>
            <div class="quiz-grid"><button class="btn" style="background:var(--primary); color:white;" onclick="prepareSet(false)">RETRY SESSION</button><button class="btn" style="background:var(--dark); color:white;" onclick="showSetupScreen()">NEW FILTER</button></div>
        </div>
    `;
}

function getDistractors(type, correctList, count) {
    let all = []; pharmacologyData.forEach(d => all.push(...d[type]));
    let filtered = [...new Set(all.filter(opt => !correctList.includes(opt)))];
    return filtered.sort(() => 0.5 - Math.random()).slice(0, count);
}