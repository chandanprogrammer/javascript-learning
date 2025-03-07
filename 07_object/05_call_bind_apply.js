/* --------- .call, .bind, .apply --------- */

const person1 = {
  name: "ravi",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

const person2 = {
  name: "Hitesh",
};

/* call sidha call krta hai or constext pass krna hai tb call use hota hai */
person1.greet.call(person2);

person1.greet.call({ name: "Ramu" });

const bindGreet = person1.greet.bind(person2); // bind new function return krta hai

bindGreet();
// console.log(bindGreet);
// console.log(bindGreet());
