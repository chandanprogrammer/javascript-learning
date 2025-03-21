/* ------------ Data Type Conversion [Number, Boolean, String] ------------ */

/* --------- Try to change in Number --------- */

// let score = "string"   /* string --> NaN (not a number) as number */
// let score = null       /* null object --> 0 number */
// let score = ""         /* blank string --> 0 number */
// let score = undefined  /* undefined as undefined --> NaN as number */
// let score = true;      /* boolean --> 1 number */
// let score = false;     /* boolean --> 0 number */
let score = 12.9; /* number --> number */
console.log(score, typeof score);

let scoreInNumber = Number(score);
console.log(scoreInNumber, typeof scoreInNumber); // written just like methods

let scoreInNumber2 = parseInt(score);
console.log(scoreInNumber2, typeof scoreInNumber2);

let scoreInNumber3 = parseFloat(score);
console.log(scoreInNumber3, typeof scoreInNumber3);

/* --------- Try to change in Boolean --------- */

// let isLoggedIn = 0;          /* 0 number --> false bollean */
// let isLoggedIn = null;       /* null object --> false bollean */
// let isLoggedIn = undefined;  /* undefined as undefined --> false bollean */
// let isLoggedIn = "string";   /* string as string --> true bollean */
// let isLoggedIn = "";         /* blank string --> false bollean */
let isLoggedIn = 1; /* 1 number --> true bollean */
console.log(isLoggedIn, typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn);

/* --------- Try to change in String --------- */

// let value = "";        /* blank string --> blank string */
// let value = "string";  /* string --> string */
// let value = null;      /* null as object --> null as string */
// let value = undefined; /* undefined as undefined --> undefined as string */
// let value = true;      /* bollean --> string */
let value = 22; /* number --> string  */
console.log(value, typeof value);

let stringValue = String(value);
console.log(stringValue, typeof stringValue);
