// for-of Loop

// for (const iterator of object) { }

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello Chandan kumar";

for (const greet of greetings) {
    console.log(greet);
}

// Maps for unique value
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
// map.set('IN', "India"); // not allowed dubblicate value

console.log(map);
// array destructure
for (const [key, value] of map) {
    console.log(key, ":- ", value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}
// for-of loop not allowed in case of object
// for (const key of myObject) {
//     console.log(key);
// }



let colors = ['Red', 'White', 'Green'];

for(let [index, color] of colors.entries()){
    console.log(index + " -> " + color);
}