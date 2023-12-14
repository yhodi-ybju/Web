function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

// Function to toggle visibility of forms
function toggleForms(showLogin) {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    if (showLogin) {
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    } else {
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        toggleForms(false); // Show create account form
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        toggleForms(true); // Show login form
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        // Perform your AJAX/Fetch login
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

// Check if we are on the authorization page
if (window.location.pathname.endsWith('authorization.html')) {
    const navCreateAccount = document.getElementById('navCreateAccount');
    const navLogin = document.getElementById('navLogin');

    if (navCreateAccount && navLogin) {
        navCreateAccount.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForms(false); // Show create account form
        });

        navLogin.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForms(true); // Show login form
        });
    }
}
