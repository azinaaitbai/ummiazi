const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

bar.onclick = () => {
  nav.classList.toggle("active"); // Toggle the 'active' class on navbar
};

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active"); // Close the navigation when close button is clicked
  });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("exploreBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  closeModal();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Function to close modal
function closeModal() {
  modal.style.animation = "fadeOut 0.6s ease-in-out"; // Apply fade-out animation
  setTimeout(function () {
    modal.style.display = "none";
    modal.style.animation = ""; // Reset animation after closing
  }, 300); // Adjust timeout to match animation duration
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// // dark mode js
// // script.js
// function toggleDarkMode() {
//   const body = document.body;
//   body.classList.toggle("dark-mode");

//   // Update local storage
//   const isDarkMode = body.classList.contains("dark-mode");
//   localStorage.setItem("darkMode", isDarkMode);
// }

// // Apply dark mode on page load
// function applyDarkModeOnLoad() {
//   const isDarkMode = localStorage.getItem("darkMode") === "true";
//   const body = document.body;
//   if (isDarkMode) {
//     body.classList.add("dark-mode");
//   } else {
//     body.classList.remove("dark-mode");
//   }
// }

// // Call the function to apply dark mode on page load
// applyDarkModeOnLoad();

// script.js

// script.js

// Function to toggle dark mode
function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Function to apply dark mode on page load
