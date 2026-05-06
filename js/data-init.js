/**
 * ALPOTUS MEDEDGE - DATA INITIALIZATION (v6.0)
 * This file must be loaded first to initialize global containers.
 * 
 * New Features:
 * 1. Important Topic tagging (important: true)
 * 2. Clinical Pearl support (note: "...")
 * 3. Split-Subject Architecture support
 */

// Master container for all 19 subjects loaded from separate files
var FlashcardsData = {}; 

// Container for miscellaneous or community-added topics (VOID)
var MyAddedFlashcards = []; 

/**
 * STRUCTURE REFERENCE FOR SUBJECT FILES (e.g., anatomy.js):
 * 
 * FlashcardsData["SubjectName"] = {
 *    icon: "🔍",
 *    chapters: {
 *       "Chapter Name": [
 *          {
 *             id: "topic-unique-id",
 *             name: "Topic Title",
 *             important: true, // Displays 'HIGH YIELD' badge on Hub
 *             cards: [
 *                { 
 *                  id: "card-001", 
 *                  q: "Question Text?", 
 *                  a: "Answer Text or Image URL",
 *                  note: "Clinical Pearl: Extra high-yield info revealed on toggle." // Optional
 *                }
 *             ]
 *          }
 *       ]
 *    }
 * };
 */

