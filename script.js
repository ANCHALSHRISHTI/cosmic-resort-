
document.addEventListener("DOMContentLoaded", function () {
    const welcomePopup = document.getElementById("welcomePopup");
    setTimeout(() => {
        welcomePopup.style.display = "block";
    }, 1000);

    window.closePopup = function () {
        welcomePopup.style.display = "none";
    };

    document.getElementById("customerWith").addEventListener("change", function () {
        const additionalDetails = document.getElementById("additionalDetails");
        if (this.value === "Family" || this.value === "Friends") {
            additionalDetails.style.display = "block";
        } else {
            additionalDetails.style.display = "none";
        }
    });

    document.getElementById("submitButton").addEventListener("click", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const email = document.getElementById("customerEmail").value.trim();
        const aadhar = document.getElementById("customerAadhar").value;
        const customerWith = document.getElementById("customerWith").value;
        const messageElement = document.getElementById("customerMessage");

        const guestName = document.getElementById("guestName").value.trim();
        const guestPhone = document.getElementById("guestPhone").value.trim();
        const guestAadhar = document.getElementById("guestAadhar").value;

        if (!name || !phone || !email || !aadhar) {
            messageElement.textContent = "Please fill in all required customer details.";
            messageElement.style.color = "red";
            return;
        }

        if ((customerWith === "Family" || customerWith === "Friends") && (!guestName || !guestPhone || !guestAadhar)) {
            messageElement.textContent = "Please fill in all guest details before submitting.";
            messageElement.style.color = "red";
            return;
        }

        messageElement.textContent = "Form submitted successfully!";
        messageElement.style.color = "green";
    });
});
