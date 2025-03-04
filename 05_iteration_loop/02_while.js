/* -------- Loops: (iteration) -------- */

/* while loop --> If you can not know how many times */

let step = 0;
let house = 100;

while (step <= house) {
  console.log("Step Taken", step);
  step++;
}

/* do-while loop --> If you can not know how many times */

let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 10);

/*
    In case of while loop first step condition check then exicute code but
    in case of do-while loop first step exicute code then condition check

    If the condition never becomes false, the loop will never end and this might crash the runtime.
*/
