
let tasks = [];


function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push(taskText);
        taskInput.value = "";
        updateTaskList();
    }
}


function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}


function updateTaskList() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button class="delete-btn" onclick="deleteTask(${index})">X</button>`;
        taskList.appendChild(li);
    });
}