/**
 * ALPOTUS MEDEDGE: TITAN ENGINE v21.0
 * Premium Clinical Logic, SEO Sanitization, and Global Ad Management
 */

(function() {
    // ==========================================
    // 1. GLOBAL AD CONFIGURATION
    // ==========================================
    const ADS_CONFIG = {
        enabled: true,
        client: "ca-pub-XXXXXXXXXXXXXXXX", // REPLACE WITH YOUR ID
        topSlot: "1234567890",            // REPLACE WITH YOUR TOP SLOT ID
        bottomSlot: "0987654321"         // REPLACE WITH YOUR BOTTOM SLOT ID
    };

    /**
     * AD INJECTOR
     * Automatically places AdSense units within the content
     */
    function injectAds() {
        if (!ADS_CONFIG.enabled) return;
        const container = document.getElementById('titan-content');
        if (!container) return;

        // Create Top Ad Unit
        const topAd = document.createElement('div');
        topAd.style.cssText = "margin: 30px 0; text-align: center; clear: both;";
        topAd.innerHTML = `
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="${ADS_CONFIG.client}"
                 data-ad-slot="${ADS_CONFIG.topSlot}"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>`;

        // Insert after the first H2 (or at the top if no H2)
        const firstHeader = container.querySelector('h2');
        if (firstHeader) {
            firstHeader.after(topAd);
        } else {
            container.prepend(topAd);
        }

        // Create Bottom Ad Unit
        const bottomAd = document.createElement('div');
        bottomAd.style.cssText = "margin: 50px 0; text-align: center; clear: both;";
        bottomAd.innerHTML = `
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="${ADS_CONFIG.client}"
                 data-ad-slot="${ADS_CONFIG.bottomSlot}"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>`;
        container.appendChild(bottomAd);

        // Trigger AdSense push
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
            (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.log("AdSense logic pending initialization.");
        }
    }

    /**
     * 2. THE TITAN CONTENT TRANSFORMER
     */
    window.processTitanContent = function(body) {
        if (!body) return "";

        // --- PRE-PROCESSOR: Fix Browser HTML encoding ---
        // Converts <br> back to newlines and &gt; back to -> for the engine to read
        body = body.replace(/<br\s*[\/]?>/gi, "\n")
                   .replace(/&gt;/g, ">")
                   .replace(/-&gt;/g, "->");

        // --- A. MNEMONIC PARSER ---
        body = body.replace(/MNEMONIC:\s*(.*?)\nTEXT:\s*(.*?)\nLIST:\s*([\s\S]+?)(?=\n\n|\n[A-Z]+:|$)/gi, (match, title, text, list) => {
            const items = list.trim().split("\n").filter(l => l.trim() !== "").map(li => `<li>${li.trim()}</li>`).join("");
            return `
            <div class="mnemonic-box">
                <div class="mnemonic-title">🧠 MNEMONIC: ${title.trim()}</div>
                <div class="mnemonic-text">${text.trim()}</div>
                <ul class="mnemonic-list">${items}</ul>
            </div>`;
        });

        // --- B. PREMIUM TABLE PARSER ---
        body = body.replace(/TABLE:([\s\S]+?)(?=\n\n|\n[A-Z]+:|$)/gi, (match, tableText) => {
            const lines = tableText.trim().split("\n").filter(l => l.includes("|"));
            if (lines.length === 0) return "";
            
            let html = '<div class="medical-table-wrap"><table class="medical-table">';
            lines.forEach((line, index) => {
                const tag = (index === 0) ? "th" : "td";
                const cells = line.split("|").filter(cell => cell.trim() !== "");
                html += "<tr>";
                cells.forEach(cell => { html += `<${tag}>${cell.trim()}</${tag}>`; });
                html += "</tr>";
            });
            return html + '</table></div>';
        });

        // --- C. FLOWCHART ENGINE ---
        body = body.replace(/FLOWCHART:\s*([\s\S]+?)(?=\n\n|\n[A-Z]+:|$)/gi, (match, flowText) => {
            const steps = flowText.trim().split("->").map(s => s.trim());
            if (steps.length <= 1) return match; 

            let html = '<div class="scroll-canvas"><div class="tree-wrapper"><div class="v-flow">';
            steps.forEach((step, i) => {
                if (step.startsWith("[") && step.endsWith("]")) {
                    const branchItems = step.replace(/[\[\]]/g, "").split("|");
                    html += `<div class="branch-container">`;
                    branchItems.forEach(item => {
                        html += `<div class="branch-col"><div class="flow-node">${item.trim()}</div></div>`;
                    });
                    html += `</div>`;
                } else {
                    html += `<div class="flow-node">${step}</div>`;
                }
                if (i < steps.length - 1) {
                    html += `<div class="arrow">↓</div>`;
                }
            });
            return html + '</div></div></div>';
        });

        // --- D. IMAGE PARSER ---
        body = body.replace(/IMAGE:\s*(.*?)\s*\|\s*(.*)/gi, (match, url, caption) => {
            return `
            <div style="text-align:center; margin:50px 0;">
                <img src="${url.trim()}" class="sticker-img" loading="lazy">
                <div class="img-caption">${caption.trim()}</div>
            </div>`;
        });

        // --- E. SMART LINE-BREAK ENGINE ---
        // Adds <br> to text lines, but ignores lines that are already HTML tags
        return body.split('\n').map(line => {
            const trimmed = line.trim();
            if (trimmed.startsWith('<') || trimmed === '') return line;
            return line + '<br>';
        }).join('\n');
    };

    /**
     * 3. STANDALONE PAGE INITIALIZER
     */
    window.initTitanPage = function() {
        const container = document.getElementById('titan-content');
        if (!container) return;

        // Process Shorthand
        const rawContent = container.innerHTML;
        container.innerHTML = window.processTitanContent(rawContent);
        
        // Show Content
        container.style.opacity = "1";

        // Global Ad Injection
        injectAds();

        // Sync Night Mode
        if(localStorage.getItem('alpotus_theme') === 'dark') {
            document.body.classList.add('dark-mode');
            const btn = document.getElementById('tBtn');
            if(btn) btn.innerText = "DAY";
        }
    };

    // Auto-run when the DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener("DOMContentLoaded", window.initTitanPage);
    } else {
        window.initTitanPage();
    }

    console.log("Titan Engine v21.0: Active & Ad-Ready.");
})();
          
