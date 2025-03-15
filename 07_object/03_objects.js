/* --------- create singleton object ----------*/

const tinderUser = new Object();
// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "someexample@gmail.com",
  age: 24,
  fullname: {
    userfullname: {
      firstname: "chandan",
      lastname: "kumar",
    },
  },
};

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.lastname);
// const {email, age} = regularUser /* object destructuring */
// const {email : e} = regularUser

// console.log(email, e);

/* ----------- Object copy -----------  */

const obj0 = { 0: "a", 10: "b" };
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 3: "b" };

// const obj3 = {obj1, obj2} /* object ke andar object bn jayega */
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2) /* all value copies in obj1 */
// const obj4 = Object.assign({} ,obj0, obj1, obj2) /* all value copies in {} objects, {} --> structure (target, and other all are source) */

// console.log(obj3);
// console.log(obj4);

const obj3 = { ...obj1, ...obj2 }; /* spread operator (shallow copy) */
// console.log(obj3);

/* data comes from database */
const user = [
  {
    id: 1,
    name: "chandan",
  },
  {
    id: 2,
    name: "chandan",
  },
  {
    id: 3,
    name: "chandan",
  },
];
// console.log(user[1].name);

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)); /* return array of keys */
// console.log(Object.values(tinderUser)); /* return array of values */
// console.log(Object.entries(tinderUser)); /* return array of all entries */
console.log(tinderUser.hasOwnProperty("isLoggedIn")); /* return true or false */

/*
  Json formate 1 ---> keys and values both are in string formate
    {
      "id" : 123,
      "name": "chandan",
    }
    
  Json formate 2
      [
          {},
          {}
      ]
*/
