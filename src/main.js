const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const welcomeDate = document.getElementById('date');

const date = new Date();
const months = ["Enero", "Febrero", "Marzo",
                "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre",
                "Octubre", "Noviembre", "Diciembre"];

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

welcomeDate.innerHTML = `${months[month]} ${day} del año ${year}`;

function addTask () {

    let taskText = taskInput.value;

    let li = document.createElement('li');
    li.classList.add('taskList__task');

    let div = document.createElement('div');
    div.classList.add('task__checkbox')

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkBox');

    let p = document.createElement('p');
    p.classList.add("text");
    p.textContent = taskText;

    let delButton = document.createElement('button');
    delButton.classList.add('task__deleteButton'); 
    delButton.textContent = "X"

    div.append(checkbox, p);
    li.append(div, delButton);
    taskList.append(li);

    checkbox.addEventListener("change",() => {
        if (checkbox.checked) {
            li.style.backgroundColor = "#D8D8D8";
            p.style.textDecoration = "line-through";

        } else {
            li.style.backgroundColor = "";
            p.style.textDecoration = "none";
        }
    });    

    delButton.addEventListener('click', () => li.remove());
}

if (taskInput.value !== "") {
    
} else {
    console.log("Escribe algo...");
}

addButton.addEventListener('click', function() {
    if (taskInput.value !== "") {
        addTask();
        taskInput.value = "";
    }
});
