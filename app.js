const h1 = document.querySelector("div.hello:first-child h1");

function handileTitleClick() {
  h1.style.color = "tomato";
}
function handleMouseEnter() {
  h1.innerText = "Mouse is here";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!!");
}
function handleWindowOffline() {
  alert("sos no WIFI");
}
function handleWindowOnline() {
  alert("all GOOD!!");
}

h1.onclick = handileTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
