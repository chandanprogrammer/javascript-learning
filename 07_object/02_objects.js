/* --------- create literals object ----------*/

/* 
    Two types of object declear 
    1. object literal 
    2. constructor se singleton object bnega object (Object.create)

    --> Object literals se singleton nhi bnta hai
*/

const mySym = Symbol("key1");

const JsUser = {
  firstName: "chandan", // name bhi string hi hota hai
  lastName: "kumar",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
  "full name": "chandan kumar",
  mySym: "mykey1", // normal access not access mySum variable
  [mySym]: "mykey2", // [] refer to symbol
  age: 18,
  address: {
    state: "Bihar",
    city: "xyz",
    pincode: 876700,
  },
  email: "chandan@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Wednesday"],
};

// console.log(JsUser.name);
// console.log(JsUser[name]); // wrong
// console.log(JsUser["name"]);

// console.log(JsUser.full name); // wrong
// console.log(JsUser["full name"]);

// console.log(JsUser.mySym);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// console.log(JsUser.email);
JsUser.email = "change-email@gmail.com";
// console.log(JsUser);
// Object.freeze(JsUser); // object lock not change email (if try to change then no any error but not change)
JsUser.email = "again-change-email@gmail.com";
// console.log(JsUser);

JsUser.gretting = function () {
  console.log("Hello Js User");
};

// console.log(JsUser.gretting) // function return back
console.log(JsUser.gretting());

JsUser.grettingTwo = function () {
  console.log(
    `Hello Js User, ${this.name}`
  ); /* `` string interpulation / same object ko refer krne ke liye this keyword ko use krte hai */
};

console.log(JsUser.grettingTwo());
