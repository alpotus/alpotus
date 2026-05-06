/**
 * ALPOTUS MEDEDGE - SEO DYNAMIC ENGINE (v6.6)
 * ---------------------------------------------------------
 * Function: Converts medical JS data into JSON-LD FAQ Schema.
 * 
 * Features:
 * 1. Dynamic Subject Indexing
 * 2. Clinical Pearl (Note) Integration into Schema Answers
 * 3. Image URL Fallback Text
 * 4. Performance-capped at 100 entities per subject
 * ---------------------------------------------------------
 */

const SEO_Engine = {
    /**
     * Generates and injects FAQ Schema for the currently viewed medical subject.
     * @param {string} subjectName - Name of the subject (e.g., Anatomy)
     * @param {object} subjectData - The subject object containing chapters/topics
     */
    generateFAQSchema: function(subjectName, subjectData) {
        if (!subjectData || !subjectData.chapters) return;

        // 1. Prepare the base Schema object
        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": []
        };

        // 2. Aggregate questions from topics in this subject
        // Capped at 100 questions to maintain page speed (Google's recommendation)
        let questionCount = 0;
        const MAX_QUESTIONS = 100;

        for (let chKey in subjectData.chapters) {
            if (questionCount >= MAX_QUESTIONS) break;

            subjectData.chapters[chKey].forEach(topic => {
                topic.cards.forEach(card => {
                    if (questionCount < MAX_QUESTIONS) {
                        
                        // SEO Logic: Determine the best text answer for search engines
                        const imageRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))/i;
                        const isImageOnly = imageRegex.test(card.a.trim());
                        
                        let answerText = "";

                        if (isImageOnly) {
                            answerText = `Visual medical representation of ${card.q}.`;
                        } else {
                            // Clean the text of any URLs
                            answerText = card.a.replace(imageRegex, "").trim();
                        }

                        // ENHANCEMENT: If a Clinical Pearl (note) exists, add it to the SEO answer
                        if (card.note) {
                            answerText += ` | Clinical Pearl: ${card.note}`;
                        }

                        schema.mainEntity.push({
                            "@type": "Question",
                            "name": `[${subjectName}] ${card.q}`,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": answerText
                            }
                        });
                        questionCount++;
                    }
                });
            });
        }

        // 3. Inject into the DOM head
        this.injectSchema(schema);
        
        console.log(`Mededge SEO: Indexed ${questionCount} questions for ${subjectName}.`);
    },

    /**
     * Injects the JSON-LD script into the <head> section
     */
    injectSchema: function(schemaObject) {
        // Remove existing dynamic schema to prevent duplicates
        const existingSchema = document.getElementById('dynamic-seo-schema');
        if (existingSchema) {
            existingSchema.remove();
        }

        // Create new script element
        const script = document.createElement('script');
        script.id = 'dynamic-seo-schema';
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(schemaObject);

        // Append to head
        document.head.appendChild(script);
    },

    /**
     * Utility: Generate a breadcrumb schema for medical categories.
     * Helps Google show the "Hub > Anatomy" structure in search results.
     */
    generateBreadcrumbs: function(subject) {
        const breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Medical Hub",
                "item": window.location.origin + "/flashcards.html"
            }, {
                "@type": "ListItem",
                "position": 2,
                "name": subject,
                "item": `${window.location.origin}/flashcards.html?sub=${encodeURIComponent(subject)}`
            }]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(breadcrumbSchema);
        document.head.appendChild(script);
    }
};