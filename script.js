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
