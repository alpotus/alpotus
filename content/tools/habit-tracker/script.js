let habits = JSON.parse(localStorage.getItem("habitsList")) || ["Hydrate", "Workout", "Read", "Meditation"];
const monthSel = document.getElementById('month-select');
const yearSel = document.getElementById('year-select');
let chart;

// Init Selectors
const initSelectors = () => {
    for (let m = 0; m < 12; m++) {
        let o = document.createElement("option");
        o.value = m; o.text = new Date(0, m).toLocaleString('default', { month: 'long' });
        monthSel.add(o);
    }
    for (let y = 2024; y <= 2030; y++) {
        let o = document.createElement("option");
        o.value = y; o.text = y; yearSel.add(o);
    }
    monthSel.value = new Date().getMonth();
    yearSel.value = new Date().getFullYear();
};

const getDaysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
const storageKey = () => `alpotus-hbt-${yearSel.value}-${monthSel.value}`;
const loadData = () => JSON.parse(localStorage.getItem(storageKey()) || "{}");
const saveData = (d) => localStorage.setItem(storageKey(), JSON.stringify(d));

function toggleDark() { document.body.classList.toggle("dark"); }

function addHabit() {
    const input = document.getElementById('new-habit-input');
    const val = input.value.trim();
    if (!val) return;
    habits.push(val);
    localStorage.setItem("habitsList", JSON.stringify(habits));
    input.value = "";
    render();
}

function deleteHabit(index) {
    if (confirm("Delete this habit and all its data?")) {
        habits.splice(index, 1);
        localStorage.setItem("habitsList", JSON.stringify(habits));
        render();
    }
}

function render() {
    const dcount = getDaysInMonth(yearSel.value, monthSel.value);
    const daysRow = document.getElementById('days-row');
    const habitBody = document.getElementById('habit-body');
    const data = loadData();

    // Render Header Days
    daysRow.innerHTML = `<th class="sticky-col">Habit List</th>`;
    for (let d = 1; d <= dcount; d++) {
        daysRow.insertAdjacentHTML('beforeend', `<th>${d}</th>`);
    }

    // Render Habit Rows
    habitBody.innerHTML = "";
    habits.forEach((h, i) => {
        let tr = document.createElement("tr");
        let streak = calculateStreak(i, data, dcount);
        
        tr.innerHTML = `<td class="sticky-col">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span>${h} <br><small style="color:var(--primary-hover)">🔥 ${streak} day streak</small></span>
                <span onclick="deleteHabit(${i})" style="color:red; cursor:pointer;">×</span>
            </div>
        </td>`;

        for (let d = 1; d <= dcount; d++) {
            let td = document.createElement("td");
            let isToday = (d === new Date().getDate() && monthSel.value == new Date().getMonth());
            if(isToday) td.className = "today-highlight";

            let cell = document.createElement("div");
            cell.className = "heat-cell";
            cell.dataset.checked = data[`${i}-${d}`] ? "1" : "0";
            cell.onclick = () => {
                let current = cell.dataset.checked === "1";
                cell.dataset.checked = current ? "0" : "1";
                data[`${i}-${d}`] = !current;
                saveData(data);
                updateAnalytics();
            };
            td.appendChild(cell);
            tr.appendChild(td);
        }
        habitBody.appendChild(tr);
    });
    updateAnalytics();
}

function calculateStreak(habitIdx, data, dcount) {
    let streak = 0;
    for (let d = dcount; d >= 1; d--) {
        if (data[`${habitIdx}-${d}`]) streak++;
        else if (d < new Date().getDate()) break;
    }
    return streak;
}

function updateAnalytics() {
    const data = loadData();
    const dcount = getDaysInMonth(yearSel.value, monthSel.value);
    
    // Update Rings
    const ringsCont = document.getElementById('weekly-rings');
    ringsCont.innerHTML = "";
    const weeks = Math.ceil(dcount / 7);
    for (let w = 1; w <= weeks; w++) {
        let done = 0, total = 0;
        for (let i = 0; i < habits.length; i++) {
            for (let d = (w-1)*7+1; d <= w*7 && d <= dcount; d++) {
                total++; if(data[`${i}-${d}`]) done++;
            }
        }
        let p = Math.round((done/total)*100) || 0;
        ringsCont.insertAdjacentHTML('beforeend', `
            <div style="text-align:center">
                <svg width="60" height="60" viewBox="0 0 36 36">
                    <path stroke="#eee" stroke-width="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path stroke="var(--success)" stroke-width="3" stroke-dasharray="${p}, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="18" y="20.35" font-size="8" text-anchor="middle" fill="var(--text)">${p}%</text>
                </svg>
                <div style="font-size:10px; font-weight:bold">Week ${w}</div>
            </div>
        `);
    }

    // Update Chart
    const dailyData = [];
    for (let d = 1; d <= dcount; d++) {
        let count = 0;
        habits.forEach((h, i) => { if(data[`${i}-${d}`]) count++; });
        dailyData.push(count);
    }
    if (chart) chart.destroy();
    chart = new Chart(document.getElementById('daily-chart'), {
        type: 'line',
        data: {
            labels: Array.from({length: dcount}, (_, i) => i + 1),
            datasets: [{ label: 'Completed Tasks', data: dailyData, borderColor: '#facc15', tension: 0.4, fill: true, backgroundColor: 'rgba(250, 204, 21, 0.1)' }]
        },
        options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { display: false } } } }
    });

    // Month Progress
    let mDone = Object.values(data).filter(v => v).length;
    let mTotal = habits.length * dcount;
    let mPerc = Math.round((mDone/mTotal)*100) || 0;
    document.getElementById('month-fill').style.width = mPerc + "%";
    document.getElementById('month-fill').innerText = mPerc + "%";
}

function exportExcel() {
    const data = loadData();
    const ws = XLSX.utils.json_to_sheet([data]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "HabitData");
    XLSX.writeFile(wb, `Alpotus_Habits_${monthSel.value}_${yearSel.value}.xlsx`);
}

function backup() {
    const blob = new Blob([JSON.stringify(localStorage)], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "Alpotus_Habit_Backup.json"; a.click();
}

function restore(e) {
    const reader = new FileReader();
    reader.onload = () => {
        const data = JSON.parse(reader.result);
        Object.keys(data).forEach(k => localStorage.setItem(k, data[k]));
        location.reload();
    };
    reader.readAsText(e.target.files[0]);
}

monthSel.onchange = render;
yearSel.onchange = render;
initSelectors();
render();