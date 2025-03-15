/* ----------- Hoisting ----------- */

// console.log(addOne(5)) // phle bhi call kr skte hai jb normal function bnate hai

function addOne(num) {
  return num + 1;
}

// Concept of Hosting

// console.log(addTwo(5)) // Expiration Function: Is trika se phle call nhi kr skte hai

const addTwo = function (num) {
  return num + 2;
};
// console.log(addTwo(5));
