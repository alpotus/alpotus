/**
 * ALPOTUS MEDEDGE - HUB ENGINE (v6.8 FINAL)
 * ---------------------------------------------------------
 * Features:
 * 1. Multi-File Subject Support (Split-Architecture)
 * 2. Advanced Global Search (Scans all 19 subjects)
 * 3. High-Yield Badging (important: true logic)
 * 4. Safety-First Initialization (Auto-detects loaded subjects)
 * 5. Persistent Study Cart & SRS Due-Count Indicators
 * ---------------------------------------------------------
 */

let hubState = {
    currentSub: null, // Set dynamically to prevent 'Anatomy' undefined error
    cart: JSON.parse(localStorage.getItem('alpotus_study_cart') || '[]'),
    masterData: {},
    isGlobalSearching: false
};

// --- 1. INITIALIZATION & DATA SYNC ---

function initHub() {
    mergeMasterData();
    
    // SAFETY: Get list of subjects currently loaded in memory via <script> tags
    const availableSubjects = Object.keys(hubState.masterData);
    
    if (availableSubjects.length > 0) {
        // Auto-select the first available subject if none is selected
        if (!hubState.currentSub || !hubState.masterData[hubState.currentSub]) {
            hubState.currentSub = availableSubjects[0]; 
        }
        
        renderSubjectNav();
        updateChapterDropdown();
        renderTopics();
        updateCartUI();

        // SEO: Inform the engine to index the initial subject metadata
        if (typeof SEO_Engine !== 'undefined') {
            SEO_Engine.generateFAQSchema(hubState.currentSub, hubState.masterData[hubState.currentSub]);
        }
    } else {
        // Fallback: Display error if no data files are found
        const grid = document.getElementById('topic-grid');
        if (grid) {
            grid.innerHTML = `
                <div style="text-align:center; padding:60px 20px; opacity:0.6; grid-column: 1/-1;">
                    <div style="font-size:3rem; margin-bottom:15px;">📂</div>
                    <h2 style="margin:0;">No Data Detected</h2>
                    <p>Please link your subject JS files in flashcards.html</p>
                </div>`;
        }
    }
}

/**
 * References the global FlashcardsData built by split-subject files
 */
function mergeMasterData() {
    hubState.masterData = FlashcardsData;

    // Safely merge "VOID" cards (MyAddedFlashcards)
    if (typeof MyAddedFlashcards !== 'undefined' && MyAddedFlashcards.length > 0) {
        MyAddedFlashcards.forEach(topic => {
            const sub = topic.subject;
            const ch = topic.chapter;
            if (!hubState.masterData[sub]) {
                hubState.masterData[sub] = { icon: "📁", chapters: {} };
            }
            if (!hubState.masterData[sub].chapters[ch]) {
                hubState.masterData[sub].chapters[ch] = [];
            }
            // Ensure no duplicate topic IDs
            if (!hubState.masterData[sub].chapters[ch].some(t => t.id === topic.id)) {
                hubState.masterData[sub].chapters[ch].push(topic);
            }
        });
    }
}

// --- 2. NAVIGATION & SEARCH ENGINE ---

function renderSubjectNav() {
    const nav = document.getElementById('subject-nav');
    if (!nav) return;

    const subjects = Object.keys(hubState.masterData);
    
    nav.innerHTML = subjects.map(s => `
        <button class="sub-btn ${hubState.currentSub === s && !hubState.isGlobalSearching ? 'active' : ''}" 
                onclick="setSub('${s}')">
            ${hubState.masterData[s].icon || '📖'} ${s}
        </button>
    `).join('');
}

function setSub(s) {
    hubState.isGlobalSearching = false;
    hubState.currentSub = s;
    
    // UI Cleanup
    const searchBar = document.getElementById('search-bar');
    if (searchBar) searchBar.value = ""; 
    
    renderSubjectNav();
    updateChapterDropdown();
    renderTopics();
    
    // SEO Update
    if (typeof SEO_Engine !== 'undefined') {
        SEO_Engine.generateFAQSchema(s, hubState.masterData[s]);
    }
}

/**
 * GLOBAL SEARCH LOGIC
 * Scans Topic names across the entire 19-subject database.
 */
