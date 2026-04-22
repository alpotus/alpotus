/**
 * ALPOTUS FLASHCARD ENGINE 4.0 - TAB-DELIMITED (TSV)
 * Fixed for DOM loading issues
 */

// We wrap everything in this listener to prevent the "null addEventListener" error
document.addEventListener('DOMContentLoaded', () => {
    
    const inputEl = document.getElementById('raw-input');
    const countEl = document.getElementById('card-total');

    // 1. Real-time Counter logic
    if (inputEl) {
        inputEl.addEventListener('input', () => {
            const lines = inputEl.value.split('\n').filter(l => l.toUpperCase().includes('Q=') && l.toUpperCase().includes('A='));
            countEl.innerText = lines.length;
        });
    }

    // 2. The TSV Generator Function (made global so button can see it)
    window.generateFile = function() {
        const text = inputEl.value.trim();
        if (!text) { alert("Please paste the AI output first."); return; }

        const lines = text.split('\n');
        let outputRows = [];

        lines.forEach(line => {
            // Find Q= and A= ignoring case
            const regex = /Q=(.*?)A=(.*)/i;
            const match = line.match(regex);
            
            if (match) {
                const question = match[1].trim();
                const answer = match[2].trim();

                // Separating columns with a Tab (\t) is best for Anki
                outputRows.push(`${question}\t${answer}`);
            }
        });

        if (outputRows.length === 0) {
            alert("Format error! Make sure each line contains 'Q=' and 'A='.");
            return;
        }

        const finalContent = outputRows.join('\n');
        
        // Create download blob
        const blob = new Blob(["\ufeff" + finalContent], { type: 'text/plain;charset=utf-8;' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Alpotus_Anki_Deck.txt";
        link.click();
    };

    // 3. ChatGPT Prompt with Format Example
    window.copyPrompt = function() {
        const prompt = `Your task is to generate a list of question-and-answer pairs based on the context I provide.

INSTRUCTIONS:
1. You MUST use the exact format: Q=Question Text A=Answer Text
2. Each Q&A pair must be on a new, single line.
3. Generate as many as you can .
4. Generate in a codeblock.

FORMAT EXAMPLE:
Q=What is the primary muscle of respiration? A=Diaphragm
Q=What is the dose of Adult Adrenaline in Anaphylaxis? A=0.5mg IM

Information: [PASTE YOUR INFO HERE OR TOPIC NAME]`;

        navigator.clipboard.writeText(prompt).then(() => {
            alert("Optimized Study Prompt Copied!");
        });
    };
});