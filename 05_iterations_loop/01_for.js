// loops are use to perform repeated actions

// for loop

for (let index = 0; index < 10; index++) {
    let element = index;
    // console.log(element);
}

for (let i = 0; i < 5; i++) {
    // condition check
    if (i == 4) {
        // console.log('4 is best number');
    }
    // console.log(i);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + " = " + i * j);
    }
}

let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

for (let i = 1; i <= 20; i++) {
    // if(i==5){
    //     break;
    // }
    if (i == 5) {
        continue;
    }
    console.log(i);
}