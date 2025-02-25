const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task - DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task-1 is compelete");
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed task-1");
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task-2 is compelete");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Promise consumed task-2");
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "example@gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "chandan", password: "123" })
        }
        else {
            reject("ERROR: Something is wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Javascript", password: "123" })
        }
        else {
            reject("ERROR: Js is wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


// async function getGithubDetails() {
//     try {
//         const response = await fetch('https://api.github.com/users/chandanprogrammer');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Err: ", error);
//     }
// }
// getGithubDetails();

fetch('https://api.github.com/users/chandanprogrammer')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("E", error);
})