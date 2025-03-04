/* --------- Polyfill --------- */

/*
    polyfill --> builtin functionality ka custom code likhna

    A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

    In the same way, if an old browser doesn't support a modern JavaScript feature (like fetch() or Promise()), a polyfill is extra code that adds that feature, so your code can work everywhere.

    Polyfill makes new features work in old browsers! 🚀
    
    1. map
    2. forEach
    3. Promise

    class Array {
        filter()
        map()
        forEach()
    }
    
    arr.__prototype__ = Array.prototype
*/

/* https://cdnjs.cloudflare.com/ajax/libs/js-polyfills/0.1.43/polyfill.js */

const arr = [7, 4, 3, 7, 9, 8];

if (!Array.prototype.fill) throw new Error("Please update your browser");

arr.fill();

if (!Array.prototype.fill) {
  /* Fallback --> this is polyfill function (a backup function) */
  Array.prototype.fill = function () {
    console.log("Custom fill function");
  };
}
