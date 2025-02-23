function setupSignupForm() {
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const userName = document.getElementById("userName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const response = await fetch("http://localhost:5239/api/Account/Register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userName, email, password})
        });

        const responseData = await response.json();
        console.log(responseData);

        if (response.ok) {
            document.getElementById("responseMessage").textContent = "User successfully registered!";
            responseMessage.style.color = "white";

            setTimeout(() => {
                window.location.href = "../index.html";
            }, 3000);
        } else {
            document.getElementById("responseMessage").textContent = responseData.errors.join(", ");
            responseMessage.style.color = "red";
        }
    })
}

setupSignupForm();