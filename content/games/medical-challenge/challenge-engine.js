/**
 * ALPOTUS 5.0 - UNIVERSAL MEDICAL CHALLENGE ENGINE
 * Designed for: Unified Active Recall, Clinical Mastery, and Exam Prep.
 * Features: Multi-source Chapter Scanning, Subject Theming, and Mastery Tracking.
 */

let state = {
    selectedSubject: "Pharmacology",
    activeGame: null,
    selectedItem: null,
    correct: 0,
    attempts: 0,
    totalToMatch: 0,
    isMnemonicVisible: false
};

// --- 1. INITIALIZATION ---
function init() {
    if (typeof MedicalData === 'undefined') {
        console.error("Alpotus: MedicalData not found. Check challenge-data.js path.");
        return;
    }
    // Set default theme color
    document.documentElement.style.setProperty('--subject-color', MedicalData[state.selectedSubject].color);
    
    renderSubjectFilters();
    updateChapterDropdown();
    renderGameList();
}

// --- 2. DYNAMIC FILTERS (SUBJECTS & CHAPTERS) ---

function renderSubjectFilters() {
    const row = document.getElementById('sub-filter-row');
    const subjects = Object.keys(MedicalData);
    
    row.innerHTML = subjects.map(sub => `
        <button class="sub-btn ${state.selectedSubject === sub ? 'active' : ''}" 
                onclick="setSubject('${sub}')" 
                style="--subject-color: ${MedicalData[sub].color}">
            ${sub}
        </button>
    `).join('');
}

function setSubject(sub) {
    state.selectedSubject = sub;
    // Apply Global Subject Color to CSS Variable
    document.documentElement.style.setProperty('--subject-color', MedicalData[sub].color);
    renderSubjectFilters();
    updateChapterDropdown();
    renderGameList();
}

/**
 * Scans both hardcoded MedicalData AND the VOID (MyAddedGames)
 * to populate unique chapter names for the selected subject.
 */
function updateChapterDropdown() {
    const dropdown = document.getElementById('chapter-dropdown');
    const subjectData = MedicalData[state.selectedSubject];
    let uniqueChapters = new Set();
    
    // 1. Get chapters from the hardcoded Data
    if (subjectData && subjectData.chapters) {
        for (const chKey in subjectData.chapters) {
            uniqueChapters.add(subjectData.chapters[chKey].title);
        }
    }

    // 2. Get chapters from the VOID area (MyAddedGames)
    if (typeof MyAddedGames !== 'undefined') {
        MyAddedGames.forEach(game => {
            if (game.subject === state.selectedSubject && game.chapter) {
                uniqueChapters.add(game.chapter);
            }
        });
    }

    // 3. Render HTML options
    let html = `<option value="All">All Chapters</option>`;
    Array.from(uniqueChapters).sort().forEach(chName => {
        html += `<option value="${chName}">${chName}</option>`;
    });

    dropdown.innerHTML = html;
}

// --- 3. GAME LISTING (WITH MASTERY) ---

function renderGameList() {
    const container = document.getElementById('game-list');
    const selectedChapter = document.getElementById('chapter-dropdown').value;
    const chapters = MedicalData[state.selectedSubject].chapters;
    
    // 1. Filter hardcoded games
    let allGames = [];
    for (const chKey in chapters) {
        if (selectedChapter === "All" || chapters[chKey].title === selectedChapter) {
            allGames = [...allGames, ...chapters[chKey].games];
        }
    }

    // 2. Filter & Add games from VOID
    if (typeof MyAddedGames !== 'undefined') {
        const extra = MyAddedGames.filter(g => 
            g.subject === state.selectedSubject && 
            (selectedChapter === "All" || g.chapter === selectedChapter)
        );
        allGames = [...allGames, ...extra];
    }

    if (allGames.length === 0) {
        container.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:40px; opacity:0.5;">No challenges found for this selection.</p>`;
        return;
    }

    container.innerHTML = allGames.map(game => {
        const mastery = localStorage.getItem(`alpotus_mastery_${game.id}`);
        return `
            <div class="game-card ${mastery ? 'completed' : ''}" onclick="launchGame('${game.id}')">
                <div>
                    <h3>${game.name}</h3>
                    <p style="font-size:0.7rem; color:var(--text-muted)">${game.items.length} Points to Master</p>
                </div>
                ${mastery ? `<span class="mastery-badge">✅ ${mastery}%</span>` : '<span>→</span>'}
            </div>
        `;
    }).join('');
}

// --- 4. GAMEPLAY: CORE ENGINE ---

function launchGame(gameId) {
    // Search both data sources for the specific game ID
    let foundGame = null;
    
    // Search in MedicalData
    const chapters = MedicalData[state.selectedSubject].chapters;
    for (const ch in chapters) {
        foundGame = chapters[ch].games.find(g => g.id === gameId);
        if (foundGame) break;
    }
    
    // Search in VOID if not found
    if (!foundGame && typeof MyAddedGames !== 'undefined') {
        foundGame = MyAddedGames.find(g => g.id === gameId);
    }

    if (!foundGame) return;

    state.activeGame = JSON.parse(JSON.stringify(foundGame)); 
    state.totalToMatch = state.activeGame.items.length;
    state.correct = 0;
    state.attempts = 0;
    state.selectedItem = null;

    // UI Transition
    document.getElementById('home-filters').style.display = 'none';
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('game-header').style.display = 'flex';
    document.getElementById('play-screen').style.display = 'grid';
    document.getElementById('learning-console').style.display = 'block';

    renderPool();
    renderBuckets();
    updateStats();
}

