/**
 * ALPOTUS 5.0 - SEO DYNAMIC ENGINE
 * Function: Converts JS Flashcard data into Google-friendly JSON-LD FAQ Schema.
 */

const SEO_Engine = {
    /**
     * Generates and injects FAQ Schema for the currently selected subject.
     * @param {string} subjectName - Name of the subject (e.g., Anatomy)
     * @param {object} subjectData - The object containing chapters and topics
     */
    generateFAQSchema: function(subjectName, subjectData) {
        if (!subjectData || !subjectData.chapters) return;

        // 1. Prepare the base Schema object
        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": []
        };

        // 2. Aggregate questions from all topics in this subject
        // To keep the page fast, we limit to the first 100 questions per subject
        let questionCount = 0;
        const MAX_QUESTIONS = 100;

        for (let chKey in subjectData.chapters) {
            if (questionCount >= MAX_QUESTIONS) break;

            subjectData.chapters[chKey].forEach(topic => {
                topic.cards.forEach(card => {
                    if (questionCount < MAX_QUESTIONS) {
                        // Check if answer is a URL (image), if so, provide a text fallback for SEO
                        const isImage = /\.(jpg|jpeg|png|webp)$/.test(card.a.toLowerCase());
                        const answerText = isImage ? `Clinical image representation of ${card.q}` : card.a;

                        schema.mainEntity.push({
                            "@type": "Question",
                            "name": `${subjectName}: ${card.q}`,
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

        // 3. Inject into the DOM
        this.injectSchema(schema);
        
        console.log(`SEO Engine: Indexed ${questionCount} questions for ${subjectName}.`);
    },

    /**
     * Injects the JSON-LD script into the <head>
     */
    injectSchema: function(schemaObject) {
        // Remove existing dynamic schema if it exists
        const existingSchema = document.getElementById('dynamic-seo-schema');
        if (existingSchema) {
            existingSchema.remove();
        }

        // Create new script tag
        const script = document.createElement('script');
        script.id = 'dynamic-seo-schema';
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(schemaObject);

        // Append to head
        document.head.appendChild(script);
    },

    /**
     * Utility: Generate a breadcrumb schema for medical categories
     */
    generateBreadcrumbs: function(subject, chapter) {
        const breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Flashcards Hub",
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