function setupLoginForm() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const responseMessage = document.getElementById("responseMessage");

        const response = await fetch("http://localhost:5239/api/Account/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const responseData = await response.json();
        console.log(responseData)

        if (response.ok) {
            responseMessage.textContent = "Login successful!";
            responseMessage.style.color = "white";

            setTimeout(() => {
                window.location.href = "../index.html";
            }, 3000);
        } else {
            responseMessage.textContent = responseData.errors;
            responseMessage.style.color = "red";
        }
    });
}

setupLoginForm();