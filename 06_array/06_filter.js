// ----------- filter method return array ----------- */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4 )
// console.log(newNums);

const newNums2 = myNums.filter((num) => {
  return num > 4;
});
// console.log(newNums2);

const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks1 = books.filter((book) => book.genre === "History");
console.log(userBooks1);

let userBooks2 = books.filter((book) => {
  return book.publish >= 1995 && book.genre === "History";
});
console.log(userBooks2);

let tasks = [
  {
    description: "Write report",
    completed: false,
    priority: 2,
  },
  {
    description: "Send email",
    completed: true,
    priority: 3,
  },
  {
    description: "Prepare presentation",
    completed: false,
    priority: 1,
  },
];

/* jo task complete nhi huaa hai usko priority ke basics be short kre */
let pendingSortedTask = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);

console.log(pendingSortedTask);
