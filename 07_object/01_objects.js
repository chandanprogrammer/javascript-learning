/* --------- Object --------- */

/* Example of deep copy in string */
let fullName = "Aman Kumar";
console.log(fullName);

let anotherName = fullName;
console.log(anotherName);

fullName =
  "Rahul Kumar"; /* not change in another variable because pass by value */
console.log(fullName); // Rahul Kumar
console.log(anotherName); // Aman Kumar

/* Example of shallow copy in object */
let user1 = {
  firstName: "Ankit",
  lastName: "verma",
  age: 25,
};

let user2 = user1;

console.log("user1:", user1);
console.log("user2:", user2);

user2.firstName =
  "Piyush"; /* change in both object because of pass by reference */
user2.lastName = "Garg";

console.log("user1:", user1);
console.log("user2:", user2);

/* copy one object to another object without reference */
let p1 = {
  firstName: "Ankit",
  lastName: "verma",
  age: 25,
  address: {
    city: "abc",
    state: "bihar",
    pincode: 825467,
  },
};
let p2 = {
  firstName: p1.firstName,
  lastName: p1.lastName,
  age: p1.age,
};

p2.firstName = "xyz";

console.log("p1:", p1);
console.log("p2:", p2);

/* 
  copy one object to another object using 'Spread Operator'. 
  Spread Operator work on 1st lavel object not work on inner label object that mean create a shallow copy
*/

let p3 = { ...p1 };
let p4 = { ...p1, address: { ...p1.address } };

console.log("p3:", p3);
console.log("p4:", p4);

/* 
  copy one object to another object in deep copy 
  object change in String
  string change in object and store

  DSA ---> serialization and deserialization of tree
  object ko string me change krna serialization and us string ko again object me change krna deserialization khlata hai.
*/

let p1KaString = JSON.stringify(p1);
console.log(p1KaString);

let p5 = JSON.parse(p1KaString);
console.log("p5:", p5);

/* delete the some properties of object */
delete p5.age;
console.log(p5);
