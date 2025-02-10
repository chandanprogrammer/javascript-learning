/*
    -> Variable is a container to store a value.
    -> Variable is a memory name. 
    -> A variable is identified by a unique name called an identifier.
    -> During the execution of a JavaScript program, variables can be changed called dynamically type language. 
    -> The data type is defined during compile time and cannot be changed during runtime called tically typed language.
    -> Two types of variable scope :- local (functional or block) and global

    ---> Rules for choosing a variable name (naming convension) 
    1. Contain letters, digits, underscores, and dollar signs
    2. Must begin with a letter, underscore or dollar sign .
    3. Names are case sensitive (code and CODE both are different)
    4. Reserved words (like JavaScript keywords) cannot be used
    5. ❌ Not allowed space, not start with number

    -> camelCase   [most prefered]
    -> PascalCase
    -> snake_case
    -> kebab-case 

    DataType varName = value; ---> Strongly Typed Language 
    int varName = 8; ---> only store integer value
    but JavaScript is not strongly typed language it's a Looslly Typed Language

*/

/* JavaScript Variables can be declared in 4 ways:- */

userName =
  "gyancoding"; /* Automatically (to written without let, const, var but not prefer to written this type.) */
var userId = 1234; /* Using var (prefer not to use var because of issue in block scope and functional scope.) */
let userPassword = "Pass@123"; /* Using let */
const userEmail = "test@gmail.com"; /* Using const (Never change) */

console.log(userId); // 1234
console.log(typeof userEmail); // string
console.table([userName, userId, userPassword, userEmail]);

/* ---> score is identifer,  = is assignment operator, 56 is literal */
let score; /* variable name only defined */
score = 56; /* variable declaring */
console.log(score); // 56

{
  let score = 43;
  console.log(score); // 43
}

console.log(score); // 56 - but in above bracket not use let keyword then output is 43

/*
    ----> var vs let vs const
    1. var is use before ES6.
    2. var is globally scoped while let and const are block or local scoped.
    3. var can be updated and re-declared. 
    4. let can be updated and not re-declared.
    5. const can be neither be updated and nor be re-declared or re-assign.
    6. const must be initialized during declaration. (❌ const newEmail;)
    7. var and let can't be initialized during declaration compulsory.
    8. var can access before initialization but let and const not access.
*/

userPassword = undefined;
console.log("userPassword ", userPassword); // undefined

// userEmail = "change@gmail.com"; /* throws an error because constant can't be changed */
// console.log(userEmail);

// console.log("beforeAccess ", beforeAccess); // undefined
// var beforeAccess = "yes but undefined";
// console.log("beforeAccess ", beforeAccess); // yes

// console.log("beforeAccess ", beforeAccess); // not access: error
// let beforeAccess = "no";

// console.log("beforeAccess ", beforeAccess); // not access: error
// const beforeAccess = "no";
