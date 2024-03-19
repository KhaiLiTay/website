// script.js

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to check password
function checkPassword() {
  var password = document.getElementById("passwordInput").value;
  // Replace "your_password_here" with your actual password
  if (password === "khaili") {
    modal.style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("backgroundSection").style.display = "none"; // Hide background image
  } else {
    alert("Incorrect password. Please try again.");
  }
}

// When the user clicks on the button, open the modal
window.onload = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
