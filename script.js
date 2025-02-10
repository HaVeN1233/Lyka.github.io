const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

noButton.addEventListener("click", () => {
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;

  if (currentSize > 100) { // Adjust this value as needed
    noButton.classList.add("hidden"); // Hide the "No" button
    yesButton.style.fontSize = "100vh"; // Make the "Yes" button fill the screen
  }
});

yesButton.addEventListener("click", () => {
  alert("Yay! 🥰");
  // You can redirect to another page if needed:
  // window.location.href = "yes_page.html";
});
