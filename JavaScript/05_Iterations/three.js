//for of

//["","",""]
//[{},{},{}]

const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }

const greetings = "Hello world";

for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map();

map.set("IN", "India");
map.set("USA", "Unites State of America");
map.set("Fr", "France");

// map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  // console.log(`${key}: ${value}`);
}

const myObject = {
  Game1: "NFS",
  Game2: "GTA V",
  Game3: "CS:GO",
};

// for (const [key, value] of myObject) {
//   console.log(`${key}: ${value}`);
// }
for (const key of myObject) {
  console.log(`${key}`);
}
