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

    // ✅ **Submit Button Event Listener Added**
    document.getElementById("submitButton").addEventListener("click", function (event) {
        event.preventDefault(); // **Form ko submit hone se rokna jab tak validation pass na ho**
        
        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const email = document.getElementById("customerEmail").value.trim();
        const aadhar = document.getElementById("customerAadhar").files.length; // ✅ Fixed
        
        const customerWith = document.getElementById("customerWith").value;
        const messageElement = document.getElementById("customerMessage");

        // Guest Details Fields
        const guestName = document.getElementById("guestName") ? document.getElementById("guestName").value.trim() : "";
        const guestPhone = document.getElementById("guestPhone") ? document.getElementById("guestPhone").value.trim() : "";
        const guestAadhar = document.getElementById("guestAadhar") ? document.getElementById("guestAadhar").files.length : 0; // ✅ Fixed

        // **Validation for Customer**
        if (!name || !phone || !email || aadhar === 0) {
            messageElement.textContent = "Please fill in all required customer details.";
            messageElement.style.color = "red";
            return;
        }

        // **Validation for Additional Guests (If selected)**
        if (customerWith === "Family" || customerWith === "Friends") {
            if (!guestName || !guestPhone || guestAadhar === 0) {
                messageElement.textContent = "Please fill in all guest details before submitting.";
                messageElement.style.color = "red";
                return;
            }
        }

        // ✅ **Form Submitted Successfully**
        messageElement.textContent = "Form submitted successfully!";
        messageElement.style.color = "green";

        // **Form Submit Code**
        document.getElementById("myForm").submit(); 
    });
// ✅ **Personalized Message Based on First Letter of Name**
    document.getElementById("customerName").addEventListener("input", function () {
        const name = this.value.trim();
        const messageElement = document.getElementById("customerMessage");

        if (name.length > 0) {
            const firstLetter = name.charAt(0).toUpperCase();
            let message = "";

            switch (firstLetter) {
                case 'A': message = "Amazing choice to visit us!"; break;
                case 'B': message = "Beautiful name! Welcome to Cosmic Resort!"; break;
                case 'C': message = "Charming guests like you make our resort shine!"; break;
                case 'D': message = "Delightful choice, enjoy your stay!"; break;
                case 'E': message = "Elegant name for an elegant resort visit!"; break;
                case 'F': message = "Fabulous guests are always welcome!"; break;
                case 'G': message = "Great to have you here!"; break;
                case 'H': message = "Heartwarming welcome to you!"; break;
                case 'I': message = "Incredible choice for your stay!"; break;
                case 'J': message = "Joyful moments await you at Cosmic Resort!"; break;
                case 'K': message = "Kind and wonderful guests like you make our day!"; break;
                case 'L': message = "Lovely name! Get ready for an amazing experience!"; break;
                case 'M': message = "Magical stay awaits you!"; break;
                case 'N': message = "Nice to meet you! Have a great time!"; break;
                case 'O': message = "Outstanding choice for a retreat!"; break;
                case 'P': message = "Perfect name for a perfect visit!"; break;
                case 'Q': message = "Quality time starts here!"; break;
                case 'R': message = "Relax, refresh, and rejuvenate with us!"; break;
                case 'S': message = "Splendid choice! You’ll love our resort!"; break;
                case 'T': message = "Terrific guests like you make Cosmic special!"; break;
                case 'U': message = "Unforgettable experiences await you!"; break;
                case 'V': message = "Vibrant moments are waiting for you!"; break;
                case 'W': message = "Welcome! We are happy to serve you!"; break;
                case 'X': message = "X-traordinary guests deserve an X-citing stay!"; break;
                case 'Y': message = "You are going to have a fantastic time!"; break;
                case 'Z': message = "Zestful energy and positive vibes at Cosmic Resort!"; break;
                default: message = "Welcome to Cosmic Resort!"; break;
            }

            messageElement.textContent = message;
            messageElement.style.color = "blue";
        } else {
            messageElement.textContent = ""; // Clear message if name field is empty
        }
    });
});
