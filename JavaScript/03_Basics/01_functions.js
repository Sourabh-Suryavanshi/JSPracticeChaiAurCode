

function sayMyName(){
    console.log("S");
    console.log("O");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("B");
    console.log("H");
}

//sayMyName()
// function addTwoNumbers(num1,num2){
//    console.log(num1+num2);
// }
function addTwoNumbers(num1,num2){
   return (num1+num2);
}
 const result = addTwoNumbers(3,4)

//  console.log(result);

 function loginUserMessage(username){
    // if (!username)
    // {
    //     console.log("Please enter a username");
    //     return
    // }
    return `${username??"Guest"} just logged in`
 }

//  const user = loginUserMessage()
//   console.log(user);

function calculateCartPrice(val1,val2,...num1){
return num1
}

// console.log(calculateCartPrice(200,400,500,2000,500));

const user = {
    username :"Sourabh",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username:"Sam",
    price:140
})


const myNewArray = [200,400,100,600]


function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));