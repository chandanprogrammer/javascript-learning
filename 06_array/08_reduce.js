/* reduce method return value/array/object according to accumulator data type */

const myNums = [1, 2, 3, 4, 5];

let initialValue = 3;
const myTotal = myNums.reduce((accumulator, currentValue, index) => {
  console.log(
    `acc: ${accumulator} currentValue: ${currentValue} index: ${index}`
  );
  return accumulator + currentValue;
}, initialValue);

// 3 is accumulator value
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "Mobile",
    price: 14999,
  },
  {
    itemName: "Laptop",
    price: 53000,
  },
  {
    itemName: "TV",
    price: 23999,
  },
  {
    itemName: "Car",
    price: 980400,
  },
];

// let accInitial = 0;
// const totalPayment = shoppingCart.reduce( (acc, item) => acc + item.price, accInitial);

const totalPayment = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(totalPayment);

/* find most active user */
let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 72 },
  { user: "Charlie", activityCount: 33 },
];

let res = userActivity.reduce((accumulator, currentUser) => {
  if (currentUser.activityCount >= accumulator.activityCount) {
    return currentUser;
  }
  return accumulator;
});
console.log(res);

let res2 = userActivity.reduce((maxUser, currentUser) =>
  currentUser.activityCount > maxUser.activityCount ? currentUser : maxUser
);
console.log(res2);

/* Note:- It is not necessary to provide an initial value. If no initial value is given, the first value of the array is assigned to the accumulator. */

const getMax = (a, b) => Math.max(a, b);

/* callback is invoked for each element in the array starting at index 0 */
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

/* callback is invoked once for element at index 1 */
[1, 100].reduce(getMax); // 100

/* callback is not invoked */
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

// [].reduce(getMax); /* TypeError */

let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

/* calculate expense category wise and show in array or object using reduce method */

let expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] += expense.amount;
    return report;
  },
  { Food: 0, Utilities: 0 }
);
console.log("Expense Report", expenseReport);

let expenseReport2 = expenses.reduce((report, expense) => {
  report[expense.category] = (report[expense.category] || 0) + expense.amount;
  return report;
});
console.log("Expense Report2", expenseReport2);
