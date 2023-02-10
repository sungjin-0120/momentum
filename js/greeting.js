const loginForm = document.querySelector("#login-form ");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const hidden = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(hidden);
  const typedUserName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, typedUserName);
  paintGreeting(typedUserName);
}

function paintGreeting(userName) {
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(hidden);
}

const savedName = localStorage.getItem(USERNAME_KEY);
if (savedName === null) {
  loginForm.classList.remove(hidden);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedName);
}
