/* -------- Array -------- */

/*
  --> Array is a object, it can many values under a single name.
  --> Array are mutable.
  --> JavaScript array are mixed data type.
  --> JavaScript array value can be change.
  --> JavaScript array re-sizeable.
  --> JavaScript array is zero based indexing.
  --> JavaScript array copy operations create shallow copies (that means whose properties share the same references point).
*/

/* 
  Shallow copy vs Deep copy 
  --> A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values).
  --> Deep copy stores copies of the object’s value. Deep copy doesn’t reflect changes made to the new/copied object in the original object.
*/

let myArr = [3, 6, 7, 56];
// console.log(myArr);
// console.log(typeof myArr);
// console.log(myArr.length); // return length of array
// console.log(myArr.toString());

const nameArr = [
  "Mohit",
  "Raushan",
  "Rohit",
  "Raghav",
  "Aman",
  "Suraj",
];
// console.log(nameArr);
// console.log(nameArr[0]);
// console.log(nameArr[2]);
// console.log(nameArr.toString());

const numbers = new Array(1, 2, 3, 4); /* Another method to declear array */
// console.log(numbers);
// numbers[2] = 8;
// console.log(numbers[2]);

