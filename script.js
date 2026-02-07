document.getElementById("btn").onclick = () => {
  alert("It works!");
};

// Login Form Handler
function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");
  
  // Clear previous error message
  errorMessage.textContent = "";
  errorMessage.classList.remove("show");
  
  // Validation
  if (!email || !password) {
    showError("Please fill in all fields");
    return;
  }
  
  if (!isValidEmail(email)) {
    showError("Please enter a valid email address");
    return;
  }
  
  if (password.length < 6) {
    showError("Password must be at least 6 characters");
    return;
  }
  
  // If validation passes, redirect to home page
  console.log("Login attempt:", { email, password });
  window.location.href = "index.html";
}

function showError(message) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message;
  errorMessage.classList.add("show");
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
