// Professional Text-to-HTML/PPTX Presentation Generator
// Complete implementation with 40 templates and dual export functionality
// FIXED: PPTX generation error where array was passed instead of string

(function() {
    'use strict';
    
    // Template data with exact specifications
    const templates = [
        {"id": 1, "name": "Corporate Blue", "category": "Business", "primary": "#1E3A8A", "secondary": "#3B82F6", "text": "#FFFFFF"},
        {"id": 2, "name": "Executive Gray", "category": "Business", "primary": "#374151", "secondary": "#6B7280", "text": "#FFFFFF"},
        {"id": 3, "name": "Business Green", "category": "Business", "primary": "#065F46", "secondary": "#10B981", "text": "#FFFFFF"},
        {"id": 4, "name": "Professional Purple", "category": "Business", "primary": "#581C87", "secondary": "#8B5CF6", "text": "#FFFFFF"},
        {"id": 5, "name": "Corporate Red", "category": "Business", "primary": "#991B1B", "secondary": "#EF4444", "text": "#FFFFFF"},
        {"id": 6, "name": "Steel Blue", "category": "Business", "primary": "#1E40AF", "secondary": "#60A5FA", "text": "#FFFFFF"},
        {"id": 7, "name": "Classic Navy", "category": "Business", "primary": "#1E293B", "secondary": "#475569", "text": "#FFFFFF"},
        {"id": 8, "name": "Business Teal", "category": "Business", "primary": "#0F766E", "secondary": "#14B8A6", "text": "#FFFFFF"},
        
        {"id": 9, "name": "Scholar White", "category": "Academic", "primary": "#F8FAFC", "secondary": "#E2E8F0", "text": "#1E293B"},
        {"id": 10, "name": "University Blue", "category": "Academic", "primary": "#1D4ED8", "secondary": "#3B82F6", "text": "#FFFFFF"},
        {"id": 11, "name": "Research Gray", "category": "Academic", "primary": "#4B5563", "secondary": "#9CA3AF", "text": "#FFFFFF"},
        {"id": 12, "name": "Education Green", "category": "Academic", "primary": "#047857", "secondary": "#059669", "text": "#FFFFFF"},
        {"id": 13, "name": "Academic Purple", "category": "Academic", "primary": "#7C3AED", "secondary": "#A78BFA", "text": "#FFFFFF"},
        {"id": 14, "name": "Student Friendly", "category": "Academic", "primary": "#0891B2", "secondary": "#06B6D4", "text": "#FFFFFF"},
        {"id": 15, "name": "Thesis Format", "category": "Academic", "primary": "#374151", "secondary": "#6B7280", "text": "#FFFFFF"},
        {"id": 16, "name": "Conference Style", "category": "Academic", "primary": "#BE123C", "secondary": "#F43F5E", "text": "#FFFFFF"},
        
        {"id": 17, "name": "Medical Blue", "category": "Medical", "primary": "#1E40AF", "secondary": "#3B82F6", "text": "#FFFFFF"},
        {"id": 18, "name": "Health Green", "category": "Medical", "primary": "#15803D", "secondary": "#22C55E", "text": "#FFFFFF"},
        {"id": 19, "name": "Clinical White", "category": "Medical", "primary": "#FFFFFF", "secondary": "#F1F5F9", "text": "#1E293B"},
        {"id": 20, "name": "Surgical Gray", "category": "Medical", "primary": "#64748B", "secondary": "#94A3B8", "text": "#FFFFFF"},
        {"id": 21, "name": "Pharmacy Blue", "category": "Medical", "primary": "#0369A1", "secondary": "#0EA5E9", "text": "#FFFFFF"},
        {"id": 22, "name": "Healthcare Teal", "category": "Medical", "primary": "#0D9488", "secondary": "#14B8A6", "text": "#FFFFFF"},
        {"id": 23, "name": "Laboratory Clean", "category": "Medical", "primary": "#F3F4F6", "secondary": "#E5E7EB", "text": "#111827"},
        {"id": 24, "name": "Medical Professional", "category": "Medical", "primary": "#1F2937", "secondary": "#4B5563", "text": "#FFFFFF"},
        
        {"id": 25, "name": "Vibrant Rainbow", "category": "Creative", "primary": "#EC4899", "secondary": "#F472B6", "text": "#FFFFFF"},
        {"id": 26, "name": "Sunset Orange", "category": "Creative", "primary": "#EA580C", "secondary": "#FB923C", "text": "#FFFFFF"},
        {"id": 27, "name": "Ocean Blue", "category": "Creative", "primary": "#0284C7", "secondary": "#38BDF8", "text": "#FFFFFF"},
        {"id": 28, "name": "Forest Nature", "category": "Creative", "primary": "#166534", "secondary": "#22C55E", "text": "#FFFFFF"},
        {"id": 29, "name": "Creative Purple", "category": "Creative", "primary": "#9333EA", "secondary": "#C084FC", "text": "#FFFFFF"},
        {"id": 30, "name": "Modern Minimalist", "category": "Creative", "primary": "#F9FAFB", "secondary": "#F3F4F6", "text": "#111827"},
        {"id": 31, "name": "Artistic Coral", "category": "Creative", "primary": "#F97316", "secondary": "#FDBA74", "text": "#FFFFFF"},
        {"id": 32, "name": "Dynamic Gradient", "category": "Creative", "primary": "#8B5CF6", "secondary": "#EC4899", "text": "#FFFFFF"},
        
        {"id": 33, "name": "Dark Professional", "category": "Dark", "primary": "#111827", "secondary": "#374151", "text": "#F9FAFB"},
        {"id": 34, "name": "Midnight Blue", "category": "Dark", "primary": "#0F172A", "secondary": "#1E293B", "text": "#F1F5F9"},
        {"id": 35, "name": "Charcoal Elite", "category": "Dark", "primary": "#1F2937", "secondary": "#4B5563", "text": "#F9FAFB"},
        {"id": 36, "name": "Black Gold", "category": "Dark", "primary": "#000000", "secondary": "#D97706", "text": "#FFFFFF"},
        {"id": 37, "name": "Dark Purple", "category": "Dark", "primary": "#4C1D95", "secondary": "#7C3AED", "text": "#F3E8FF"},
        {"id": 38, "name": "Executive Black", "category": "Dark", "primary": "#0F0F0F", "secondary": "#262626", "text": "#FAFAFA"},
        {"id": 39, "name": "Night Mode", "category": "Dark", "primary": "#18181B", "secondary": "#3F3F46", "text": "#FAFAFA"},
        {"id": 40, "name": "Premium Dark", "category": "Dark", "primary": "#0C0A09", "secondary": "#44403C", "text": "#FAFAF9"}
    ];

    // Sample text data
    const sampleText = `**General Description and Function**
*The primary function of the lungs is to oxygenate the blood, facilitating the exchange of oxygen (O2) and carbon dioxide (CO2) between inspired air and blood.
*In newborns, lungs are typically rosy pink, but in smokers, they may appear brown or black due to carbon particles.
*Adult lungs are spongy in texture and crepitate upon touch due to air in their alveoli.

**External Features**
*Each lung is conical or pyramidal in shape, with its base resting on the diaphragm and its apex extending into the root of the neck.
*The apex extends approximately 3 cm superior to the anterior end of the 1st rib.
*The base is the lower, semi-lunar, concave surface that rests on the dome of the diaphragm.

**Lobes and Fissures**
*Right lung has three lobes (superior, middle, and inferior) separated by two fissures.
*Left lung has two lobes (superior and inferior) separated by one oblique fissure.
*Oblique fissure separates the inferior lobe from the superior lobes.`;

    // DOM Elements
    let textInput, generateHtmlBtn, generatePptxBtn, downloadLinks;
    let statusMessage, loadingSpinner, loadingText, templateGallery, selectedTemplateDisplay, filterButtons;

    // State
    let selectedTemplate = null;
    let currentFilter = 'All';
    let isPptxLibraryLoaded = false;

    // Initialize application
    function initializeApp() {
        try {
            console.log('Initializing PPT Generator...');
            
            // Get DOM elements
            textInput = document.getElementById('textInput');
            generateHtmlBtn = document.getElementById('generateHtmlBtn');
            generatePptxBtn = document.getElementById('generatePptxBtn');
            downloadLinks = document.getElementById('downloadLinks');
            statusMessage = document.getElementById('statusMessage');
            loadingSpinner = document.getElementById('loadingSpinner');
            loadingText = document.getElementById('loadingText');
            templateGallery = document.getElementById('templateGallery');
            selectedTemplateDisplay = document.getElementById('selectedTemplateDisplay');
            filterButtons = document.querySelectorAll('.filter-btn');

            // Set sample text
            if (textInput) {
                textInput.value = sampleText;
            }

            // Check PptxGenJS library
            setTimeout(() => {
                checkPptxLibrary();
                updateButtonStates();
            }, 1000);

            // Render template gallery
            renderTemplateGallery();
            
            // Select first template by default
            selectTemplate(1);
            
            // Setup event listeners
            setupEventListeners();
            
            // Initial validation
            updateButtonStates();
            
            // Show initial status
            showStatus('✨ Ready! Corporate Blue template selected. Modify the text and click generate!', 'success');
            
            console.log('PPT Generator initialized successfully');
            
        } catch (error) {
            console.error('Initialization error:', error);
            showStatus('❌ Error initializing application. Please refresh the page.', 'error');
        }
    }

    // Check if PptxGenJS is loaded
    function checkPptxLibrary() {
        isPptxLibraryLoaded = (typeof PptxGenJS !== 'undefined') || (typeof window.PptxGenJS !== 'undefined');
        console.log('PptxGenJS library loaded:', isPptxLibraryLoaded);
        
        if (isPptxLibraryLoaded) {
            showStatus('✅ Both HTML and PowerPoint export ready! Select template and generate your presentation.', 'success');
        } else {
            showStatus('⚠️ PowerPoint library loading... HTML export available now.', 'info');
        }
        
        return isPptxLibraryLoaded;
    }

    // Setup all event listeners
    function setupEventListeners() {
        try {
            // HTML Generate button
            if (generateHtmlBtn) {
                generateHtmlBtn.addEventListener('click', async (e) => {
                    e.preventDefault();
                    console.log('HTML button clicked');
                    await generatePresentation('html');
                });
            }

            // PPTX Generate button  
            if (generatePptxBtn) {
                generatePptxBtn.addEventListener('click', async (e) => {
                    e.preventDefault();
                    console.log('PPTX button clicked');
                    await generatePresentation('pptx');
                });
            }

            // Filter buttons
            if (filterButtons) {
                filterButtons.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const category = e.target.dataset.category;
                        filterTemplates(category);
                    });
                });
            }

            // Text input changes
            if (textInput) {
                textInput.addEventListener('input', updateButtonStates);
                textInput.addEventListener('keydown', (event) => {
                    if (event.ctrlKey && event.key === 'Enter') {
                        event.preventDefault();
                        generatePresentation('html');
                    }
                });
            }

        } catch (error) {
            console.error('Error setting up event listeners:', error);
        }
    }

    // Render template gallery
    function renderTemplateGallery() {
        if (!templateGallery) return;

        try {
            const filteredTemplates = currentFilter === 'All' 
                ? templates 
                : templates.filter(t => t.category === currentFilter);

            templateGallery.innerHTML = filteredTemplates.map(template => `
                <div class="template-card" data-template-id="${template.id}">
                    <div class="template-preview" style="background: linear-gradient(135deg, ${template.primary} 0%, ${template.secondary} 100%); position: relative;">
                        <div style="position: absolute; top: 8px; left: 8px; right: 8px; height: 4px; background: ${template.secondary}; border-radius: 2px; opacity: 0.8;"></div>
                        <div style="position: absolute; bottom: 8px; left: 8px; color: ${template.text}; font-size: 10px; font-weight: bold; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">${template.name}</div>
                    </div>
                    <div class="template-info">
                        <div class="template-name">${template.name}</div>
                        <div class="template-category">${template.category}</div>
                    </div>
                </div>
            `).join('');

            // Add click listeners to template cards
            const templateCards = templateGallery.querySelectorAll('.template-card');
            templateCards.forEach(card => {
                card.addEventListener('click', () => {
                    const templateId = parseInt(card.dataset.templateId);
                    selectTemplate(templateId);
                });
            });

            console.log(`Rendered ${filteredTemplates.length} templates for category: ${currentFilter}`);

        } catch (error) {
            console.error('Error rendering template gallery:', error);
            if (templateGallery) {
                templateGallery.innerHTML = '<p style="text-align: center; color: var(--color-error);">Error loading templates</p>';
            }
        }
    }

    // Filter templates by category
    function filterTemplates(category) {
        try {
            currentFilter = category;
            
            // Update filter button states
            if (filterButtons) {
                filterButtons.forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.category === category);
                });
            }

            // Re-render gallery
            renderTemplateGallery();

            // Re-apply selection if template is still visible
            if (selectedTemplate) {
                const templateCards = templateGallery.querySelectorAll('.template-card');
                templateCards.forEach(card => {
                    const cardTemplateId = parseInt(card.dataset.templateId);
                    card.classList.toggle('selected', cardTemplateId === selectedTemplate.id);
                });
            }

            console.log(`Filtered templates by category: ${category}`);

        } catch (error) {
            console.error('Error filtering templates:', error);
        }
    }

    // Select a template
    function selectTemplate(templateId) {
        try {
            console.log('Selecting template:', templateId);
            const foundTemplate = templates.find(t => t.id === templateId);
            
            if (!foundTemplate) {
                showStatus('❌ Template not found', 'error');
                return;
            }

            selectedTemplate = foundTemplate;
            console.log('Selected template:', selectedTemplate);

            // Update visual selection in current view
            if (templateGallery) {
                const templateCards = templateGallery.querySelectorAll('.template-card');
                templateCards.forEach(card => {
                    const cardTemplateId = parseInt(card.dataset.templateId);
                    card.classList.toggle('selected', cardTemplateId === templateId);
                });
            }

            updateSelectedTemplateDisplay();
            updateButtonStates();
            showStatus(`✨ Selected ${foundTemplate.name} template!`, 'success');

        } catch (error) {
            console.error('Error selecting template:', error);
            showStatus('❌ Error selecting template', 'error');
        }
    }

    // Update selected template display
    function updateSelectedTemplateDisplay() {
        if (!selectedTemplateDisplay) return;

        try {
            if (selectedTemplate) {
                const nameElement = selectedTemplateDisplay.querySelector('.selected-template-name');
                const categoryElement = selectedTemplateDisplay.querySelector('.selected-template-category');
                
                if (nameElement) nameElement.textContent = selectedTemplate.name;
                if (categoryElement) categoryElement.textContent = selectedTemplate.category;
            }
        } catch (error) {
            console.error('Error updating selected template display:', error);
        }
    }

    // Update button states
    function updateButtonStates() {
        try {
            const hasText = textInput && textInput.value.trim().length > 0;
            const hasTemplate = selectedTemplate !== null;
            const isValid = hasText && hasTemplate;

            console.log('Button state update:', { hasText, hasTemplate, isValid, selectedTemplate: selectedTemplate?.name });

            // Update HTML button
            if (generateHtmlBtn) {
                generateHtmlBtn.disabled = !isValid;
                console.log('HTML button disabled:', generateHtmlBtn.disabled);
            }

            // Update PPTX button
            if (generatePptxBtn) {
                const pptxEnabled = isValid && isPptxLibraryLoaded;
                generatePptxBtn.disabled = !pptxEnabled;
                console.log('PPTX button disabled:', generatePptxBtn.disabled);
            }

        } catch (error) {
            console.error('Error updating button states:', error);
        }
    }

    // Show status message
    function showStatus(message, type = 'info') {
        if (!statusMessage) return;
        
        try {
            statusMessage.textContent = message;
            statusMessage.className = 'status-message';
            
            if (type === 'success') {
                statusMessage.classList.add('success');
            } else if (type === 'error') {
                statusMessage.classList.add('error');
            } else {
                statusMessage.classList.add('info');
            }

            console.log('Status:', type, message);
        } catch (error) {
            console.error('Error showing status:', error);
        }
    }

    // Toggle loading animation
    function toggleLoading(show, message = 'Creating your beautiful presentation...') {
        if (!loadingSpinner) return;
        
        try {
            if (show) {
                loadingSpinner.classList.remove('hidden');
                if (loadingText) loadingText.textContent = message;
                if (statusMessage) statusMessage.textContent = '';
            } else {
                loadingSpinner.classList.add('hidden');
            }
        } catch (error) {
            console.error('Error toggling loading:', error);
        }
    }

    // Clean text by removing asterisks and trimming
    function cleanText(text) {
        if (!text || typeof text !== 'string') return '';
        return text.replace(/\*+/g, '').trim();
    }

    // Parse text into slides
    function parseTextToSlides(inputText) {
        if (!inputText || typeof inputText !== 'string') {
            throw new Error('Invalid input text provided');
        }

        const lines = inputText.split(/\r?\n/)
            .map(line => line.trim())
            .filter(line => line.length > 0);
        
        const slides = [];
        let currentSlide = null;

        for (const line of lines) {
            if (!line) continue;

            // Check for heading (**Title**)
            if (line.startsWith('**') && line.endsWith('**')) {
                // Save previous slide
                if (currentSlide) {
                    slides.push(currentSlide);
                }
                
                // Create new slide
                const title = cleanText(line.substring(2, line.length - 2));
                if (title) {
                    currentSlide = {
                        title: title,
                        bullets: []
                    };
                }
            }
            // Check for bullet point (*content)
            else if (line.startsWith('*') && currentSlide) {
                const bulletText = cleanText(line.substring(1));
                if (bulletText) {
                    currentSlide.bullets.push(bulletText);
                }
            }
            // Handle regular text
            else if (currentSlide && line.length > 0) {
                currentSlide.bullets.push(line);
            }
        }

        // Add final slide
        if (currentSlide) {
            slides.push(currentSlide);
        }

        console.log(`Parsed ${slides.length} slides from text`);
        console.log('Slides:', slides);
        return slides;
    }

    // Generate HTML presentation
    function generateHTMLPresentation(slides, template) {
        const textColor = isLightColor(template.primary) ? '#000000' : '#FFFFFF';
        const bulletColor = isLightColor(template.secondary) ? '#000000' : '#FFFFFF';

        const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Presentation - ${template.name}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; background: #f0f0f0; overflow: hidden; }
        .presentation-container { width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; }
        .slide { width: 90vw; max-width: 1000px; height: 90vh; max-height: 700px; background: linear-gradient(135deg, ${template.primary} 0%, ${template.secondary} 100%); border-radius: 15px; padding: 60px; display: none; flex-direction: column; box-shadow: 0 20px 40px rgba(0,0,0,0.2); position: relative; overflow: hidden; }
        .slide.active { display: flex; }
        .slide::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 8px; background: ${template.secondary}; }
        .slide-title { font-size: 3.2em; font-weight: bold; color: ${textColor}; margin-bottom: 40px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); border-bottom: 4px solid ${template.secondary}; padding-bottom: 20px; }
        .slide-content { flex: 1; display: flex; flex-direction: column; justify-content: flex-start; }
        .bullet-list { list-style: none; padding: 0; }
        .bullet-item { font-size: 1.4em; color: ${bulletColor}; margin-bottom: 20px; padding-left: 40px; position: relative; line-height: 1.6; text-shadow: 1px 1px 2px rgba(0,0,0,0.2); }
        .bullet-item::before { content: '●'; color: ${template.secondary}; font-size: 1.2em; position: absolute; left: 0; top: 0; }
        .slide-number { position: absolute; bottom: 20px; right: 30px; color: ${textColor}; font-size: 1.1em; opacity: 0.8; background: rgba(0,0,0,0.2); padding: 8px 16px; border-radius: 20px; }
        .navigation { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; gap: 15px; z-index: 100; }
        .nav-btn { background: ${template.primary}; color: ${textColor}; border: none; padding: 12px 24px; border-radius: 25px; cursor: pointer; font-size: 1em; font-weight: bold; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
        .nav-btn:hover { background: ${template.secondary}; transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0,0,0,0.3); }
        .nav-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
        .slide-indicator { position: fixed; top: 30px; right: 30px; background: rgba(0,0,0,0.7); color: white; padding: 10px 20px; border-radius: 20px; font-size: 1em; z-index: 100; }
        .template-info { position: fixed; top: 30px; left: 30px; background: rgba(0,0,0,0.7); color: white; padding: 10px 20px; border-radius: 20px; font-size: 0.9em; z-index: 100; }
        @media (max-width: 768px) { .slide { width: 95vw; height: 85vh; padding: 30px 20px; } .slide-title { font-size: 2.2em; margin-bottom: 25px; } .bullet-item { font-size: 1.1em; margin-bottom: 15px; padding-left: 30px; } .navigation { bottom: 20px; } .nav-btn { padding: 10px 18px; font-size: 0.9em; } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        .slide.active { animation: slideIn 0.5s ease-out; }
    </style>
</head>
<body>
    <div class="presentation-container">
        <div class="template-info">${template.name} Theme</div>
        <div class="slide-indicator"><span id="currentSlide">1</span> / <span id="totalSlides">${slides.length}</span></div>
        ${slides.map((slide, index) => `
            <div class="slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
                <h1 class="slide-title">${slide.title}</h1>
                <div class="slide-content">
                    <ul class="bullet-list">
                        ${slide.bullets.map(bullet => `<li class="bullet-item">${bullet}</li>`).join('')}
                    </ul>
                </div>
                <div class="slide-number">${index + 1}</div>
            </div>
        `).join('')}
        <div class="navigation">
            <button class="nav-btn" id="prevBtn" onclick="previousSlide()">‹ Previous</button>
            <button class="nav-btn" id="nextBtn" onclick="nextSlide()">Next ›</button>
        </div>
    </div>
    <script>
        let currentSlideIndex = 0; const totalSlides = ${slides.length};
        function showSlide(index) { const slides = document.querySelectorAll('.slide'); const currentSlideSpan = document.getElementById('currentSlide'); const prevBtn = document.getElementById('prevBtn'); const nextBtn = document.getElementById('nextBtn'); slides.forEach((slide, i) => { slide.classList.toggle('active', i === index); }); currentSlideSpan.textContent = index + 1; prevBtn.disabled = index === 0; nextBtn.disabled = index === totalSlides - 1; }
        function nextSlide() { if (currentSlideIndex < totalSlides - 1) { currentSlideIndex++; showSlide(currentSlideIndex); } }
        function previousSlide() { if (currentSlideIndex > 0) { currentSlideIndex--; showSlide(currentSlideIndex); } }
        document.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); } else if (e.key === 'ArrowLeft') { e.preventDefault(); previousSlide(); } });
        showSlide(0);
    </script>
