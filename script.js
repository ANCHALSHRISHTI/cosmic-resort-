document.addEventListener("DOMContentLoaded", function () {
    // Welcome Popup Handling
    const welcomePopup = document.getElementById("welcomePopup");
    setTimeout(() => {
        welcomePopup.style.display = "block";
    }, 1000);

    window.closePopup = function () {
        welcomePopup.style.display = "none";
    };

    // Customer Details Handling
    document.getElementById("customerWith").addEventListener("change", function () {
        const additionalDetails = document.getElementById("additionalDetails");
        if (this.value === "Family" || this.value === "Friends") {
            additionalDetails.style.display = "block";
        } else {
            additionalDetails.style.display = "none";
        }
    });

    document.getElementById("submitButton").addEventListener("click", function (event) {
        event.preventDefault(); // **Form ko submit hone se rokna jab tak validation pass na ho**
        
        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const email = document.getElementById("customerEmail").value.trim();
        const aadhar = document.getElementById("customerAadhar").value.trim();
        const customerWith = document.getElementById("customerWith").value;
        const messageElement = document.getElementById("customerMessage");

        // Guest Details Fields
        const guestName = document.getElementById("guestName") ? document.getElementById("guestName").value.trim() : "";
        const guestPhone = document.getElementById("guestPhone") ? document.getElementById("guestPhone").value.trim() : "";
        const guestAadhar = document.getElementById("guestAadhar") ? document.getElementById("guestAadhar").value.trim() : "";

        // Validation for Customer
        if (!name || !phone || !email || !aadhar) {
            messageElement.textContent = "Please fill in all required customer details.";
            messageElement.style.color = "red";
            return;
        }

        // Validation for Additional Guests (If selected)
        if (customerWith === "Family" || customerWith === "Friends") {
            if (!guestName || !guestPhone || !guestAadhar) {
                messageElement.textContent = "Please fill in all guest details before submitting.";
                messageElement.style.color = "red";
                return;
            }
        }

        // If everything is valid, allow form submission
        messageElement.textContent = "Form submitted successfully!";
        messageElement.style.color = "green";
        document.getElementById("myForm").submit(); // **Yeh form ko submit karega agar sab kuch valid hai**
    });
}); 
