/**
 * ALPOTUS 5.0 - ARENA VIEWER ENGINE (v5.8 FINAL)
 * Features: Blitz Timer, SM-2 Integration, Anti-Leak Transitions, and Smart Image Detection.
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
    isFlipped: false
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

function buildDeck() {
    let rawCards = [];
    const masterData = mergeAllData(); 

    arenaState.sessionConfig.topics.forEach(target => {
        const topic = findTopic(masterData, target.id);
        if (topic) {
            let cardsToAdd = topic.cards.map(c => ({
                ...c,
                source: `${target.sub} > ${topic.name}`
            }));

            if (arenaState.sessionConfig.dueOnly) {
                cardsToAdd = cardsToAdd.filter(c => SRS_Engine.isDue(c.id));
            }

            rawCards = [...rawCards, ...cardsToAdd];
        }
    });

    if (rawCards.length === 0) {
        alert("No cards found for this session! (Check if cards are due)");
        window.location.href = 'flashcards.html';
        return;
    }

    // Shuffle and Load
    arenaState.deck = rawCards.sort(() => Math.random() - 0.5);
    renderCard();
}

function mergeAllData() {
    let data = JSON.parse(JSON.stringify(FlashcardsData));
    if (typeof MyAddedFlashcards !== 'undefined') {
        MyAddedFlashcards.forEach(t => {
            if (!data[t.subject]) data[t.subject] = { chapters: {} };
            if (!data[t.subject].chapters[t.chapter]) data[t.subject].chapters[t.chapter] = [];
            data[t.subject].chapters[t.chapter].push(t);
        });
    }
    return data;
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

// --- 2. RENDERING & BLITZ LOGIC ---

function renderCard() {
    if (arenaState.currentIndex >= arenaState.deck.length) {
        showFinalReport();
        return;
    }

    arenaState.isFlipped = false;
    const card = arenaState.deck[arenaState.currentIndex];

    // CLEANUP: Immediately clear the back content to prevent "leaking"
    document.getElementById('back-text').innerText = "";
    document.getElementById('image-container').innerHTML = "";
    document.getElementById('srs-controls').style.display = 'none';

    // UI Updates
    document.getElementById('count-left').innerText = arenaState.deck.length - arenaState.currentIndex;
    document.getElementById('count-done').innerText = arenaState.currentIndex;

    // Load Front Content
    document.getElementById('source-text').innerText = card.source;
    document.getElementById('front-text').innerText = card.q;
    
    // Prepare Back Content (Hidden until flip)
    const backText = document.getElementById('back-text');
    const imgCont = document.getElementById('image-container');
    const imageRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))/i;
    const unsplashRegex = /https:\/\/images\.unsplash\.com\/[^\s]*/i;

    const match = card.a.match(imageRegex) || card.a.match(unsplashRegex);

    if (match) {
        const imageUrl = match[0];
        const cleanText = card.a.replace(imageUrl, "").trim();
        backText.innerText = cleanText; 
        imgCont.innerHTML = `<img src="${imageUrl}" class="card-img" alt="Evidence">`;
    } else {
        backText.innerText = card.a;
    }

    // Restart Blitz Timer
    if (arenaState.sessionConfig.mode === 'blitz') {
        startBlitzTimer();
    }
}

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
    setTimeout(() => {
        if (arenaState.isFlipped) handleSRS('hard');
    }, 1200);
}

// --- 3. INTERACTION & TRANSITIONS ---

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
    
    // 1. Process SRS
    SRS_Engine.processCard(card.id, grade);
    
    // 2. Local Session Stats
    arenaState.stats.attempts++;
    if (grade === 'easy') arenaState.stats.easyCount++;

    // 3. START TRANSITION
    // Hide buttons immediately
    document.getElementById('srs-controls').style.display = 'none';
    
    // Un-flip the physical card
    const cardEl = document.getElementById('main-card');
    cardEl.classList.remove('flipped');

    // Move to next index
    arenaState.currentIndex++;

    // WAIT for card to be midway (edge-on) before changing text to prevent leak
    setTimeout(() => {
        renderCard();
    }, 300); 
}

// --- 4. FINAL REPORT ---

function showFinalReport() {
    const accuracy = Math.round((arenaState.stats.easyCount / arenaState.stats.attempts) * 100) || 0;
    
    document.getElementById('report-screen').style.display = 'flex';
    document.getElementById('final-acc').innerText = `${accuracy}%`;
    document.getElementById('session-summary').innerText = 
        `You completed ${arenaState.stats.attempts} cards with ${accuracy}% accuracy. 
        Your study intervals have been updated.`;

    // Empty the cart after successful session
    localStorage.removeItem('alpotus_study_cart');
}

document.addEventListener('DOMContentLoaded', initArena);