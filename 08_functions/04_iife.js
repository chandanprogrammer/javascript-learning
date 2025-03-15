/* ------ Immediately Invoked Function Expressions (IIFE) ------ */

// (Function defination)(Function execution)

/* named iife */
(function connectDB() {
  console.log(`DB connected`);
})();

// ; jruri hai iife ke case me context ko rokne ke liye

/* 
    Global scope se pollution se problem ke resion se globle scope me jo variable use hota hai us pollution ko htane ke liye iife ka use krte hai.
*/

/*  unnamed or normal iife */
(() => {
  console.log(`Again db connected`);
})();

((name) => {
  console.log(`Again 2 db connected ${name}`);
})("demo");

let config = (function () {
  let settings = {
    theme: "dark",
  };
  return settings;
})();
