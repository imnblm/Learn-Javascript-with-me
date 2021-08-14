// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
console.log('jai clické')

// Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    // Creation of todo DIV and class
    const todoDiv = document.createElement('div');
    todoButton.classList.add("todo");

    // Create LI
    const newToDo = document.createElement('li');
    newToDo.innerText = 'hey';
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo); // putting the todo item in the div

    // Creation CHECK MARK BUTTON
    const completedButton = document.createElement('button')
    // use innerHTML to integrate <i></i> tag
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton);

    // Creation TRASH MARK BUTTON
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("complete-btn")
    todoDiv.appendChild(trashButton);

    // APPEND TO LIST
    todoList.appendChild(todoDiv);
    
}