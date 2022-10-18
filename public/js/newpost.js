const newPostHandler = async (event) => {
  event.preventDefault();
  console.log("I pressed the submit button");

  const petName = document.querySelector("#pet-name").value.trim();
  const petType = document.querySelector("#pet-type").value.trim();
  const description = document.querySelector("#description-text").value.trim();
  const image = document.querySelector("#image-type").value.trim();
  const zipCode = document.querySelector("#zip-type").value.trim();
  const zipCodeInt = Number(zipCode);
  const lastSeen = document.querySelector("#date-type").value.trim();
  const lastSeenInt = Number(lastSeen);
  const phNumber = document.querySelector("#number-type").value.trim();
  const phNumberInt = Number(phNumber);
  console.log(
    petName,
    petType,
    description,
    image,
    zipCodeInt,
    lastSeenInt,
    phNumberInt
  );
  console.log(
    typeof petName,
    typeof petType,
    typeof description,
    typeof image,
    typeof zipCodeInt,
    typeof lastSeenInt,
    typeof phNumberInt
  );
  if (
    petName &&
    petType &&
    description &&
    image &&
    zipCodeInt &&
    lastSeenInt &&
    phNumberInt
  ) {
    const response = await fetch("/api/newpost", {
      method: "POST",
      body: JSON.stringify({
        petName,
        petType,
        description,
        image,
        zipCodeInt,
        lastSeenInt,
        phNumberInt,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      alert("You have successfully submitted a missing pet!");
    } else {
      console.log(response);
      alert("Failed to successfully submit a missing pet!");
    }
  }
};

document
  .querySelector(".newpost-form")
  .addEventListener("submit", newPostHandler);
