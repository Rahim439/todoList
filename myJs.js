const tasks = [];

function addTask() {
    let task = document.getElementById("input").value;
    // Check if the input value is not empty
    if (task) {
        tasks.push(task);
        let putDiv = document.getElementById("result");
        let result = "";

        for (let i = 0; i < tasks.length; i++) {
            result += "<div class='actionDiv con' id='input" + i + "'>" +
                tasks[i] +
                "<button class='btn btn-primary bttn' data-index='" + i + "'>Delete</button>" +
                "</div>";
        }
        putDiv.innerHTML = result;

        let delInput = document.getElementById("input");
        delInput.value = "";

        // Add event listeners after updating the DOM
        addDeleteEventListeners();
    }
}

function addDeleteEventListeners() {
    document.querySelectorAll('.bttn').forEach(function (button) {
        button.addEventListener('click', function () {
            let index = parseInt(button.getAttribute('data-index'));
            tasks.splice(index, 1);
            let taskDiv = document.getElementById('input' + index);
            taskDiv.remove();
           
        });
    });
    
   
    updateDataIndexes();
}

function updateDataIndexes() {
    let buttons = document.querySelectorAll('.bttn');
    buttons.forEach(function (button, index) {
        button.setAttribute('data-index', index);
        button.id = 'input' + index; // Update corresponding IDs
    });
}
