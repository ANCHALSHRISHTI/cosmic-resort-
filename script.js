"DOMContentLoaded", function () {
    // Show the welcome popup on page load
    document.getElementById("welcomePopup").style.display = "block";

    // Show or hide guest details based on selection
    document.getElementById("customerWith").addEventListener("change", function () {
        let additionalDetails = document.getElementById("additionalDetails");
        if (this.value === "Family" || this.value === "Friends") {
            additionalDetails.style.display = "block";
        } else {
            additionalDetails.style.display = "none";
        }
    });
});

function closePopup() {
    document.getElementById("welcomePopup").style.display = "none";
}

function displayMessage() {
    let name = document.getElementById("customerName").value.trim();
    let email = document.getElementById("customerEmail").value.trim();
    let aadharFile = document.getElementById("customerAadhar").files.length;
    let messageElement = document.getElementById("customerMessage");

    // Validate Name
    if (name === "") {
        messageElement.textContent = "❌ Please enter your name.";
        return;
    }

    // Validate Email
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        messageElement.textContent = "❌ Please enter a valid email address.";
        return;
    }

    // Validate Aadhar Upload
    if (aadharFile === 0) {
        messageElement.textContent = "❌ Please upload your Aadhaar card photo.";
        return;
    }

    // Personalized Greeting Based on First Letter of Name
    let firstLetter = name.charAt(0).toUpperCase();
    let messages = {
        'A': "Awesome choice visiting us!", 'B': "Beautiful memories await you!", 'C': "Cosmic experiences await!", 
        'D': "Delightful service guaranteed!", 'E': "Enjoy your time here!", 'F': "Fantastic stay ahead!",
        'G': "Great hospitality awaits!", 'H': "Have a wonderful time!", 'I': "Incredible moments await!",
        'J': "Joyful stay assured!", 'K': "Kind service for you!", 'L': "Luxury at its best!",
        'M': "Magical experience begins!", 'N': "New adventures await!", 'O': "Outstanding service just for you!",
        'P': "Perfect destination for you!", 'Q': "Quality hospitality here!", 'R': "Relax and enjoy!",
        'S': "Spectacular moments await!", 'T': "Terrific stay guaranteed!", 'U': "Unforgettable journey ahead!",
        'V': "Very warm welcome to you!", 'W': "Wonderful days ahead!", 'X': "eXtraordinary experience begins!",
        'Y': "Your best vacation starts now!", 'Z': "Zen-like relaxation for you!"
    };

    let personalizedMessage = messages[firstLetter] || "Welcome to Cosmic Resort!";
    messageElement.textContent = ✅ Hello ${name}, ${personalizedMessage};
    messageElement.style.color = "green";
}                                                      
