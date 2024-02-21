class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was addes by ${this.username}`);
    }
}

const chai =new Teacher("chai","chai@google.com","112233")

chai.addCourse()

const tea = new User("MasalaTea")
tea.logMe()

