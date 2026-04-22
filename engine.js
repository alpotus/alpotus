// engine.js
let currentIdx = 0;
let questions = [];

function init() {
    try {
        questions = JSON.parse(window.RawInput);
        renderQuestion();
    } catch (e) {
        console.error("JSON Parsing Error: Check your RawInput format", e);
        document.getElementById('q-text').innerText = "Error loading questions. Check JSON format.";
    }
}

function renderQuestion() {
    const q = questions[currentIdx];
    document.getElementById('q-text').innerText = q.q;
    document.getElementById('q-count').innerText = `Q. ${currentIdx + 1}/${questions.length}`;
    document.getElementById('progress').style.width = `${((currentIdx + 1) / questions.length) * 100}%`;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `<span style="margin-right:15px; opacity:0.5">${String.fromCharCode(65 + i)}</span> ${opt}`;
        div.onclick = () => checkAnswer(i, q.correct, div);
        container.appendChild(div);
    });

    document.getElementById('explanation-container').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(selected, correct, element) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.style.pointerEvents = 'none'); // Lock answers

    if (selected === correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
        options[correct].classList.add('correct');
    }

    // Show Explanation
    const q = questions[currentIdx];
    document.getElementById('exp-text').innerText = q.explanation;
    document.getElementById('pearl-text').innerText = `Clinical Pearl: ${q.clinical_pearl || 'High-yield fact included in explanation.'}`;
    document.getElementById('explanation-container').style.display = 'block';
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentIdx++;
    if (currentIdx < questions.length) {
        renderQuestion();
    } else {
        alert("Unit Completed! Great job.");
        location.href = 'index.html'; // Back to dashboard
    }
}

window.onload = init;