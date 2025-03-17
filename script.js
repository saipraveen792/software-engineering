// Open and Close Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Show and Hide Sections
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Show Login & Signup Forms
function showSignupForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function showLoginForm() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// Login Form Validation
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = document.getElementById("login-email").value.trim();
    const passwordInput = document.getElementById("login-password").value.trim();
    const errorMessage = document.getElementById("login-error");

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput)) {
        errorMessage.innerText = "Invalid email format!";
        return;
    }

    fetch("login.php", {
        method: "POST",
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Login successful!");
            closeModal("login-modal");
        } else {
            errorMessage.innerText = "Incorrect email or password!";
        }
    })
    .catch(error => console.error("Error:", error));
});
