// reduce method

const myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce((accumulator, currentValue) => {
    // console.log(`acc: ${acc} currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 3);
// 3 is accumulator value
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Mobile",
        price: 14999
    },
    {
        itemName: "Laptop",
        price: 53000
    },
    {
        itemName: "TV",
        price: 23999
    },
    {
        itemName: "Car",
        price: 980400
    },
]

// let acc = 0;
// const totalPayment = shoppingCart.reduce( (acc, item) => acc + item.price, acc);

const totalPayment = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(totalPayment);