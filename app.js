const h1 = document.querySelector("div.hello:first-child h1");

function handileTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handileTitleClick);
