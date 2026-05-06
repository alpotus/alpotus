/**
 * ALPOTUS MEDEDGE - ADVANCED SRS ENGINE (v7.2 STABLE)
 * ---------------------------------------------------------
 * Logic: Enhanced SM-2 with Legacy Data Protection
 * Fix: Auto-repairs records missing the 'history' array.
 * ---------------------------------------------------------
 */

const SRS_CONFIG = {
    DEFAULT_EASE: 2.5,
    MIN_EASE: 1.3,
    MAX_INTERVAL: 36500,
    INITIAL_INTERVAL_NEW: 1,
    GRADUATING_INTERVAL: 4,
    FUZZ_FACTOR: 0.05
};

const SRS_Engine = {
    
    // --- 1. DATA CORE ---

    getStorage: function() {
        try {
            return JSON.parse(localStorage.getItem('alpotus_srs_vault') || '{}');
        } catch (e) {
            return {};
        }
    },

    saveStorage: function(data) {
        localStorage.setItem('alpotus_srs_vault', JSON.stringify(data));
    },

    /**
     * Gets a card record and REPAIRS it if it comes from an older version
     */
    getCardRecord: function(id) {
        const vault = this.getStorage();
        let record = vault[id];

        // If card is brand new, initialize it
        if (!record) {
            record = {
                id: id,
                interval: 0,
                repetition: 0,
                ease: SRS_CONFIG.DEFAULT_EASE,
                nextReview: 0,
                history: [] // New cards get this by default
            };
        }

        // LEGACY REPAIR: If card exists but was made in an older version, 
        // it might be missing the history array. We add it here to prevent 'push' errors.
        if (!record.history) {
            record.history = [];
        }

        return record;
    },

    // --- 2. SM-2 ALGORITHM ---

    processCard: function(id, performance) {
        let record = this.getCardRecord(id); // This now guarantees history exists
        let vault = this.getStorage();
        
        let quality = 1; // Default 'Hard'
        if (performance === 'good') quality = 3;
        if (performance === 'easy') quality = 5;

        // A. Update Intervals
        if (quality < 3) {
            record.repetition = 0;
            record.interval = SRS_CONFIG.INITIAL_INTERVAL_NEW;
        } else {
            if (record.repetition === 0) {
                record.interval = SRS_CONFIG.INITIAL_INTERVAL_NEW;
            } else if (record.repetition === 1) {
                record.interval = SRS_CONFIG.GRADUATING_INTERVAL;
            } else {
                record.interval = Math.round(record.interval * record.ease);
            }
            // Add Fuzz
            const fuzz = Math.round(record.interval * (Math.random() * SRS_CONFIG.FUZZ_FACTOR));
            record.interval += (Math.random() > 0.5 ? fuzz : -fuzz);
            record.repetition++;
        }

        // B. Update Ease Factor
        record.ease = record.ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        if (record.ease < SRS_CONFIG.MIN_EASE) record.ease = SRS_CONFIG.MIN_EASE;

        // C. Schedule
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        record.nextReview = today.getTime() + (record.interval * 24 * 60 * 60 * 1000);

        // D. LOG HISTORY (The fix is above in getCardRecord, so this won't crash)
        record.history.push({ date: Date.now(), q: quality });
        if (record.history.length > 20) record.history.shift();

        vault[id] = record;
        this.saveStorage(vault);
        this.logActivity();
    },

    // --- 3. ANALYTICS ---

    isDue: function(id) {
        const record = this.getCardRecord(id);
        if (record.repetition === 0) return true;
        const today = new Date();
        today.setHours(0,0,0,0);
        return today.getTime() >= record.nextReview;
    },

    getDueCount: function(cards) {
        if (!cards) return 0;
        return cards.filter(c => this.isDue(c.id)).length;
    },

    calculateMastery: function(cards) {
        if (!cards || cards.length === 0) return 0;
        let totalPoints = 0;
        cards.forEach(c => {
            const record = this.getCardRecord(c.id);
            if (record.repetition > 2) totalPoints += 3; // Mastered
            else if (record.repetition > 0) totalPoints += 1; // Learning
        });
        return Math.round((totalPoints / (cards.length * 3)) * 100);
    },

    // --- 4. ACTIVITY LOGGING ---

    logActivity: function() {
        let log = JSON.parse(localStorage.getItem('alpotus_activity_log') || '[]');
        const today = new Date().toLocaleDateString();
        if (!log.includes(today)) {
            log.push(today);
            localStorage.setItem('alpotus_activity_log', JSON.stringify(log));
        }
    },

    nukeAllProgress: function() {
        if (confirm("Delete all study history?")) {
            localStorage.removeItem('alpotus_srs_vault');
            localStorage.removeItem('alpotus_activity_log');
            location.reload();
        }
    }
};