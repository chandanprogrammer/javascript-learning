/* ---------- Higher order function (HOF) and Callback function ---------- */

/* 
    In JavaScript, a higher-order function (HOF) is a function that can take other functions as arguments and/or return functions as results. 
    HOFs are a fundamental concept in functional programming. 
*/

function add(a, b, callback) {
  let result = a + b;
  callback(result);
}

add(2, 4, function (val) {
  console.log(val);
});

function showResult(val) {
  console.log(val);
}

add(2, 4, showResult);

add(2, 4, (val) => console.log(val)); /* callback function */

function multiply(a, b, callback) {
  let result = a * b;
  callback(result);
  return () => console.log(result);
}
const resultMultiply = multiply(3, 7, () => {});

resultMultiply();
