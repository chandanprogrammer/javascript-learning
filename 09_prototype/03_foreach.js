/* ---------- .foreach polyfill ---------- */

// Real Signature ko phle samjo

const arr = [1, 5, 9, 3, 0, 2];

let returnValue = arr.forEach(function (value, index) {
  console.log(`Value at Index ${index} is ${value}`);
});
console.log(returnValue); // undefined means nothing return

// myForEach polyfill

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFun) {
    const originalArr = this; // dynamic context - current object ki taraf point krta hai
    for (let i = 0; i < originalArr.length; i++) {
      userFun(originalArr[i], i);
    }
  };
}

arr.myForEach(function (value, index) {
  console.log(`Value at Index ${index} is ${value}`);
});
