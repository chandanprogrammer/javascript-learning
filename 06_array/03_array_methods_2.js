/* ---------- Array Methods-2 ---------- */

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

/* 
    concat():--> method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
*/

const allHeros = marvel_heros.concat(dc_heros); // store in new variable and return new array
// console.log(allHeros);

/* spred operator in JavaScript */
const all_heors = [...marvel_heros, ...dc_heros]; // use more then two array
// console.log(all_heors);

/*
    flat():--> This method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
*/

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, 8, [9, 10]]];
const realAnotherArray1 = anotherArray.flat(4);
const realAnotherArray2 = anotherArray.flat(Infinity); // spread out values
// console.log(realAnotherArray1);
// console.log(realAnotherArray2);

/*
    isArray():--> This method determines whether the passed value is an array or not.
    from():--> This method creates a new array from an array-like object or an iterable object. It can take up to two arguments: the object to convert to an array, and a mapping function to apply to each element of the new array.
*/

console.log(Array.isArray("Hitesh")); // return true or false
console.log(Array.from("Hitesh")); // return in array
console.log(Array.from({ name: "rahul" })); // * return blank array

/*
    of():--> This method creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.
*/

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // convert in new array
