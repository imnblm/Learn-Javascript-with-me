// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);

// Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    // Creation of todo DIV and class
    const todoDiv = document.createElement("");
    todoButton.classList.add("todo");
    // Create LI
    const newToDo = document.createElement('li');
    newToDo.innerText = 'hey';

    
}