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

    window.displayMessage = function () {
        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const email = document.getElementById("customerEmail").value.trim();
        const aadhar = document.getElementById("customerAadhar").value.trim();
        const customerWith = document.getElementById("customerWith").value;
        const messageElement = document.getElementById("customerMessage");

        let additionalGuestName = "";
        let additionalGuestPhone = "";

        // If "Family" or "Friends" is selected, get additional guest details
        if (customerWith === "Family" || customerWith === "Friends") {
            additionalGuestName = document.getElementById("additionalGuestName").value.trim();
            additionalGuestPhone = document.getElementById("additionalGuestPhone").value.trim();

            // Ensure additional guest details are filled
            if (!additionalGuestName || !additionalGuestPhone) {
                messageElement.textContent = "Please enter the additional guest details.";
                messageElement.style.color = "red";
                return;
            }

            // Validate additional guest phone number (10-digit format)
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(additionalGuestPhone)) {
                messageElement.textContent = "Please enter a valid 10-digit phone number for the additional guest.";
                messageElement.style.color = "red";
                return;
            }
        }

        // Validation for main customer details
        if (!name || !phone || !email || !aadhar) {
            messageElement.textContent = "Please fill in all required fields.";
            messageElement.style.color = "red";
            return;
        }

        // Phone number validation (basic check for 10 digits)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            messageElement.textContent = "Please enter a valid 10-digit phone number.";
            messageElement.style.color = "red";
            return;
        }

        let firstLetter = name.charAt(0).toUpperCase();
        let messages = {
            'A': "Awesome choice visiting us!", 'B': "Best hospitality awaits you!", 'C': "Cosmic vibes are here!",
            'D': "Delightful experiences await you!", 'E': "Enjoy your stay to the fullest!", 'F': "Fantastic moments await!",
            'G': "Great choice! Relax and unwind.", 'H': "Have a wonderful time with us!", 'I': "Incredible memories await!",
            'J': "Joyful moments guaranteed!", 'K': "Kind hospitality just for you!", 'L': "Luxury and comfort combined!",
            'M': "Magical experiences await you!", 'N': "New adventures at Cosmic Resort!", 'O': "Outstanding service for you!",
            'P': "Perfect getaway for relaxation!", 'Q': "Quality service and comfort!", 'R': "Relax and rejuvenate with us!",
            'S': "Spectacular moments await!", 'T': "Tranquility and peace at Cosmic Resort!", 'U': "Unforgettable memories await!",
            'V': "Vacation like never before!", 'W': "Wonderful experiences ahead!", 'X': "Xtraordinary comfort awaits!",
            'Y': "Your perfect holiday spot!", 'Z': "Zen-like relaxation and fun!"
        };

        let message = "Welcome, " + name + "! " + (messages[firstLetter] || "Enjoy your stay at Cosmic Resort!");

        if (customerWith === "Family" || customerWith === "Friends") {
            message += ` You are accompanied by ${additionalGuestName}.`;
        }

        messageElement.textContent = message;
        messageElement.style.color = "green";
    };
});
