/* ================= DARK MODE ================= */
document.addEventListener("DOMContentLoaded", () => {

    const themeBtn = document.getElementById("themeToggle");

    themeBtn.onclick = function () {
        document.body.classList.toggle("dark");
        this.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
    };

});


/* ================= COST CALCULATOR ================= */
function calculateTotal() {
    let total = 0;

    const rows = document.querySelectorAll(".bill-row");

    rows.forEach(row => {
        const checkbox = row.querySelector("input[type='checkbox']");
        const qtyInput = row.querySelector("input[type='number']");

        const price = parseInt(checkbox.dataset.price); // FIX
        const qty = parseInt(qtyInput.value);           // FIX

        if (checkbox.checked) {
            total += price * qty;
        }
    });

    document.getElementById("totalAmount").innerText =
        "Total Amount: ₹" + total;
}




/* ================= FEEDBACK VALIDATION ================= */
function validateFeedback() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let feedbackMsg = document.getElementById("feedbackMsg");

    if (name === "" || email === "" || message === "") {
        feedbackMsg.innerText = "❌ All fields are required!";
        feedbackMsg.style.color = "red";
        return false;
    }

    // Create feedback text
    let text = "📝 Sweet Bliss Bakery - Feedback\n";
    text += "---------------------------------\n";
    text += `Name: ${name}\n`;
    text += `Email: ${email}\n`;
    text += `Message:\n${message}\n`;
    text += "---------------------------------\n";
    text += `Date: ${new Date().toLocaleString()}\n`;

    // Create Notepad file
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "SweetBliss_Feedback.txt";

    link.click();
    URL.revokeObjectURL(link.href);

    // Success message
    feedbackMsg.innerText = "✔ Feedback saved successfully!";
    feedbackMsg.style.color = "green";

    // Clear form
    document.getElementById("feedbackForm").reset();

    return false; // prevent page refresh
}
