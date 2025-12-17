// DARK MODE
document.getElementById("themeToggle").onclick = function () {
    document.body.classList.toggle("dark");

    this.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
};

// COST CALCULATION
function calculateTotal() {
    let price = parseInt(document.getElementById("itemSelect").value);
    let qty = parseInt(document.getElementById("quantity").value);

    document.getElementById("totalAmount").innerText =
        "Total Amount: ₹" + (price * qty);
}

// FEEDBACK VALIDATION
function validateFeedback() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("message").value.trim();

    if (name === "" || email === "" || msg === "") {
        document.getElementById("feedbackMsg").innerText =
            "❌ All fields are required!";
        document.getElementById("feedbackMsg").style.color = "red";
        return false;
    }

    document.getElementById("feedbackMsg").innerText =
        "✔ Thank you for your feedback!";
    document.getElementById("feedbackMsg").style.color = "green";

    return false; // prevent actual form submission
}
