const iphone = {
  ap: "A15",
  battery: 3500,
  price: 25550,
};

const day = ["mon", "tue"];
console.log(day);
day.push("wed");
console.log(day);
console.log(day[0]);
console.log(iphone);
iphone.battery = 2500;
console.log(iphone);

function hello(name, age) {
  console.log(name + " The name is, years old" + age);
}
hello("bond", 45);
