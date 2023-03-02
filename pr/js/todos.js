const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoLisst = document.getElementById("todo-list");

function handleTodoSubmit(event) {
  event.preventDefault();
  const todoInputValue = todoInput.value;
  todoInput.value = "";
  writeTodo(todoInputValue);
}
function deleteTodo(event) {
  const lii = event.target.parentElement;
  lii.remove();
}

function writeTodo(todoInputValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todoInputValue;
  const button = document.createElement("button");
  button.innerText = "✖";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoLisst.appendChild(li);
}
todoForm.addEventListener("submit", handleTodoSubmit);
