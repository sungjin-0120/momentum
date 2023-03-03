const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoLisst = document.getElementById("todo-list");
const storage = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(storage));
  //문자로 바꾸기위해 (그냥 스트링)
}
function handleTodoSubmit(event) {
  event.preventDefault();
  const todoInputValue = todoInput.value;
  todoInput.value = "";
  storage.push(todoInputValue);
  writeTodo(todoInputValue);
  saveTodos();
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
//리스트를 스팬에 저장하고, ul안에 집어 넣기
todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem("todos");

if (savedTodos != null) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(writeTodo);
  //foreach = for in py
  //[]에 저장된 녀석들을 사용하기위해 스트링을 어레이로 바꾸기위해
}
