/**
 * ALPOTUS 5.0 - FLASHCARD HUB ENGINE (Cart & SEO System)
 */

let hubState = {
    currentSub: "Anatomy",
    cart: JSON.parse(localStorage.getItem('alpotus_study_cart') || '[]'),
    masterData: {}
};

// --- 1. DATA MERGING & INIT ---
function initHub() {
    mergeData();
    renderSubjectNav();
    updateChapterDropdown();
    renderTopics();
    updateCartUI();
}

function mergeData() {
    // Clone FlashcardsData
    hubState.masterData = JSON.parse(JSON.stringify(FlashcardsData));

    // Merge VOID data if exists
    if (typeof MyAddedFlashcards !== 'undefined') {
        MyAddedFlashcards.forEach(topic => {
            const sub = topic.subject;
            const ch = topic.chapter;
            if (!hubState.masterData[sub]) {
                hubState.masterData[sub] = { icon: "📁", chapters: {} };
            }
            if (!hubState.masterData[sub].chapters[ch]) {
                hubState.masterData[sub].chapters[ch] = [];
            }
            hubState.masterData[sub].chapters[ch].push(topic);
        });
    }
}

// --- 2. NAVIGATION & FILTERS ---
function renderSubjectNav() {
    const nav = document.getElementById('subject-nav');
    const subjects = Object.keys(hubState.masterData);
    
    nav.innerHTML = subjects.map(s => `
        <button class="sub-btn ${hubState.currentSub === s ? 'active' : ''}" 
                onclick="setSub('${s}')">
            ${hubState.masterData[s].icon || ''} ${s}
        </button>
    `).join('');
}

function setSub(s) {
    hubState.currentSub = s;
    renderSubjectNav();
    updateChapterDropdown();
    renderTopics();
    
    // SEO TRIGGER: Inform the SEO engine to index this specific subject
    if (typeof SEO_Engine !== 'undefined') {
        SEO_Engine.generateFAQSchema(s, hubState.masterData[s]);
    }
}

function updateChapterDropdown() {
    const drop = document.getElementById('chapter-dropdown');
    const chapters = Object.keys(hubState.masterData[hubState.currentSub].chapters);
    drop.innerHTML = '<option value="All">All Chapters</option>' + 
        chapters.sort().map(c => `<option value="${c}">${c}</option>`).join('');
}

// --- 3. RENDERING TOPICS ---
function renderTopics() {
    const grid = document.getElementById('topic-grid');
    const chFilter = document.getElementById('chapter-dropdown').value;
    const searchFilter = document.getElementById('search-bar').value.toLowerCase();
    
    const chapters = hubState.masterData[hubState.currentSub].chapters;
    let list = [];

    // Filter and Flatten
    for (let key in chapters) {
        if (chFilter === "All" || key === chFilter) {
            list = [...list, ...chapters[key]];
        }
    }

    // Search filter
    if (searchFilter) {
        list = list.filter(t => t.name.toLowerCase().includes(searchFilter));
    }

    grid.innerHTML = list.map(topic => {
        const inCart = hubState.cart.some(item => item.id === topic.id);
        const dueCount = typeof SRS_Engine !== 'undefined' ? SRS_Engine.getDueCount(topic.cards) : 0;

        return `
            <div class="topic-card">
                <div class="topic-info">
                    <h3>${topic.name}</h3>
                    <div class="topic-meta">
                        ${topic.cards.length} Cards 
                        ${dueCount > 0 ? `• <span style="color:#ef4444">${dueCount} Due Now</span>` : ''}
                    </div>
                </div>
                <button class="btn-add-cart ${inCart ? 'in-cart' : ''}" 
                        onclick="toggleCart('${topic.id}', '${hubState.currentSub}')">
                    ${inCart ? 'REMOVE' : 'ADD TO CART'}
                </button>
            </div>
        `;
    }).join('');
}

// --- 4. CART LOGIC ---
function toggleCart(topicId, subject) {
    const index = hubState.cart.findIndex(item => item.id === topicId);
    
    if (index > -1) {
        hubState.cart.splice(index, 1);
    } else {
        hubState.cart.push({ id: topicId, sub: subject });
    }

    localStorage.setItem('alpotus_study_cart', JSON.stringify(hubState.cart));
    updateCartUI();
    renderTopics();
}

function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    const bar = document.getElementById('checkout-bar');
    const summaryEl = document.getElementById('cart-summary');

    const count = hubState.cart.length;
    countEl.innerText = count;

    if (count > 0) {
        bar.style.display = 'flex';
        summaryEl.innerText = `${count} Topic${count > 1 ? 's' : ''} in your study session`;
    } else {
        bar.style.display = 'none';
    }
}

// --- 5. INITIAL RUN ---
document.addEventListener('DOMContentLoaded', initHub);