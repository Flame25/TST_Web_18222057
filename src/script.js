const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

document.addEventListener("DOMContentLoaded", () => {

    const loginButton = document.getElementById("login-btn");
    console.log("Login button found:", loginButton);

    // Check if a token exists in localStorage
    const token = localStorage.getItem("token");
    console.log("Token found in localStorage:", token);

    if (token) {
	// User is already logged in
	loginButton.textContent = "Logout"; // Change button text to "Logout"
	loginButton.classList.add("logout-btn"); 
	loginButton.onclick = handleLogout; // Set logout functionality

    } else {
	// User is not logged in
	loginButton.textContent = "Login"; // Keep button as "Login"
	loginButton.classList.remove("logout-btn"); 
	loginButton.onclick = handleLogin; // Set login functionality
    }
});

function handleLogin(){
    console.log("Login clicked");
    window.location.href =  "/login.html?#";
}

// Logout function
function handleLogout() {
    // Remove token from localStorage
    localStorage.removeItem("token");
    location.reload(); // Reload page to update button state
}
