const accountId = 144553;
let accountEmail = "sourabh@gmail.com";
var accountpassword = "12345";
accountCity = "Sangli";

let accountState;
//accountId = 2;  // not allowed
accountEmail = "hc@gmail.com";
accountpassword = "212121";
accountCity = "Jaipur";
console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountpassword,
  accountCity,
  accountState,
]);

/*
Prefer not to use var
beacuse of issue in block scope and functional scope 
*/
