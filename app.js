const age = parseInt(prompt("How old are You?"));

if (isNaN(age) || age < 0) {
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("Go home BABY");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink!!");
} else if (age > 50 && age <= 80) {
  console.log("You should exersise");
} else if (age === 100) {
  console.log("You are wise!");
} else if (age > 80) {
  console.log("You can do whatever you want");
}
