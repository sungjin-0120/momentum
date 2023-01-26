const age = parseInt(prompt("How old are You?"));

if (isNaN(age)) {
  console.log("please write a number");
} else if (age < 18) {
  console.log("Go home BABY");
} else {
  console.log("You can Drink");
}
