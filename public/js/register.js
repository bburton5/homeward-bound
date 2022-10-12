const registerFunction = async(event) => {
  event.preventDefault();
  console.log("I pressed register");
} 


document
  .querySelector(".register-form");
  .addEventListener("submit", registerFunction)