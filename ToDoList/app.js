// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const trashButton = document.querySelector('.todo-trash');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



// Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    // Creation of todo DIV and class
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    // Create LI
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
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
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton);

    // APPEND TO LIST
    todoList.appendChild(todoDiv);

    // Clear input value
    todoInput.value = "";
    
}

function deleteCheck(e){
    const item = e.target;
    const todo = item.parentElement;
    // DELETE todo
    if(item.classList[0] === 'trash-btn'){
        // ANIMATION
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
        // todo.remove();
    }

    // CHECK MARK
    if(item.classList[0] === 'complete-btn'){
        todo.classList.toggle('completed');

    }



}