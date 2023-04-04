// js/login.js
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginBox = document.querySelector(".loginBox");
    const mainBox = document.querySelector(".mainBox");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const inputName = document.getElementById("name");
        if (inputName.value.trim() !== "") {
            loginBox.classList.add("hidden");
            mainBox.classList.remove("hidden");
        }
    });
});
 