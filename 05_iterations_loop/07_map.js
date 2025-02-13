// map methods

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((num) => num + 10)
// console.log(newNums);

const newNums2 = myNums.map((num) => {
    return num + 10;
})
// console.log(newNums2);

// return all number 

// chaining
const newNums3 = myNums
    .map((num) => num * 10)
    .map((num) => num + 2)
    .filter((num) => num >= 40);

console.log(newNums3);