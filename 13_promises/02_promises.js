/* 
    --> Promises (wada) handle by 'micro task queue' 
    --> Promise accept callback function for return the value [callback function ko micro task queue me dal dega]
*/

// Promise.prototype.then = function(cb){
//     jb bhi value available hogi tb callback (cb) function ko run kar dega
//     cb(value)
// }

// async operation krne ke liye promises chahiye hote hai

// stages of promises
// 1. pending stage [default in this stage]
// 2. fulfilled stage
// 3. rejected stage
// settled stage but coding me settled nhi hota hai yh yek gargan word hai 

// .then(function)

const data = fetch("https://api.freeapi.app/api/v1/public/randomproducts");
console.log(data);
data.then(function () {
  console.log(".then part call huaa"); // fulfilled hone par run krega
});
data.catch(function () {
  console.log(".catch part call huaa"); // rejected hone par run krega jb bhi koi error hoga
});
data.finally(function () {
  console.log(".finally part call huaa"); // yh fulfilled or rejected dono condition me run krega hi krega
});
