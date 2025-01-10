function addTask(columnId) {
    const input = document.getElementById(`${columnId}Input`);
    const taskList = document.querySelector(`#${columnId} .task-list`);
    const newTask = input.value.trim();

    if (newTask) {
        const listItem = document.createElement('li');
        listItem.textContent = newTask;
        taskList.appendChild(listItem);
        input.value = '';
    } else {
        alert('Tugas tidak boleh kosong!');
    }

    
}
function updateClock() {
    const clockElement = document.getElementById("realTimeClock");
    const now = new Date();
    const timeString = now.toLocaleTimeString(); // Format waktu berdasarkan lokal
    clockElement.textContent = `Waktu: ${timeString}`;
}

// Perbarui setiap detik
setInterval(updateClock, 1000);

// Panggil sekali agar tidak menunggu interval pertama
updateClock();
