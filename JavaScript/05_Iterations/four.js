const myObject = {
  js: "javascript",
  py: "python",
  cpp: "c++",
  rb: "ruby",
};

// for (const key in myObject) {
//   console.log(`${key}: ${myObject[key]}`);
// }

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(programming[key]);
}

const map = new Map();

map.set("IN", "India");
map.set("USA", "Unites State of America");
map.set("Fr", "France");

//map is not iterable