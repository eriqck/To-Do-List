# To-Do List App

A simple and interactive To-Do List web application built using **HTML, CSS, and JavaScript**. This app allows users to add, complete, and delete tasks efficiently.

## Features

- ✅ **Add Tasks**: Users can add tasks to the list.
- ✅ **Mark Tasks as Completed**: Click on a task to toggle its completion status.
- ✅ **Delete Tasks**: Remove tasks from the list with a delete button.
- ✅ **Interactive UI**: Styled with CSS for a clean and user-friendly experience.

## Technologies Used

- **HTML** for structure
- **CSS** for styling
- **JavaScript** for functionality

## Installation & Usage

1. Clone the repository:
   ```sh
   git clone https://github.com/eriqck/todo-list-app.git
   ```
2. Navigate to the project folder:
   ```sh
   cd todo-list-app
   ```
3. Open `index.html` in a web browser.

## Code Overview

### **JavaScript Functions**

- **`addTask()`**: Adds a new task to the list.
- **`completeTask(event)`**: Toggles the completed status of a task.
- **`deleteTask(event)`**: Removes a task from the list.

### **Sample Code Snippet**

```js
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.addEventListener('click', deleteTask);

        li.appendChild(deleteBtn);
        li.addEventListener('click', completeTask);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
```

## Future Enhancements

- 🔹 **Persistent Storage**: Save tasks using local storage.
- 🔹 **Task Editing**: Allow users to edit tasks.
- 🔹 **Drag and Drop**: Implement task reordering.

## License

**No licence required**.

## Author

👤 **Erick Njoroge**\
📧 [ericdavid348@gmail.com](mailto\:ericdavid348@gmail.com)\
🔗 [GitHub Profile](https://github.com/eriqck)

---


