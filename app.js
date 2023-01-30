const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handileTitleClick() {
  title.style.color = "tomato";
}
function handleMouseEnter() {
  title.innerText = "Mouse is here";
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone";
}

title.addEventListener("click", handileTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
