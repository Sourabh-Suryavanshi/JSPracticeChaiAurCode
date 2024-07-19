document.querySelector("#grandparent")
.addEventListener('click',(e)=>{
    console.log("Grandparent Clicked");
},true); //capturing



document.querySelector("#parent")
.addEventListener('click',()=>{
    console.log("Parent Clicked");
},false)


document.querySelector("#child")
.addEventListener('click',()=>{
    console.log("Child Clicked");
},true)