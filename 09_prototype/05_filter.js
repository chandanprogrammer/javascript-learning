/* ---------- .filter polyfill ---------- */

const arr = [7, 6, 1, 9, 2];

const filterArr = arr.filter(function (value) {
  return value > 3;
});

console.log(filterArr); // return condition matched array and no change in original array
console.log(arr);

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFun) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const res = userFun(this[i], i); // return true or false
      if (res) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

const filterArr2 = arr.myFilter(function (value) {
  return value > 3;
});

console.log(filterArr2);
console.log(arr);
