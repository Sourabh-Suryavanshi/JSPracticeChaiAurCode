const user = {
  username : "hitesh",
  price :"999",
  
  welcomeMessage : function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this);

  }
}

// user.welcomeMessage();
// user.username = "sourabh"
 user.welcomeMessage();


// console.log(this);

// function chai (){
//   let username = 'hitesh'
//   console.log(this.username);
// }

// chai()

const chai1 = function(){
  let username = 'hitesh'
   console.log(this);
}

// chai1()

const chai = () => {
     let username = 'hitesh'
    console.log(this);
   }
  
    chai()

  // const addTwo = (num1,num2) => {
  //    return  num1 + num2
  // }

 //const addTwo = (num1,num2) => ( num1 + num2)  //Implicit return
 const addTwo = (num1,num2) =>( {username:"hitesh"})



  // console.log(addTwo(3,4));


  // const myArray = [2,5,6,4,3]

  // myArray.forEach(()=>{})