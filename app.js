
const tasks = [
    "05:00 - Подъем",
    "06:35 - 07:37 - Еду",
    "Неизвестное кол-во времени - Пары",
    "14:10 - Домой",
    "15:00 - 23:00 - Дела, ДЗ",
    "23:00 - 01:00 - Выхожу пить пиво"
];


function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Удалить";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => removeTask(index);

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}


function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        tasks.push(taskText);
        taskInput.value = "";
        renderTasks();
    }
}


function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}


document.addEventListener("DOMContentLoaded", renderTasks);