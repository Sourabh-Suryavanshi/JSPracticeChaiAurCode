let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toDateString());

// const mycreatedate = new Date(2024, 0, 30);
// console.log(mycreatedate);
// console.log(mycreatedate.toLocaleString());
// const mycreatedate1 = new Date("2023-01-30");
// console.log(mycreatedate1);

// let datetimenow = Date.now();
// console.log(datetimenow);
console.log(Math.floor(Date.now() / 1000));

let datetimenow = new Date();

datetimenow.toLocaleString("default", {
  weekday: "long",
  timeZone: "",
});
