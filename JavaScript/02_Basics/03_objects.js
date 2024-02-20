// Singleton

// object literals
// Object.create
let mysmb = Symbol("key1");
const JsUser = {
  name: "SOURABH",
  "full name": "SURYAVANSHI",
  [mysmb]: "mykey1",
  age: 25,
  profession: "Software Developer",
  email: "sourabh@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mysmb]);
// console.log(typeof JsUser[mysmb]);

// console.log(JsUser);

JsUser.age = 28;

// console.log(JsUser);
// Object.freeze(JsUser);
// JsUser.age = 30;
// console.log(JsUser);

//myArray = ["S","O"]

JsUser.greetings = function () {
  return console.log(`Hello JSUSER ${JsUser.name} : ${JsUser["full name"]}`);
};

console.log(JsUser);
console.log(JsUser.greetings());
