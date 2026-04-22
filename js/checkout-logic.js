/**
 * ALPOTUS 5.0 - CHECKOUT ENGINE
 * Handles cart management, due card calculation, and session launching.
 */

let checkoutState = {
    cart: JSON.parse(localStorage.getItem('alpotus_study_cart') || '[]'),
    mode: 'standard',
    masterData: {},
    allDueTopics: []
};

// --- 1. INITIALIZATION ---
function initCheckout() {
    mergeMasterData();
    renderCartItems();
    calculateDueCards();
}

function mergeMasterData() {
    // Clone FlashcardsData
    checkoutState.masterData = JSON.parse(JSON.stringify(FlashcardsData));

    // Merge MyAddedFlashcards (VOID)
    if (typeof MyAddedFlashcards !== 'undefined') {
        MyAddedFlashcards.forEach(topic => {
            const sub = topic.subject;
            const ch = topic.chapter;
            if (!checkoutState.masterData[sub]) checkoutState.masterData[sub] = { chapters: {} };
            if (!checkoutState.masterData[sub].chapters[ch]) checkoutState.masterData[sub].chapters[ch] = [];
            checkoutState.masterData[sub].chapters[ch].push(topic);
        });
    }
}

// --- 2. RENDERING CART ---
function renderCartItems() {
    const container = document.getElementById('cart-items');
    if (checkoutState.cart.length === 0) {
        container.innerHTML = `<div class="empty-state">Your cart is empty. <br><a href="flashcards.html" style="color:var(--primary); font-weight:800;">Go browse topics</a></div>`;
        return;
    }

    container.innerHTML = checkoutState.cart.map((item, index) => {
        const topic = findTopicById(item.id);
        if (!topic) return '';

        return `
            <div class="cart-item">
                <div class="item-info">
                    <h4>${topic.name}</h4>
                    <p>${item.sub} • ${topic.cards.length} Cards</p>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">✕</button>
            </div>
        `;
    }).join('');
}

function findTopicById(id) {
    for (let sub in checkoutState.masterData) {
        for (let ch in checkoutState.masterData[sub].chapters) {
            const found = checkoutState.masterData[sub].chapters[ch].find(t => t.id === id);
            if (found) return found;
        }
    }
    return null;
}

function removeFromCart(index) {
    checkoutState.cart.splice(index, 1);
    localStorage.setItem('alpotus_study_cart', JSON.stringify(checkoutState.cart));
    renderCartItems();
    calculateDueCards();
}

// --- 3. SRS DUE CALCULATIONS ---
function calculateDueCards() {
    let totalDue = 0;
    checkoutState.allDueTopics = [];

    // Scan all data for due cards
    for (let sub in checkoutState.masterData) {
        for (let ch in checkoutState.masterData[sub].chapters) {
            checkoutState.masterData[sub].chapters[ch].forEach(topic => {
                const dueCount = SRS_Engine.getDueCount(topic.cards);
                if (dueCount > 0) {
                    totalDue += dueCount;
                    // Check if this topic is already in cart
                    const inCart = checkoutState.cart.some(c => c.id === topic.id);
                    if (!inCart) {
                        checkoutState.allDueTopics.push({ id: topic.id, sub: sub });
                    }
                }
            });
        }
    }

    const box = document.getElementById('due-suggestion');
    const countEl = document.getElementById('total-due-count');

    if (totalDue > 0 && checkoutState.allDueTopics.length > 0) {
        box.style.display = 'block';
        countEl.innerText = totalDue;
    } else {
        box.style.display = 'none';
    }
}

function addDueToCart() {
    // Add all topics containing due cards to the cart
    checkoutState.allDueTopics.forEach(item => {
        if (!checkoutState.cart.some(c => c.id === item.id)) {
            checkoutState.cart.push(item);
        }
    });
    localStorage.setItem('alpotus_study_cart', JSON.stringify(checkoutState.cart));
    renderCartItems();
    calculateDueCards();
}

// --- 4. MODES & LAUNCHING ---
function setMode(mode) {
    checkoutState.mode = mode;
    document.getElementById('mode-standard').classList.remove('active');
    document.getElementById('mode-blitz').classList.remove('active');
    document.getElementById(`mode-${mode}`).classList.add('active');
}

function launchArena() {
    if (checkoutState.cart.length === 0) {
        alert("Please add at least one topic to your study cart.");
        return;
    }

    const config = {
        topics: checkoutState.cart,
        mode: checkoutState.mode, // 'standard' or 'blitz'
        dueOnly: document.getElementById('due-only-toggle').checked,
        timestamp: Date.now()
    };

    sessionStorage.setItem('alpotus_current_session', JSON.stringify(config));
    window.location.href = 'flashcard-viewer.html';
}

// Global Init
document.addEventListener('DOMContentLoaded', initCheckout);

