// new page to register
// after i register i will be taken to the image i clicked on, or back to the home screen if nothing was clicked

const registerFunction = async(event) => {
  event.preventDefault();
  console.log("I pressed register");
} 


document
  .querySelector(".register-form")
  .addEventListener("submit", registerFunction);