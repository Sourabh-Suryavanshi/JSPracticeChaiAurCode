//const discriptor = Object.getOwnPropertyDescriptor(Math, "PI");
//console.log(discriptor);
// console.log(Math.PI);

// Math.PI = 5;
// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

console.log(chai);

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

chai.name = "golden milk tea";

console.log(chai.name);
