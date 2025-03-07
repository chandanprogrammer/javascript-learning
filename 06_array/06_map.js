/* ----------- map method return a new array ----------- */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((num) => num + 10);
// console.log(newNums);

const newNums2 = myNums.map((num) => {
  return num + 10;
});
// console.log(newNums2);

// return all number

// chaining
const newNums3 = myNums
  .map((num) => num * 10)
  .map((num) => num + 2)
  .filter((num) => num >= 40);

console.log(newNums3);

/* Claculate average movie rating */

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let averageRatings = movieRatings.map((movie) => {
  let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
  let average = Number((total / movie.ratings.length).toFixed(1));
  return { title: movie.title, ratings: average };
});

console.log(averageRatings);
