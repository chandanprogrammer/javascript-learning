// Signature phle smgho

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  };
}


const arr = [1, 5, 9, 3, 0, 2];

arr.myForEach((value, index)=>{
    console.log(value, index);
    
})

// https://cdnjs.cloudflare.com/ajax/libs/js-polyfills/0.1.43/polyfill.js