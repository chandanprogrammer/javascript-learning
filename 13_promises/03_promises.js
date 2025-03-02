// fetch code in nesting

fetch("https://api.freeapi.app/api/v1/public/randomproducts")
  .then((response) => {
    response.json().then((obj) => console.log(obj));
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("All Done!"));

// fetch code without nesting

fetch("https://api.freeapi.app/api/v1/public/randomproducts")
  .then((response) => response.json())
  .then((obj) => console.log(obj))
  .catch((error) => console.log(error))
  .finally(() => console.log("All Done!"));

fetch("https://api.freeapi.app/api/v1/public/randomproducts")
  .then((response) => {
    return response.json();
  })
  .then((obj) => console.log(obj))
  .catch((error) => console.log(error))
  .finally(() => console.log("All Done!"));

// --> fetch is a feature of browser or node or bun.
// --> before using fetch, use a libraray like q, bluebird
// --> JavaScript is not capable to network request.
