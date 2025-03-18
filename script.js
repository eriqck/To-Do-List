const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList'); // Ensure this matches the HTML ID

function addTask() {
    const taskText = taskInput.value.trim(); // Corrected property usage

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText; // Set text before appending the button

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.addEventListener('click', deleteTask);

        li.appendChild(deleteBtn);
        li.addEventListener('click', completeTask);
        taskList.appendChild(li); // Append the element, not a string
        taskInput.value = ''; // Clear input after adding task
    }
}

// Handling task completion
function completeTask(event) {
    event.target.classList.toggle("completed");
}

// Handling task deletion
function deleteTask(event) {
    event.stopPropagation(); // Prevents task from being marked as completed when clicking delete
    const task = event.target.parentElement;
    taskList.removeChild(task);
}
