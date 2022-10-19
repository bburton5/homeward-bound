const emoji = require("node-emoji");

const newPostHandler = async (event) => {
  event.preventDefault();
  console.log("Submit button has been pressed", emoji.get("scream_cat"), "!");

  const pet_name = document.querySelector("#pet-name").value.trim();
  const pet_type = document.querySelector("#pet-type").value.trim();
  const description = document.querySelector("#description-text").value.trim();
  const zip_code = document.querySelector("#zip-type").value.trim();
  const date_lost = document.querySelector("#date-type").value.trim();
  const contact_number = document.querySelector("#number-type").value.trim();

  if (
    pet_name &&
    pet_type &&
    description &&
    zip_code &&
    date_lost &&
    contact_number
  ) {
    const response = await fetch("/api/newpost", {
      method: "POST",
      body: JSON.stringify({
        pet_name,
        pet_type,
        description,
        zip_code,
        date_lost,
        contact_number,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      alert("You have submitted a missing pet!");
      console.log(
        "User has submitted a missing pet",
        emoji.get("scream_cat"),
        "!"
      );
    } else {
      alert("Your submission failed, please try again");
    }
  }
};

document
  .querySelector(".newpost-form")
  .addEventListener("submit", newPostHandler);
