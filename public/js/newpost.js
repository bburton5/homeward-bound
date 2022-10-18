const newPostHandler = async (event) => {
  event.preventDefault();
  console.log("I pressed the submit button")

  const petType = document.querySelector('#pet-type').value.trim();
  const description = document.querySelector('#description-text').value.trim();
  const microchip = document.querySelector('#microchip-type').value.trim();
  const zipCode = document.querySelector('#zip-type').value.trim();
  const lastSeen = document.querySelector('#date-type').value.trim();
  const phNumber = document.querySelector('#number-type').value.trim();

  if (petType && description && microchip && zipCode && lastSeen && phNumber) {
    const response = await fetch('/api/newpost', {
      method: 'POST',
      body: JSON.stringify({ petType, description, microchip, zipCode, lastSeen, phNumber }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
      alert('You have submitted a missing pet!')
    } else {
      alert('Please fill out all portions of this form');
    }
  }
};


document
  .querySelector(".newpost-form")
  .addEventListener("submit", newPostHandler);