const promiseOne = new Promise(function (resolve, reject) {
  //Do and async task
  //DB calls, cryptography, network

  setTimeout(function () {
    console.log("Async task is complete");
    // resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("async 2 resolved");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Chai", email: "chai@example.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Sourabh", password: "123" });
//     } else {
//       reject("Error: Something went wrong");
//     }
//   }, 2000);
// });

// const uNmae = promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("The Promise is either resolved or rejected"));

// console.log(uNmae);

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javscript", password: "123" });
//     } else {
//       reject("Error: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const res = await promiseFive;
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E", error);
//   }
// }
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json(); //returning a promise
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
