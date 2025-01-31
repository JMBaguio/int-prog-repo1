//==== Todo CRUD Management ====

// Array to store todos
let todos = []

// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to render todos
function renderTodos(){
    todoList.innerHTML =''; // Clear list
    todos.forEach((todo, index) =>{
        const li = 'todo-item';
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(${index})"> EDIT </button>
            <button onclick="deleteTodo(${index})"> DELETE </button>
        `;
        todoList.appendChild(li);
    });
}

// Function to add a new task
function addTodo(event){
    event.preventDefault(); // Prevent form Submission
    const newTodo = todoInput.ariaValueMax.trim();
    if (newTodo){
        todos.push(newTodo);
        todoInput.value = ''; // Clear Input
        renderTodos;
    }
}

//Function to edit tasks
function editTodo(index) {
    const updateTodo = prompt('Edit your task: ' todos[index]);
    if (updateTodo !== null){
        todos[index] = updateTodo.trim();
        renderTodos();
    }
}

// Function to delete task
function deleteTodo(index){
    if (confirm('Are you sure you want to delete this task>')){
        todos.splice(index, 1);
        renderTodos();
    }
}

// Event Listeners
todoForm.addEventListener('submit', addTodo);

// Initial render
renderTodos();