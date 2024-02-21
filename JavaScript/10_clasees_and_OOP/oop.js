const user = {
  username: "Sourabh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
  },
};

//console.log(user.username); // Accessing the property of an object using dot notation (.)
//user.getUserDetails();

// const promisOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const userOne = new User("Sourabh", 12, true);
const userTwo = new User("Hitesh", 13, false);
console.log(userOne);
console.log(userTwo);
