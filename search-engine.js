/**
 * ALPOTUS 5.0 - UNIVERSAL SEARCH (RAW-INPUT COMPATIBLE)
 */

function handleUniversalSearch(query, targetId = 'global-nav-results') {
    const resultsContainer = document.getElementById(targetId);
    if (!resultsContainer) return;

    // 1. SAFELY GATHER DATA
    const allItems = [];

    // Add items from MasterData (Tools, Calculators, etc.)
    if (typeof AlpotusData !== 'undefined') {
        for (const cat in AlpotusData) {
            if (AlpotusData[cat].items) {
                AlpotusData[cat].items.forEach(item => {
                    allItems.push({ ...item, type: 'Static' });
                });
            }
        }
    }

    // 2. SEARCH LOGIC
    if (!query || query.length < 2) {
        resultsContainer.innerHTML = '';
        resultsContainer.style.display = 'none';
        return;
    }

    const matches = allItems.filter(item => {
        const name = item.name || "";
        const desc = item.desc || "";
        return name.toLowerCase().includes(query.toLowerCase()) || 
               desc.toLowerCase().includes(query.toLowerCase());
    });

    // 3. RENDER
    if (matches.length > 0) {
        resultsContainer.style.display = 'block';
        resultsContainer.innerHTML = matches.slice(0, 8).map(item => {
            const safePath = item.path.replace(/'/g, "\\'");
            // Use window.alpotusPrefix from your app.js
            const finalPath = (window.alpotusPrefix || "./") + safePath;
            
            return `
                <div class="search-item" onclick="window.location.href='${finalPath}'">
                    <i>${item.icon || '🔍'}</i>
                    <div class="search-info">
                        <div class="search-name">${item.name}</div>
                        <div class="search-cat">${item.category || 'Utility'}</div>
                    </div>
                </div>
            `;
        }).join('');
    } else {
        resultsContainer.style.display = 'block';
        resultsContainer.innerHTML = `<div class="search-item">No results found</div>`;
    }
}