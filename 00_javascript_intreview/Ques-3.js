// Concept of hoisting -

// Create a Global execution context --> Global Object (this refer to window object)
// In Global execution context create memory phase and execution phase(code phase)


console.log(a); // undefined

var a = 20; // undefined 20

// let a = 20; // Cannot access 'a' before initialization because of TDZ
// const a = 20; // Cannot access 'a' before initialization bcause of TDZ
console.log(a);


// In case of var, let, const variable is hoisted to the top
// But in case of var undefined is printed
// But in let & const show error in console because TDZ (Temporal Dead Zone)
