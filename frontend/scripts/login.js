import AuthService from "../services/AuthService.js";

function setupLoginForm() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const responseMessage = document.getElementById("responseMessage");

        try {
            await AuthService.login({email, password});
            responseMessage.textContent = "Login successful!";
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

setupLoginForm();