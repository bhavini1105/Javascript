let tasks = [];

function addTask() {
    let taskInput = document.getElementById("task").value;

    if (taskInput === "") {
        alert("Enter Task");
    } else {
        // Add task to the array
        tasks.push(taskInput);

        // Clear the input field
        document.getElementById("task").value = "";

        // Display the tasks in the DOM
        displayTasks();
    }
}

function displayTasks() {
    let taskContainer = document.getElementById("main");
    taskContainer.innerHTML = "";  // Clear the container

    tasks.forEach((task, index) => {
        let p = document.createElement('p');  // Create 'p' for each task
        p.setAttribute('id', 'container');

        p.innerHTML = task;

        // Create Delete button
        let buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('id', 'delete');
        buttonDelete.innerHTML = "Delete";

        // Create Edit button
        let buttonEdit = document.createElement('button');
        buttonEdit.setAttribute('id', 'edit');
        buttonEdit.innerHTML = "Edit";

        // Append buttons to task element
        p.appendChild(buttonEdit);  // Append edit button first
        p.appendChild(buttonDelete);  // Then append delete button

        // Append the task to the main div
        taskContainer.appendChild(p);

        // Delete task functionality
        buttonDelete.addEventListener('click', function () {
            deleteTask(index);
        });

        // Edit task functionality
        buttonEdit.addEventListener('click', function () {
            editTask(index);
        });
    });
}

function deleteTask(index) {
    // Remove the task from the array
    tasks.splice(index, 1);

    // Re-render the tasks
    displayTasks();
}

function editTask(index) {
    // Set the task input field with the current task value for editing
    document.getElementById("task").value = tasks[index];

    // Remove the old task from the array when editing starts
    tasks.splice(index, 1);

    // Focus the input field for editing
    document.getElementById("task").focus();
}

// Function to remove all tasks
function removeAllTasks() {
    // Clear the tasks array
    tasks = [];
    
    // Clear the task container in the DOM
    displayTasks();
}
