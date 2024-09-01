document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const taskList = document.getElementById('task-list');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = tasks.map(task => `
        <li data-id="${task.id}">
            ${task.text}
            <button class="delete-button" onclick="deleteTask(${task.id})">Delete</button>
        </li>
    `).join('');
}

function addTask() {
    const taskInput = document.getElementById('new-task');
    const text = taskInput.value.trim();
    
    if (text === '') {
        alert('Please enter a task');
        return;
    }
    
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = { id: Date.now(), text };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    taskInput.value = '';
    loadTasks();
}

function deleteTask(id) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}