function handleGlobalSearch() {
    const searchBar = document.getElementById('search-bar');
    const query = searchBar ? searchBar.value.toLowerCase() : "";
    
    if (query.length > 0) {
        hubState.isGlobalSearching = true;
        // Un-highlight subject buttons during search
        const navBtns = document.querySelectorAll('.sub-btn');
        navBtns.forEach(btn => btn.classList.remove('active'));
    } else {
        hubState.isGlobalSearching = false;
        renderSubjectNav();
    }
    
    renderTopics();
}

function updateChapterDropdown() {
    const drop = document.getElementById('chapter-dropdown');
    if (!drop || !hubState.masterData[hubState.currentSub]) return;

    const chapters = Object.keys(hubState.masterData[hubState.currentSub].chapters);
    
    drop.innerHTML = '<option value="All">All Chapters</option>' + 
        chapters.sort().map(c => `<option value="${c}">${c}</option>`).join('');
}

// --- 3. TOPIC RENDERING ENGINE ---

function renderTopics() {
    const grid = document.getElementById('topic-grid');
    if (!grid) return;

    const searchBar = document.getElementById('search-bar');
    const query = searchBar ? searchBar.value.toLowerCase() : "";
    const chFilter = document.getElementById('chapter-dropdown').value;
    
    let results = [];

    if (hubState.isGlobalSearching) {
        // --- LOGIC: SCAN ALL SUBJECTS ---
        for (let subKey in hubState.masterData) {
            const subject = hubState.masterData[subKey];
            for (let chKey in subject.chapters) {
                subject.chapters[chKey].forEach(topic => {
                    if (topic.name.toLowerCase().includes(query)) {
                        results.push({ ...topic, subName: subKey });
                    }
                });
            }
        }
    } else {
        // --- LOGIC: LOCAL SUBJECT VIEW ---
        if (!hubState.masterData[hubState.currentSub]) return;

        const chapters = hubState.masterData[hubState.currentSub].chapters;
        for (let chKey in chapters) {
            if (chFilter === "All" || chKey === chFilter) {
                chapters[chKey].forEach(topic => {
                    results.push({ ...topic, subName: hubState.currentSub });
                });
            }
        }
    }

    grid.innerHTML = results.map(topic => {
        const inCart = hubState.cart.some(item => item.id === topic.id);
        const dueCount = (typeof SRS_Engine !== 'undefined') ? SRS_Engine.getDueCount(topic.cards) : 0;
        
        return `
            <div class="topic-card">
                <div class="topic-info">
                    ${topic.important ? `<span class="badge-yield">🔥 High Yield</span>` : ''}
                    <h3>${topic.name}</h3>
                    <div class="topic-meta">
                        <span>${topic.cards.length} Cards</span>
                        ${hubState.isGlobalSearching ? `<span style="color:var(--primary)">• ${topic.subName}</span>` : ''}
                        ${dueCount > 0 ? `<span class="due-indicator"> • ${dueCount} Due</span>` : ''}
                    </div>
                </div>
                <button class="btn-add-cart ${inCart ? 'in-cart' : ''}" 
                        onclick="toggleCart('${topic.id}', '${topic.subName}')">
                    ${inCart ? 'REMOVE' : 'ADD'}
                </button>
            </div>
        `;
    }).join('');

    // Handle No Results
    if (results.length === 0) {
        grid.innerHTML = `
            <div style="text-align:center; padding:50px; opacity:0.4; grid-column: 1/-1;">
                No matching topics found.
            </div>`;
    }
}

// --- 4. CART PERSISTENCE ---

function toggleCart(topicId, subject) {
    const index = hubState.cart.findIndex(item => item.id === topicId);
    
    if (index > -1) {
        hubState.cart.splice(index, 1);
    } else {
        hubState.cart.push({ id: topicId, sub: subject });
    }

    // Save to browser memory
    localStorage.setItem('alpotus_study_cart', JSON.stringify(hubState.cart));
    
    updateCartUI();
    renderTopics();
}

function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    const bar = document.getElementById('checkout-bar');
    const summaryEl = document.getElementById('cart-summary');

    if (!countEl || !bar || !summaryEl) return;

    const count = hubState.cart.length;
    countEl.innerText = count;

    if (count > 0) {
        bar.style.display = 'flex';
        summaryEl.innerText = `${count} Topic${count > 1 ? 's' : ''} Selected`;
    } else {
        bar.style.display = 'none';
    }
}

// Global Initialization
document.addEventListener('DOMContentLoaded', initHub);