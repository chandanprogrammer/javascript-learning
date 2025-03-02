// synchronous code executes tasks in order, while asynchronous code executes tasks independently, Faster and more efficient for multitasking

/* Example of synchronously (sync) code [sync means instantly or code run line by line ] */

// console.log("Hello ji");
// let a = 7;
// let b = 30;
// let sum = a + b;
// console.log(sum);
// console.log("Bye ji");

/* Example of asynchronously (async) code [async means code take more time for operation ] */

console.log("Hello ji");

const data = fetch("https://api.freeapi.app/api/v1/public/randomproducts");
console.log(data);
data.then((res) => console.log(res));
data.catch((error) => console.log(error));
data.finally(() => console.log("All Done!"));

console.log("Bye");
