const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

// coding.forEach(printme);

// function printme(item) {
//   console.log(item);
// }

const myCoding = [
  {
    languageName: "javascrift",
    languageFileName: "js",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
  {
    languageName: "C++",
    languageFileName: "cpp",
  },
  {
    languageName: "javas",
    languageFileName: "java",
  },
];

myCoding.forEach((items) => {
  console.log(`${items.languageName} : ${items.languageFileName}`);
});
