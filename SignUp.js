document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".registration-form");
  const alertMessageContainer = document.getElementById(
    "alert-message-container"
  );

  // Function to show an alert message
  const showAlert = (message, type = "error") => {
    alertMessageContainer.innerHTML = `<div class="alert ${type}">${message}</div>`;
    alertMessageContainer.style.display = "block";

    // Hide the alert after a few seconds
    setTimeout(() => {
      alertMessageContainer.style.display = "none";
    }, 3000);
  };

  // Function to validate form inputs
  const validateForm = (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form.confirmPassword.value.trim();
    const dateOfBirth = form.dateOfBirth.value.trim();
    const phoneNumber = form.phoneNumber.value.trim();

    // Validate username (e.g., minimum length)
    if (username.length < 3) {
      showAlert("Username must be at least 3 characters long.");
      return;
    }

    // Validate email using a simple regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showAlert("Please enter a valid email address.");
      return;
    }

    // Validate password (e.g., minimum length)
    if (password.length < 6) {
      showAlert("Password must be at least 6 characters long.");
      return;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      showAlert("Passwords do not match.");
      return;
    }

    // Validate phone number using a pattern (e.g., 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      showAlert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Validate date of birth (e.g., must be a past date)
    const dob = new Date(dateOfBirth);
    const today = new Date();
    if (dob >= today) {
      showAlert("Date of birth must be a past date.");
      return;
    }

    // If all validations pass, proceed with form submission
    form.submit(); // Replace this with your form submission handling logic
  };

  // Add event listener for form submission
  form.addEventListener("submit", validateForm);
});
