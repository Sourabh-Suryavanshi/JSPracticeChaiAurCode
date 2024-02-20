// const tinderUser = new Object();  singleton object
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sunny";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Sourabh",
      lastname: "Suryavanshi",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { obj1, obj2 };
// console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
const obj5 = { ...obj1, ...obj2 };
// console.log(obj5);

const ob = [
  {
    name: "Sourabh",
    Age: "25",
  },
  {
    name: "John",
    Age: "25",
  },
  {
    name: "John",
    Age: "25",
  },
  {
    name: "John",
    Age: "25",
  },
  {
    name: "John",
    Age: "25",
  },
];
// console.log(ob[0]?.name);

// console.log(obj4);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("id"));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstuctor: "hitesh",
};

// course.courseInstuctor

const { courseInstuctor: instructor } = course;

// console.log(courseInstuctor);

// console.log(instructor);

// const navbar = ({ company }) => {
// };

// navbar((company = "hitesh"));

//JSON
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price" :"free"
// }

[{}, {}, {}];
