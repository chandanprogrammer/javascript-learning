/* ---------- .map polyfill ---------- */

// Error: .map function does not exist on arr variable

// Signature .map
// Return? - new Array, each element iterate, userFun

const arr = [1, 2, 3, 5, 8, 4, 9];

const newArr = arr.map(function (val) {
  return val * 2;
});

console.log(newArr); // return new array but no change in original array

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFun) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const value = userFun(this[i], i);
      result.push(value);
    }
    return result;
  };
}

const newArr2 = arr.myMap(function (val) {
  return val * 2;
});

console.log(newArr2);
