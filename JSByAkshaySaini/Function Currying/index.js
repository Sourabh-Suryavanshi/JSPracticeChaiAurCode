// function multiply(x,y){
//     console.log(x*y)
// }
// //multiply(2,3)


// let multiplyByTwo = multiply.bind(this,2,5);

// multiplyByTwo(4);


function multiplyy(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyby2 = multiplyy(2)

multiplyby2(6)

