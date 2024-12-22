// Wait for the document to be fully loaded before attaching event handlers
document.addEventListener("DOMContentLoaded", function () {
  // Select the contact form
  const form = document.getElementById("contactForm");

  // Add an event listener to handle form submission
  form.addEventListener("submit", function (event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    // Hide the form and display the thank you message
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.style.display = "block";

    // Optionally, clear the form fields
    form.reset();

    // Scroll to the thank you message to make it visible after submission
    window.scrollTo({
      top: responseMessage.offsetTop,
      behavior: "smooth",
    });
  });
});
