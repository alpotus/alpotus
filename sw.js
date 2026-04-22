/**
 * ALPOTUS 5.0 - OFFLINE SERVICE WORKER
 * Strategy: Stale-While-Revalidate
 * Features: GitHub Pages compatibility, Full Offline Support, Automatic Cache Cleanup
 */

const CACHE_NAME = 'alpotus-v5.0-core';

// 1. ASSET INVENTORY 
// List of all files required for the app to function without internet
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './mbbs-library.html',
    './mbbs-explorer.html',
    './clinical-scores.html',
    './quick-revision.html',
    './tools.html',
    './games.html',
    './calculators.html',
    './articles.html',
    './about.html',
    './privacy.html',
    './terms.html',
    './disclaimer.html',
    './settings.html',
    './style.css',
    './app.js',
    './search-engine.js',
    './manifest.json',
    './data/masterData.js'
];

// 2. INSTALL EVENT
// Triggered when the app is first visited or updated.
// Saves all core files to the device's storage.
self.addEventListener('install', (event) => {
    self.skipWaiting(); // Force the new service worker to become active immediately
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Alpotus 5.0: Building Offline Cache...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 3. ACTIVATE EVENT
// Clean up old versions of Alpotus to free up storage space on the user's device.
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Alpotus 5.0: Removing Legacy Cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// 4. FETCH EVENT (THE ENGINE)
// Implements "Stale-While-Revalidate"
// 1. Serves the file from Cache immediately (Instant Loading).
// 2. Fetches the latest version from the Network in the background.
// 3. Updates the Cache for the next visit.
self.addEventListener('fetch', (event) => {
    // Only handle GET requests (standard for static sites)
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.match(event.request).then((cachedResponse) => {
                const fetchedResponse = fetch(event.request).then((networkResponse) => {
                    // Update the cache with the fresh version
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                }).catch(() => {
                    // If network fails, the cachedResponse (if any) is already returned below
                    console.log('Alpotus 5.0: Serving from Offline Storage');
                });

                // Return the cached version immediately, or wait for the network if not cached
                return cachedResponse || fetchedResponse;
            });
        })
    );
});