</body>
</html>`;

        return html;
    }

    // FIXED: Generate PPTX presentation with proper string formatting
    async function generatePPTXPresentation(slides, template) {
        try {
            console.log('Starting PPTX generation...');
            console.log('Template:', template);
            console.log('Slides to process:', slides.length);
            
            // Try to access PptxGenJS from different possible locations
            let PptxGenJSClass = null;
            if (typeof PptxGenJS !== 'undefined') {
                PptxGenJSClass = PptxGenJS;
            } else if (typeof window.PptxGenJS !== 'undefined') {
                PptxGenJSClass = window.PptxGenJS;
            } else {
                throw new Error('PptxGenJS library not found. Please check if the library loaded correctly.');
            }

            const pres = new PptxGenJSClass();
            
            // Set presentation properties
            pres.author = 'Professional PPT Generator';
            pres.company = 'Generated Presentation';  
            pres.title = `${template.name} Presentation`;
            pres.subject = 'Generated from formatted text';

            console.log(`Creating ${slides.length} slides...`);

            // Create slides
            slides.forEach((slideData, index) => {
                try {
                    console.log(`Creating slide ${index + 1}: ${slideData.title}`);
                    
                    // CRITICAL FIX: Create slide object properly
                    const slide = pres.addSlide();
                    
                    if (!slide) {
                        throw new Error(`Failed to create slide ${index + 1}`);
                    }

                    // Set slide background
                    slide.background = { color: template.primary.replace('#', '') };

                    // Add title
                    slide.addText(slideData.title, {
                        x: 0.5, y: 0.5, w: 9, h: 1.5,
                        fontSize: 36,
                        fontFace: 'Arial',
                        color: template.text.replace('#', ''),
                        bold: true,
                        align: 'left',
                        valign: 'middle'
                    });

                    // CRITICAL FIX: Convert bullets array to proper string format
                    if (slideData.bullets && slideData.bullets.length > 0) {
                        // Join bullets with newlines to create a proper string
                        const bulletText = slideData.bullets.join('\n');
                        
                        console.log(`Adding ${slideData.bullets.length} bullets to slide ${index + 1}`);
                        console.log('Bullet text:', bulletText);
                        
                        slide.addText(bulletText, {
                            x: 0.5, y: 2.2, w: 9, h: 5,
                            fontSize: 18,
                            fontFace: 'Arial',
                            color: template.text.replace('#', ''),
                            align: 'left',
                            valign: 'top',
                            bullet: true,
                            lineSpacing: 28
                        });
                    }

                    // Add slide number
                    slide.addText(`${index + 1}`, {
                        x: 9, y: 6.8, w: 0.8, h: 0.5,
                        fontSize: 14,
                        fontFace: 'Arial',
                        color: template.text.replace('#', ''),
                        align: 'center',
                        valign: 'middle'
                    });

                    console.log(`Slide ${index + 1} created successfully`);

                } catch (slideError) {
                    console.error(`Error creating slide ${index + 1}:`, slideError);
                    throw new Error(`Failed to create slide ${index + 1}: ${slideError.message}`);
                }
            });

            console.log('All PPTX slides created successfully, returning presentation object');
            return pres;

        } catch (error) {
            console.error('Error creating PPTX presentation:', error);
            throw new Error(`Failed to create PPTX presentation: ${error.message}`);
        }
    }

    // Check if color is light
    function isLightColor(color) {
        if (!color) return false;
        const hex = color.replace('#', '');
        if (hex.length !== 6) return false;
        
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return brightness > 155;
    }

    // Download file function with multiple fallbacks
    function downloadFile(blob, filename) {
        try {
            console.log(`Downloading file: ${filename}`);
            
            // Method 1: Create temporary link and click
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.style.display = 'none';
            
            // Add to DOM, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Clean up URL after delay
            setTimeout(() => URL.revokeObjectURL(url), 5000);
            
            console.log(`File download triggered: ${filename}`);
            return true;
        } catch (error) {
            console.error('Download error:', error);
            
            // Method 2: Try navigator.msSaveBlob for IE/Edge
            if (navigator.msSaveBlob) {
                navigator.msSaveBlob(blob, filename);
                return true;
            }
            
            return false;
        }
    }

    // Create download link in UI
    function createDownloadLink(blob, filename, type) {
        if (!downloadLinks) return;
        
        try {
            const url = URL.createObjectURL(blob);
            const icon = type === 'html' ? '🌐' : '📊';
            const label = type === 'html' ? 'Download HTML Presentation' : 'Download PowerPoint File';
            
            const downloadBtn = document.createElement('a');
            downloadBtn.href = url;
            downloadBtn.download = filename;
            downloadBtn.className = 'download-btn';
            downloadBtn.innerHTML = `
                <span class="btn-icon">${icon}</span>
                <span class="btn-text">${label}</span>
            `;
            
            downloadLinks.appendChild(downloadBtn);
            
            // Clean up after 10 minutes
            setTimeout(() => {
                URL.revokeObjectURL(url);
                if (downloadBtn.parentNode) {
                    downloadBtn.parentNode.removeChild(downloadBtn);
                }
            }, 600000);
            
        } catch (error) {
            console.error('Error creating download link:', error);
        }
    }

    // Generate presentation (HTML or PPTX)
    async function generatePresentation(type) {
        console.log('Generate presentation called with type:', type);
        
        const inputText = textInput ? textInput.value.trim() : '';
        
        // Validation
        if (!inputText) {
            showStatus('❌ Please enter some formatted text first!', 'error');
            return;
        }

        if (!selectedTemplate) {
            showStatus('❌ Please select a template first!', 'error');
            return;
        }

        if (type === 'pptx' && !isPptxLibraryLoaded) {
            showStatus('❌ PowerPoint library is still loading. Please try again in a moment.', 'error');
            return;
        }

        // Clear previous download links
        if (downloadLinks) {
            downloadLinks.innerHTML = '';
        }

        // Start generation process
        const currentBtn = type === 'html' ? generateHtmlBtn : generatePptxBtn;

        if (currentBtn) {
            currentBtn.disabled = true;
        }
        
        const loadingMessage = type === 'html' 
            ? 'Crafting beautiful HTML slideshow...' 
            : 'Creating PowerPoint presentation...';
        toggleLoading(true, loadingMessage);

        try {
            // Add delay for better UX
            await new Promise(resolve => setTimeout(resolve, 800));
            
            // Parse text into slides
            const slides = parseTextToSlides(inputText);

            if (slides.length === 0) {
                throw new Error('No slides were created. Make sure your text contains headings marked with **Heading**');
            }

            let fileName, content;

            if (type === 'html') {
                // Generate HTML presentation
                content = generateHTMLPresentation(slides, selectedTemplate);
                fileName = `Presentation_${selectedTemplate.name.replace(/\s+/g, '_')}.html`;
                
                const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
                
                // Trigger download
                const downloadSuccess = downloadFile(blob, fileName);
                
                if (downloadSuccess) {
                    // Also create UI download link
                    createDownloadLink(blob, fileName, type);
                    
                    toggleLoading(false);
                    showStatus(`✨ SUCCESS! Beautiful HTML presentation with ${slides.length} slides created using ${selectedTemplate.name} template! 🎉`, 'success');
                } else {
                    throw new Error('Failed to download HTML file');
                }
                
            } else {
                // Generate PPTX presentation
                console.log('Starting PPTX generation process...');
                const pres = await generatePPTXPresentation(slides, selectedTemplate);
                fileName = `Presentation_${selectedTemplate.name.replace(/\s+/g, '_')}.pptx`;
                
                console.log('Writing PPTX file...');
                // Write PPTX file and trigger download
                await pres.writeFile({ fileName: fileName });
                
                toggleLoading(false);
                showStatus(`✨ SUCCESS! Beautiful PPTX presentation with ${slides.length} slides created using ${selectedTemplate.name} template! 🎉`, 'success');
            }

        } catch (error) {
            console.error('Generation error:', error);
            toggleLoading(false);
            
            let errorMessage = 'Failed to generate presentation. Please check your formatting and try again.';
            if (error.message.includes('PptxGenJS')) {
                errorMessage = 'PowerPoint library error. Please refresh the page and try again.';
            } else if (error.message.includes('slide')) {
                errorMessage = `Error creating slides: ${error.message}`;
            } else if (error.message) {
                errorMessage = error.message;
            }
            
            showStatus(`❌ Error: ${errorMessage}`, 'error');
        } finally {
            // Reset button
            if (currentBtn) {
                currentBtn.disabled = false;
                updateButtonStates();
            }
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }

    // Check PptxGenJS loading periodically
    let libraryCheckCount = 0;
    const maxChecks = 50; // Check for up to 10 seconds

    const checkLibraryInterval = setInterval(() => {
        libraryCheckCount++;
        
        if (checkPptxLibrary()) {
            clearInterval(checkLibraryInterval);
            updateButtonStates();
        } else if (libraryCheckCount >= maxChecks) {
            clearInterval(checkLibraryInterval);
            showStatus('⚠️ PowerPoint library failed to load. HTML export still available.', 'error');
            if (generatePptxBtn) {
                generatePptxBtn.disabled = true;
            }
        }
    }, 200);

})();