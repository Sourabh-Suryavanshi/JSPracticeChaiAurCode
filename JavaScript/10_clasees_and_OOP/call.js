function SetUsername(username) {
  console.log("in setuser");
  this.username = username;
}

function createUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);

//call and this 
