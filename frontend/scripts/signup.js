import AuthService from "../services/AuthService.js";

function setupSignupForm() {
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const userName = document.getElementById("userName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const responseMessage = document.getElementById("responseMessage");

        try {
            await AuthService.register({userName, email, password})
            responseMessage.textContent = "User successfully registered!";
            responseMessage.style.color = "white";

            setTimeout(() => {
                window.location.href = "../index.html";
            }, 3000);
        } catch (error) {
            responseMessage.textContent = error.message;
            responseMessage.style.color = "red";
        }
    });
}

setupSignupForm();