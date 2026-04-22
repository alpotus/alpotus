/**
 * ALPOTUS 5.0 - SRS CORE ENGINE (Anki-style SM-2)
 * Logic: Handles persistent card memory, intervals, and due dates.
 */

const SRS_SETTINGS = {
    DEFAULT_EASE: 2.5,
    MIN_EASE: 1.3,
    START_INTERVAL: 1 // Start with 1 day
};

const SRS_Engine = {
    // --- 1. DATA ACCESS ---
    
    // Get all SRS data from localStorage
    getStorage: function() {
        return JSON.parse(localStorage.getItem('alpotus_srs_vault') || '{}');
    },

    // Save all SRS data to localStorage
    saveStorage: function(data) {
        localStorage.setItem('alpotus_srs_vault', JSON.stringify(data));
    },

    // Get specific card record or return a fresh one
    getCardRecord: function(id) {
        const vault = this.getStorage();
        return vault[id] || {
            id: id,
            interval: 0,      // Days until next review
            repetition: 0,    // Successful consecutive reviews
            ease: SRS_SETTINGS.DEFAULT_EASE,
            nextReview: 0,    // Timestamp
            status: 'new'     // new, learning, or review
        };
    },

    // --- 2. THE SM-2 ALGORITHM ---

    /**
     * Updates card stats based on performance
     * @param {string} id - The manual card ID
     * @param {string} performance - 'hard', 'good', or 'easy'
     */
    processCard: function(id, performance) {
        let record = this.getCardRecord(id);
        let vault = this.getStorage();
        
        // Convert performance strings to Quality numbers (0-5)
        // 5 = Easy, 3 = Good, 1 = Hard (Simplified SM-2)
        let quality = 1;
        if (performance === 'good') quality = 3;
        if (performance === 'easy') quality = 5;

        // Reset if Hard
        if (quality < 3) {
            record.repetition = 0;
            record.interval = 1;
            record.status = 'learning';
        } else {
            // Increase repetitions
            if (record.repetition === 0) record.interval = 1;
            else if (record.repetition === 1) record.interval = 4; // Gap between 1st and 2nd review
            else record.interval = Math.round(record.interval * record.ease);

            record.repetition++;
            record.status = 'review';
        }

        // Adjust Ease Factor (The "Anki" secret sauce)
        record.ease = record.ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        if (record.ease < SRS_SETTINGS.MIN_EASE) record.ease = SRS_SETTINGS.MIN_EASE;

        // Calculate next review timestamp (Now + Interval in Days)
        const now = new Date();
        now.setHours(0, 0, 0, 0); // Normalize to start of today
        record.nextReview = now.getTime() + (record.interval * 24 * 60 * 60 * 1000);

        // Update vault
        vault[id] = record;
        this.saveStorage(vault);
    },

    // --- 3. UTILITIES ---

    // Check if a specific card is due
    isDue: function(id) {
        const record = this.getCardRecord(id);
        if (!record.nextReview) return true; // New cards are always due
        
        const today = new Date();
        today.setHours(0,0,0,0);
        return today.getTime() >= record.nextReview;
    },

    // Scan a topic and count how many cards are due
    getDueCount: function(topicCards) {
        let dueCount = 0;
        topicCards.forEach(card => {
            if (this.isDue(card.id)) dueCount++;
        });
        return dueCount;
    },

    // Get specific cards that are due from a list
    getDueCardsOnly: function(topicCards) {
        return topicCards.filter(card => this.isDue(card.id));
    }
};