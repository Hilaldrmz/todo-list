let todoItems = document.getElementById('todo-list')

document.getElementById("addButton").addEventListener("click", () => {addTodo(todoItems)});


function addTodo(todoItems) {
    newTodo = prompt("add new todo").trim();
    todoItems.innerHTML += `<li>${newTodo}</li>`;
    console.log(todoItems)
} 
