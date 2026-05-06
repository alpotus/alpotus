/**
 * ALPOTUS MEDEDGE - CHECKOUT ENGINE (v7.5 FINAL FIX)
 */

// 1. GLOBAL STATE
let checkoutState = {
    cart: JSON.parse(localStorage.getItem('alpotus_study_cart') || '[]'),
    mode: 'standard',
    allDueTopics: []
};

// --- 2. HTML INTERFACE FUNCTIONS (Defined globally to prevent "not defined" errors) ---

window.setMode = function(mode) {
    checkoutState.mode = mode;
    console.log("Mode set to:", mode);
    
    const stdBtn = document.getElementById('mode-standard');
    const blzBtn = document.getElementById('mode-blitz');
    
    if (stdBtn) stdBtn.classList.remove('active');
    if (blzBtn) blzBtn.classList.remove('active');
    
    const activeBtn = document.getElementById(`mode-${mode}`);
    if (activeBtn) activeBtn.classList.add('active');
};

window.launchArena = function() {
    if (checkoutState.cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const config = {
        topics: checkoutState.cart,
        mode: checkoutState.mode,
        dueOnly: document.getElementById('due-only-toggle').checked
    };

    sessionStorage.setItem('alpotus_current_session', JSON.stringify(config));
    window.location.href = 'flashcard-viewer.html';
};

window.removeFromCart = function(index) {
    checkoutState.cart.splice(index, 1);
    localStorage.setItem('alpotus_study_cart', JSON.stringify(checkoutState.cart));
    renderCartItems();
    calculateDueCards();
};

window.addDueToCart = function() {
    checkoutState.allDueTopics.forEach(topicRef => {
        if (!checkoutState.cart.some(c => c.id === topicRef.id)) {
            checkoutState.cart.push(topicRef);
        }
    });
    localStorage.setItem('alpotus_study_cart', JSON.stringify(checkoutState.cart));
    renderCartItems();
    calculateDueCards();
};

// --- 3. DATA DISCOVERY ---

function findTopicInMaster(topicId) {
    // 1. Check Split Subject Files
    for (let subName in FlashcardsData) {
        const chapters = FlashcardsData[subName].chapters;
        if (!chapters) continue;

        for (let chName in chapters) {
            const found = chapters[chName].find(t => t.id === topicId);
            if (found) return { ...found, subjectKey: subName };
        }
    }

    // 2. Check MyAddedFlashcards (VOID)
    if (typeof MyAddedFlashcards !== 'undefined') {
        const voidMatch = MyAddedFlashcards.find(t => t.id === topicId);
        if (voidMatch) return { ...voidMatch, subjectKey: voidMatch.subject };
    }

    return null;
}

// --- 4. UI RENDERING ---

function renderCartItems() {
    const container = document.getElementById('cart-items');
    if (!container) return;

    if (checkoutState.cart.length === 0) {
        container.innerHTML = `<div class="empty-state">Cart is empty. <br><a href="flashcards.html" style="color:var(--primary); font-weight:800; text-decoration:none;">Browse topics →</a></div>`;
        return;
    }

    let html = "";
    checkoutState.cart.forEach((item, index) => {
        const topic = findTopicInMaster(item.id);

        if (topic) {
            html += `
                <div class="cart-item">
                    <div class="item-info">
                        <h4>${topic.name} ${topic.important ? '🔥' : ''}</h4>
                        <p>${topic.subjectKey} • ${topic.cards.length} Cards</p>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${index})">✕</button>
                </div>
            `;
        } else {
            // If data is still loading, show a "Loading" state instead of "Missing"
            html += `
                <div class="cart-item" style="opacity:0.6">
                    <div class="item-info">
                        <h4>Loading Data...</h4>
                        <p>ID: ${item.id}</p>
                    </div>
                </div>
            `;
        }
    });

    container.innerHTML = html;
}

function calculateDueCards() {
    let totalDue = 0;
    checkoutState.allDueTopics = [];

    for (let subName in FlashcardsData) {
        const chapters = FlashcardsData[subName].chapters;
        if (!chapters) continue;

        for (let chName in chapters) {
            chapters[chName].forEach(topic => {
                const dueCount = (typeof SRS_Engine !== 'undefined') ? SRS_Engine.getDueCount(topic.cards) : 0;
                if (dueCount > 0) {
                    totalDue += dueCount;
                    if (!checkoutState.cart.some(c => c.id === topic.id)) {
                        checkoutState.allDueTopics.push({ id: topic.id, sub: subName });
                    }
                }
            });
        }
    }

    const box = document.getElementById('due-suggestion');
    const countEl = document.getElementById('total-due-count');
    if (box && countEl) {
        box.style.display = (totalDue > 0 && checkoutState.allDueTopics.length > 0) ? 'block' : 'none';
        countEl.innerText = totalDue;
    }
}

// --- 5. INITIALIZATION BOOTSTRAPPER ---

function init() {
    console.log("Mededge: Checkout Booting...");
    renderCartItems();
    calculateDueCards();

    // If data was missing, try to re-render again in 500ms to allow JS files to catch up
    setTimeout(() => {
        renderCartItems();
        calculateDueCards();
    }, 500);
}

document.addEventListener('DOMContentLoaded', init);