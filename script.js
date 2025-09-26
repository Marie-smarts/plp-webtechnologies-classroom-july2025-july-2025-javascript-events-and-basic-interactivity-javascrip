// ----------------------------
// Part 1: Event Handling
// ----------------------------
const alertBtn = document.getElementById("alertBtn");
const message = document.getElementById("message");

alertBtn.addEventListener("click", () => {
    message.textContent = "🎉 Button was clicked!";
});

// ----------------------------
// Part 2: Interactive Elements
// ----------------------------

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("increment").addEventListener("click", () => {
    count++;
    counterValue.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
    count--;
    counterValue.textContent = count;
});

// Collapsible FAQ
const faqToggle = document.querySelector(".faq-toggle");
const faqContent = document.querySelector(".faq-content");
faqToggle.addEventListener("click", () => {
    faqContent.style.display =
        faqContent.style.display === "block" ? "none" : "block";
});

// ----------------------------
// Part 3: Form Validation
// ----------------------------
const form = document.getElementById("signupForm");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting
    let valid = true;

    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email validation (simple regex)
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Invalid email address";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Password validation (min 6 chars)
    const password = document.getElementById("password").value.trim();
    if (password.length < 6) {
        document.getElementById("passwordError").textContent =
            "Password must be at least 6 characters";
        valid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Success message
    if (valid) {
        document.getElementById("formSuccess").textContent =
            "✅ Form submitted successfully!";
        form.reset();
    }
});