function renderPool() {
    const container = document.getElementById('pool-container');
    const shuffled = [...state.activeGame.items].sort(() => Math.random() - 0.5);
    container.innerHTML = shuffled.map(item => `
        <div class="item-card" id="item-${item.name.replace(/\s+/g, '')}" onclick="selectItem('${item.name.replace(/'/g, "\\'")}', this)">
            ${item.name}
        </div>
    `).join('');
}

function renderBuckets() {
    const container = document.getElementById('bucket-container');
    const categories = state.activeGame.categories;
    container.innerHTML = categories.map(cat => `
        <div class="bucket" onclick="attemptMatch('${cat.replace(/'/g, "\\'")}')">
            <h4>${cat}</h4>
            <div class="placed-area" id="bucket-${cat.replace(/\s+/g, '')}"></div>
        </div>
    `).join('');
}

function selectItem(name, el) {
    document.querySelectorAll('.item-card').forEach(c => {
        c.classList.remove('selected');
        c.style.borderColor = "var(--border)";
    });
    
    state.selectedItem = state.activeGame.items.find(i => i.name === name);
    el.classList.add('selected');
    el.style.borderColor = "var(--subject-color)";
    
    // Highlight buckets to show where to click
    document.querySelectorAll('.bucket').forEach(b => b.classList.add('highlight'));
}

function attemptMatch(category) {
    if (!state.selectedItem) return;

    state.attempts++;
    const itemEl = document.getElementById(`item-${state.selectedItem.name.replace(/\s+/g, '')}`);

    if (state.selectedItem.category === category) {
        // CORRECT
        state.correct++;
        const bucketArea = document.getElementById(`bucket-${category.replace(/\s+/g, '')}`);
        bucketArea.innerHTML += `<span class="placed-pill">${state.selectedItem.name}</span>`;
        
        // Show Clinical Note immediately
        showClinicalNote(state.selectedItem.note);
        
        itemEl.remove();
        state.selectedItem = null;
        document.querySelectorAll('.bucket').forEach(b => b.classList.remove('highlight'));
    } else {
        // WRONG: Visual feedback (Shake)
        itemEl.classList.remove('selected');
        itemEl.style.borderColor = "#ef4444";
        itemEl.classList.add('shake');
        setTimeout(() => itemEl.classList.remove('shake'), 400);
        state.selectedItem = null;
        document.querySelectorAll('.bucket').forEach(b => b.classList.remove('highlight'));
    }

    updateStats();
    if (state.correct === state.totalToMatch) endGame();
}

// --- 5. CLINICAL RECALL & MNEMONICS ---

function showClinicalNote(note) {
    const display = document.getElementById('note-display');
    display.innerHTML = `<b>High-Yield Point:</b> ${note || "Match correct."}`;
    
    // Hide mnemonic when new note appears
    document.getElementById('mnemonic-display').style.display = 'none';
    state.isMnemonicVisible = false;
    document.getElementById('mnem-btn').innerText = "💡 SHOW MNEMONIC";
}

function toggleMnemonic() {
    const display = document.getElementById('mnemonic-display');
    const noteDisplay = document.getElementById('note-display');

    if (!state.isMnemonicVisible) {
        display.innerText = state.activeGame.mnemonic || "No specific mnemonic provided for this set.";
        display.style.display = "block";
        noteDisplay.style.display = "none";
        document.getElementById('mnem-btn').innerText = "📖 SHOW CLINICAL NOTE";
        state.isMnemonicVisible = true;
    } else {
        display.style.display = "none";
        noteDisplay.style.display = "block";
        document.getElementById('mnem-btn').innerText = "💡 SHOW MNEMONIC";
        state.isMnemonicVisible = false;
    }
}

// --- 6. PERSISTENCE & STATS ---

function updateStats() {
    const acc = state.attempts === 0 ? 100 : Math.round((state.correct / state.attempts) * 100);
    document.getElementById('accuracy-val').innerText = `${acc}%`;
}

function endGame() {
    const finalAcc = Math.round((state.correct / state.attempts) * 100);
    // Save Mastery to Device
    localStorage.setItem(`alpotus_mastery_${state.activeGame.id}`, finalAcc);
    
    setTimeout(() => {
        alert(`Challenge Mastery Complete!\nFinal Accuracy: ${finalAcc}%`);
        exitGame();
    }, 500);
}

function exitGame() {
    // Reset View
    document.getElementById('home-filters').style.display = 'block';
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('game-header').style.display = 'none';
    document.getElementById('play-screen').style.display = 'none';
    document.getElementById('learning-console').style.display = 'none';
    renderGameList();
}

// Start
document.addEventListener('DOMContentLoaded', init);