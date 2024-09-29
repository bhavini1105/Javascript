function addtask() {
    let task = document.getElementById("task").value;

    if (task === "") {
        alert("Enter Task");
    } else {
        let p = document.createElement('p');  // 'p' for adding task  
        p.setAttribute('id', 'container');

        p.innerHTML = task;  //  'task' holds the value of the input field

        document.getElementById("task").value = "";  // Clear the input field

        let buttondelete = document.createElement('button'); // created delete button
        buttondelete.setAttribute('id', 'delete');
        buttondelete.innerHTML = "Delete";

        p.appendChild(buttondelete);  // Append delete button to the task

        document.getElementById("main").appendChild(p);  // Append the task to main div

        // Delete task functionality
        buttondelete.addEventListener('click', function() {
            p.innerHTML = "Task Completed";  // Immediately show "Task Completed"
            buttondelete.style.display = 'none'; 
        });
    }
}
