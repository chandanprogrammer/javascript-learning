
// Write a javascript program to print the English alphabet from 'a' to 'z'. 
// Your function should not use any external library or pre-defined arrays of characters.

// Hint : ASCII character codes
// ASCII character codes for lowercase letters start from 97 (a) to 122 (z).


console.log('a'.charCodeAt(0));


for(let i=97; i<=122; i++){
    console.log(String.fromCharCode(i));
}