function throwCheckNameExepction(){
    new Error("Name is required")
}

function show(name){
    if(name == undefined)
        console.log(throwCheckNameExepction()); 
    return name;
}
// function show(name = 'User name'){
//     return name;
// }
// function show(name){
//     return name;
// }

// console.log(show('khana')); // khana
console.log(show()); // undefined