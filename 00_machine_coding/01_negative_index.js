/* Enable negative indexing in javascript */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr[-2]); // undefined
// console.log(negativeIndex(arr, -1));

function negativeIndex(arr, val) {
  if (val < 0) {
    return arr[arr.length + val];
  }
  return arr[val];
}

/* Proxy --> Proxy object enables you to create a proxy for another object, where can intercept and redefine fundamental operations for that object 
    --> some properties to be hide then use proxy. 
    --> Example:- .length
*/

const target = {
  name: "chandan",
  age: 25,
};
const handler1 = {};
const proxy1 = new Proxy(target, handler1);
// console.log(proxy1.name);
// console.log(proxy1.age);

const user = {
  name: "chandan",
  age: 25,
  password: "chan123",
};

const proxyUser = new Proxy(user, {
  get(target, prop) {
    // console.log(target, prop);
    if (prop === "password") {
      throw new Error("Access Denied");
    }
    return target[prop];
  },
  set(target, prop, user) {},
});
// console.log(proxyUser.password);

// get perform read operation and set perform write operation
function negativeIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      //   console.log(target, prop);
      const index = Number(prop);
      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value;
      } else {
        target[index] = value;
      }
      return true;
    },
  });
}
let newArr = negativeIndex(arr); // operation on original array
console.log(newArr[-1]);

newArr[-2] = 101; // set operation

console.log(newArr); // get operation
console.log(arr);

// Wrie your own polyfill for Proxy
