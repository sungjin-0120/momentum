const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const todos = [];
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}
function paindTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todos.push(newTodo);
  paindTodo(newTodo);
  saveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);
