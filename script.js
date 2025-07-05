document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;
  
    if (new Date(checkin) >= new Date(checkout)) {
      alert("Check-out date must be after check-in date.");
      return;
    }
  
    const confirmation = document.getElementById("confirmation");
    confirmation.classList.remove("hidden");
    confirmation.innerHTML = `
      <h3>Booking Confirmed!</h3>
      <p>Name: <strong>${name}</strong></p>
      <p>Check-in: ${checkin}</p>
      <p>Check-out: ${checkout}</p>
      <p>Guests: ${guests}</p>
    `;
  
    this.reset(); // Clear form
  });
  