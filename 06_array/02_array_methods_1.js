/* ---------- Array Methods-1 ---------- */

/*
    at, concat, copyWithin, entries, every, fill, find, findIndex, filter, flat, flatMap, forEach, from, includes, isArray, join, keys, lastIndexOf, length, map, of, pop, push, reduce, reduceRight, reverse, shift, slice, some, sort, splice, toString, unshift, values
*/

/* Note:- array declear in crome inspect and run array then see 'prototype' */

let numbers = [3, 5, 9, 3, 8, 5, 3, 9];

/* 
    push():--> method adds one or more elements to the end of an array and returns the new length of the array. 
    pop():--> This method removes the last element from an array and returns that element.
*/

// numbers.push(26);
// numbers.pop();
// console.log(numbers);

/* 
    unshift():--> method adds one or more elements to the beginning of an array and returns the new length of the array.
    shift():--> method removes the first element from an array and returns that removed element. This method changes the length of the array. 
*/

// numbers.unshift(12);
// numbers.shift();
// console.log(numbers);

/* 
    includes():--> This method determines whether an array includes a certain value among its entries, returning true or false as appropriate. 
    indexOf():--> This method returns the 'index of the first occurrence' of a specified element in an array. If the element is not present, it returns -1.
*/

// console.log(numbers.includes(74)); // return true or false (boolean data type)
// console.log(numbers.indexOf(4));   // return index of first occurrence
// console.log(numbers.indexOf(47)); // return -1

/* 
    join():--> This method joins all the elements of an array into a string using a specified separator. It takes one optional argument: the separator
    to use. (bind and change in string data type)
*/
const newNumbers = numbers.join();
// const newNumbers = numbers.join(":");
// console.log(typeof numbers, numbers); // object
// console.log(typeof newNumbers, newNumbers); // string

/*
    splice():--> method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    slice():--> This method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).

    Interview Question -> Different between slice and splice
    slice returns a piece of the array but it doesn't affect the original array.
    splice changes the original array by removing, replacing, or adding values and returns the affected values.
*/

const myArr2 = [0, 1, 2, 3, 5, 8];
// console.log("A -", myArr2); // original array

let myn1 = myArr2.slice(1, 3); //  3rd index not include return 1, 2 index
// console.log(myn1);
// console.log("B -", myArr2); // not change in original array

let myn2 = myArr2.splice(1, 3); // 3rd index include return 1, 2, 3 index
// console.log(myn2);
// console.log("C -", myArr2); // change in original array, return excluding value of array

/*
    values():-> This method returns an iterators that provides the values for each index in the array. It takes no arguments.
*/

const arr = ["Raghav", "Sonu", "Aman", "Suraj Kumar", "Niraj"];
let iterator = arr.values();
// console.log(val);

for (let value of iterator) {
  console.log(value);
}

let index = arr.indexOf("Suraj-Kumar");
// console.log(index); // -1 return if not present in array

let index2 = arr.indexOf("Suraj Kumar");
console.log(index2);

if (index2 !== -1) {
  arr.splice(index, 1);
}
console.log(arr);
