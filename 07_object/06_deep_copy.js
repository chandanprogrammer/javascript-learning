const regularUser = {
  email: "someexample@gmail.com",
  age: 24,
  fullname: {
    userfullname: {
      firstname: "chandan",
      lastname: "kumar",
    },
  },
};

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}

console.log(deepClone(regularUser));
