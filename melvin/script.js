document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const responseMessage = document.getElementById("responseMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Simulate form submission and show thank you message
    responseMessage.style.display = "block";

    // Reset form after submission
    form.reset();
  });
});
