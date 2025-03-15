/* ...num1 is a rest operator */

function calculateCartPrice1(val1, val2, ...num1) {
  return num1;
}

function calculateCartPrice2(...num1) {
  /* num1 = [200, 300, 40, 290, 600] */
  let ans = 0;
  for (let i = 0; i < num1.length; i++) {
    ans += num1[i];
  }
  return ans;
}

/* Eg: calculate cart total price */

console.log(calculateCartPrice1(200, 300, 40, 290, 600)); // [40, 290, 600]
/* --> 200 and 300 assign in val1 and val2 */

console.log(calculateCartPrice2(200, 300, 40, 290, 600));

const user = {
  name: "chandan",
  price: 200,
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({ name: "demo", price: 299 }); /* direct object pass */

const newArray = [200, 400, 500];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(newArray)); // 400
console.log(returnSecondValue([300, 500, 3])); /* direct array pass */

/* sum all arguments value using arguments object */

function addAllArguments() {
  // console.log(arguments); // arguments as a array object
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans += arguments[i];
  }
  return ans;
}

let result = addAllArguments(4, 6, 8, 2, 9, 3);
console.log(result);
