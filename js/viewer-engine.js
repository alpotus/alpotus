/**
 * ALPOTUS MEDEDGE - ARENA ENGINE (v6.3 FINAL)
 * Features: Order-Wise Deck, Clinical Pearl Toggle, Blitz Timer, and Anti-Leak Flip.
 */

let arenaState = {
    deck: [],
    currentIndex: 0,
    sessionConfig: null,
    stats: { attempts: 0, easyCount: 0 },
    timer: {
        interval: null,
        timeLeft: 5000, 
        duration: 5000
    },
    isFlipped: false,
    isPearlOpen: false
};

// --- 1. SESSION INITIALIZATION ---

function initArena() {
    const rawConfig = sessionStorage.getItem('alpotus_current_session');
    if (!rawConfig) {
        window.location.href = 'flashcards.html';
        return;
    }

    arenaState.sessionConfig = JSON.parse(rawConfig);
    buildDeck();
}

/**
 * Gathers cards strictly in the order they appear in your Subject JS files.
 */
function buildDeck() {
    let rawCards = [];
    const masterData = FlashcardsData; // Direct reference to Split-Subject data

    // Topics are processed in the order they were added to the cart
    arenaState.sessionConfig.topics.forEach(target => {
        const topic = findTopic(masterData, target.id);
        if (topic) {
            let topicCards = topic.cards.map(c => ({
                ...c,
                source: `${target.sub} > ${topic.name}`
            }));

            // If user selected "Review Due Only" in Checkout
            if (arenaState.sessionConfig.dueOnly) {
                topicCards = topicCards.filter(c => SRS_Engine.isDue(c.id));
            }

            // Append cards to the master deck (Maintains JS order)
            rawCards = [...rawCards, ...topicCards];
        }
    });

    if (rawCards.length === 0) {
        alert("No cards found for this session! (If you selected 'Due Only', you might be all caught up).");
        window.location.href = 'flashcards.html';
        return;
    }

    // SHUFFLE REMOVED: Deck stays in JS order
    arenaState.deck = rawCards; 
    renderCard();
}

function findTopic(data, id) {
    for (let s in data) {
        for (let c in data[s].chapters) {
            const found = data[s].chapters[c].find(t => t.id === id);
            if (found) return found;
        }
    }
    return null;
}

// --- 2. RENDERING ENGINE ---

function renderCard() {
    if (arenaState.currentIndex >= arenaState.deck.length) {
        showFinalReport();
        return;
    }

    arenaState.isFlipped = false;
    arenaState.isPearlOpen = false;
    const card = arenaState.deck[arenaState.currentIndex];

    // CLEANUP UI
    document.getElementById('back-text').innerText = "";
    document.getElementById('image-container').innerHTML = "";
    document.getElementById('srs-controls').style.display = 'none';
    document.getElementById('pearl-trigger').style.display = 'none';
    document.getElementById('pearl-content').style.display = 'none';

    // Counters
    document.getElementById('count-left').innerText = arenaState.deck.length - arenaState.currentIndex;
    document.getElementById('count-done').innerText = arenaState.currentIndex;

    // Load Front
    document.getElementById('source-text').innerText = card.source;
    document.getElementById('front-text').innerText = card.q;
    
    // Prepare Back
    const backText = document.getElementById('back-text');
    const imgCont = document.getElementById('image-container');
    const imageRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))/i;
    const unsplashRegex = /https:\/\/images\.unsplash\.com\/[^\s]*/i;

    const match = card.a.match(imageRegex) || card.a.match(unsplashRegex);

    if (match) {
        const imageUrl = match[0];
        const cleanText = card.a.replace(imageUrl, "").trim();
        backText.innerText = cleanText; 
        imgCont.innerHTML = `<img src="${imageUrl}" class="card-img" alt="Mededge Evidence">`;
    } else {
        backText.innerText = card.a;
    }

    // Handle Clinical Pearl
    if (card.note && card.note.trim() !== "") {
        document.getElementById('pearl-trigger').style.display = 'flex';
        document.getElementById('pearl-text').innerText = card.note;
    }

    // Blitz Timer
    if (arenaState.sessionConfig.mode === 'blitz') startBlitzTimer();
}

// --- 3. CLINICAL PEARL LOGIC ---

function togglePearl(event) {
    event.stopPropagation(); // Prevents card from un-flipping when clicking bulb
    const box = document.getElementById('pearl-content');
    arenaState.isPearlOpen = !arenaState.isPearlOpen;
    box.style.display = arenaState.isPearlOpen ? 'block' : 'none';
}

// --- 4. BLITZ TIMER ---

function startBlitzTimer() {
    clearInterval(arenaState.timer.interval);
    document.getElementById('timer-container').style.display = 'block';
    arenaState.timer.timeLeft = arenaState.timer.duration;
    
    arenaState.timer.interval = setInterval(() => {
        arenaState.timer.timeLeft -= 100;
        const percent = (arenaState.timer.timeLeft / arenaState.timer.duration) * 100;
        document.getElementById('timer-bar').style.setProperty('width', `${percent}%`);

        if (arenaState.timer.timeLeft <= 0) {
            clearInterval(arenaState.timer.interval);
            autoFailBlitz();
        }
    }, 100);
}

function autoFailBlitz() {
    flipCard();
    setTimeout(() => { if (arenaState.isFlipped) handleSRS('hard'); }, 1200);
}

// --- 5. INTERACTION & TRANSITIONS ---

function flipCard() {
    if (arenaState.isFlipped) return;
    arenaState.isFlipped = true;
    
    clearInterval(arenaState.timer.interval); 
    document.getElementById('main-card').classList.add('flipped');
    
    setTimeout(() => {
        document.getElementById('srs-controls').style.display = 'grid';
    }, 300);
}

function handleSRS(grade) {
    const card = arenaState.deck[arenaState.currentIndex];
    
    // Update SRS
    SRS_Engine.processCard(card.id, grade);
    
    arenaState.stats.attempts++;
    if (grade === 'easy') arenaState.stats.easyCount++;

    // Start Transition (Hide elements immediately)
    document.getElementById('srs-controls').style.display = 'none';
    document.getElementById('pearl-content').style.display = 'none';
    
    const cardEl = document.getElementById('main-card');
    cardEl.classList.remove('flipped');

    arenaState.currentIndex++;

    // WAIT for card to be midway (edge-on) before changing content
    setTimeout(() => {
        renderCard();
    }, 300); 
}

// --- 6. FINAL REPORT ---

function showFinalReport() {
    const accuracy = Math.round((arenaState.stats.easyCount / arenaState.stats.attempts) * 100) || 0;
    
    document.getElementById('report-screen').style.display = 'flex';
    document.getElementById('final-acc').innerText = `${accuracy}%`;
    document.getElementById('session-summary').innerText = 
        `Accuracy: ${accuracy}% | Cards: ${arenaState.stats.attempts}. 
        All progress synced to Mededge cloud storage (Local).`;

    localStorage.removeItem('alpotus_study_cart');
}

document.addEventListener('DOMContentLoaded', initArena);