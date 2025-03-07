/* --------- Arrow Function --------- */

const chaiCode = () => {
  let username = "chandan";
  // console.log(this.username); // undefined
  // console.log(this); // {}
};
// chaiCode();

const addTwoNumber = (num1, num2) => {
  return num1 + num2;
};
// console.log(addTwoNumber(4, 7));

const addTwo = (num1, num2) => num1 + num2; // inplict return
// console.log(addTwo(3, 4));

// const fun = () =>  {username : "ck"}; // undefined

const fun = () => ({ username: "ck" });
// fun();
