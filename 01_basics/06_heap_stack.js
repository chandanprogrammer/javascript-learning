/* 
Stack (Primitive) --> copy bn ke jata hai varible me
--> The Stack is used for static memory allocation, primarily for storing primitive types and function calls. 
--> It's a simple, last-in, first-out (LIFO) structure, making it very fast to access.
*/

let collegeName = "Am College";
let changeCollegeName = collegeName;
changeCollegeName = "Gaya College";
console.log(collegeName);
console.log(changeCollegeName);

/* 
Heap (Non-primitive) --> referance jata hai
--> The Heap is used for dynamic memory allocation, where objects and arrays (non-primitive types) are stored.
*/

let userOne = {
  name: "Aman kumar",
  email: "chandan@gmail.com",
  upi: "906543kumar@ybl",
};
console.log(userOne.email);

let userTwo = userOne;
userTwo.email = "test@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
