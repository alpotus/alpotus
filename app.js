/**
 * ALPOTUS 5.0 - THE UNIFIED SMART ENGINE (FINAL VERSION)
 * Designed for: GitHub Pages, PWA Offline, and Cross-Protocol Compatibility.
 * CEO: Sukkannagari Karthik Reddy
 */

// --- 1. GLOBAL PATH RESOLVER ---
// Renamed to 'window.alpotusPrefix' to prevent any identifier collision errors.
if (typeof window.alpotusPrefix === 'undefined') {
    window.alpotusPrefix = (function() {
        const path = window.location.pathname;
        const isGitHub = window.location.hostname.includes('github.io');
        const segments = path.split('/').filter(p => p !== '' && !p.includes('.html'));
        const depth = isGitHub ? segments.length - 1 : segments.length;
        let p = "";
        for (let i = 0; i < depth; i++) p += "../";
        return p || "./";
    })();
}

// --- 2. UI TEMPLATES ---
// Using 'var' to allow safe script re-loading.
var UI_SHELL = {
    splash: `
        <div id="splash">
            <div class="splash-content">ALPOTUS</div>
        </div>
    `,
    header: `
        <header class="app-header">
            <div class="header-container">
                <div class="logo" onclick="window.location.href='${window.alpotusPrefix}index.html'">AL<span>POTUS</span></div>
                <div class="search-bar">
                    <input type="text" placeholder="Search Alpotus..." onkeyup="handleUniversalSearch(this.value, 'global-nav-results')">
                    <div id="global-nav-results" class="search-results"></div>
                </div>
            </div>
        </header>
    `,
    bottomNav: `
        <nav class="bottom-nav">
            <div class="nav-container">
                <a href="${window.alpotusPrefix}index.html" class="nav-tab" id="nav-home">
                    <i style="font-style:normal; font-size:1.4rem;">🏠</i>
                    <span>Home</span>
                </a>
                <a href="${window.alpotusPrefix}mbbs-library.html" class="nav-tab" id="nav-library">
                    <i style="font-style:normal; font-size:1.4rem;">📚</i>
                    <span>Library</span>
                </a>
                <a href="${window.alpotusPrefix}games.html" class="nav-tab" id="nav-games">
                    <i style="font-style:normal; font-size:1.4rem;">🎮</i>
                    <span>Games</span>
                </a>
                <a href="${window.alpotusPrefix}settings.html" class="nav-tab" id="nav-settings">
                    <i style="font-style:normal; font-size:1.4rem;">⚙️</i>
                    <span>Settings</span>
                </a>
            </div>
        </nav>
    `
};

// --- 3. INITIALIZATION ENGINE ---
function initAlpotus() {
    // A. Apply Saved Theme (Try-Catch to prevent 'file://' security errors)
    try {
        const savedTheme = localStorage.getItem('alpotus-theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    } catch (storageError) {
        console.warn("Alpotus: LocalStorage inaccessible (Normal on local file protocol).");
    }

    // B. Inject Components (Prevent double injection)
    if (!document.getElementById('splash') && !document.querySelector('.app-header')) {
        document.body.insertAdjacentHTML('afterbegin', UI_SHELL.header);
        document.body.insertAdjacentHTML('afterbegin', UI_SHELL.splash);
        document.body.insertAdjacentHTML('beforeend', UI_SHELL.bottomNav);
    }

    // C. Handle Splash Screen Timer
    setTimeout(() => {
        const splashEl = document.getElementById('splash');
        if (splashEl) {
            splashEl.classList.add('hidden');
            setTimeout(() => splashEl.remove(), 600); // Remove from DOM for speed
        }
    }, 200);

    // D. Sync UI Elements
    highlightActiveTab();
    const toggleSwitch = document.getElementById('darkTogglePage');
    if (toggleSwitch) {
        toggleSwitch.checked = document.body.classList.contains('dark-mode');
    }
}

// --- 4. NAVIGATION HIGHLIGHTING ---
function highlightActiveTab() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));

    if (path.includes('index') || path === '/' || path.endsWith('/')) {
        document.getElementById('nav-home')?.classList.add('active');
    } else if (path.includes('mbbs') || path.includes('explorer') || path.includes('library')) {
        document.getElementById('nav-library')?.classList.add('active');
    } else if (path.includes('games')) {
        document.getElementById('nav-games')?.classList.add('active');
    } else if (path.includes('settings') || path.includes('about') || path.includes('privacy') || path.includes('terms') || path.includes('disclaimer')) {
        document.getElementById('nav-settings')?.classList.add('active');
    }
}

// --- 5. GLOBAL THEME CONTROLLER ---
// Attached to window to be accessible from any HTML 'onclick' event.
window.toggleDarkMode = function() {
    const isDark = document.body.classList.toggle('dark-mode');
    
    // Save state inside a Safety Box
    try {
        localStorage.setItem('alpotus-theme', isDark ? 'dark' : 'light');
    } catch (e) {
        console.error("Alpotus: Theme could not be saved to device.");
    }
    
    // Sync the visual toggle switch if the user is currently on the settings page
    const toggleSwitch = document.getElementById('darkTogglePage');
    if (toggleSwitch) toggleSwitch.checked = isDark;
};

// --- 6. STARTUP & SERVICE WORKER ---
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAlpotus);
} else {
    initAlpotus();
}

// Service Worker Registration (Only if on a real web server protocol)
if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(window.alpotusPrefix + 'sw.js')
            .then(reg => console.log('Alpotus 5.0: Offline Core Ready'))
            .catch(err => console.log('Alpotus 5.0: SW failed (Normal on local files)'));
    });
}

// --- 7. UTILITY: HIDE SEARCH RESULTS ---
document.addEventListener('click', (e) => {
    const searchInput = document.querySelector('.search-bar input');
    const resultsBox = document.getElementById('global-nav-results');
    if (resultsBox && e.target !== searchInput) {
        resultsBox.style.display = 'none';
    }
});