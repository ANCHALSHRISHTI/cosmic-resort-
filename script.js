// Show Welcome Popup on Load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("welcomePopup").style.display = "block";
});

// Close Welcome Popup
function closePopup() {
    document.getElementById("welcomePopup").style.display = "none";
}

// Toggle Family/Friends Details Section
function toggleFamilyFriendDetails() {
    const visitType = document.getElementById("visitType").value;
    const familyFriendDetails = document.getElementById("familyFriendDetails");

    familyFriendDetails.style.display = (visitType === "Family" || visitType === "Friends") ? "block" : "none";
}

// Display Personalized Customer Message
function displayMessage() {
    const name = document.getElementById("customerName").value.trim();
    const message = document.getElementById("customerMessage");

    if (name) {
        const firstLetter = name.charAt(0).toUpperCase();
        message.innerHTML = `Hello <b>${name}</b>, it's great to have you here! Your name starts with <b>${firstLetter}</b>. Welcome to Cosmic Restaurant & Resort!`;
    } else {
        message.innerHTML = "Please enter your name to receive a personalized message.";
    }
}

// Handle Aadhar Photo Upload
function previewAadharPhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("aadharPreview").src = e.target.result;
            document.getElementById("aadharPreview").style.display = "block";
        };
        reader.readAsDataURL(file);
    }
}

// Responsive Image Gallery - Convert to Slider on Small Screens
function makeGalleryResponsive() {
    const gallerySections = document.querySelectorAll(".gallery");
    gallerySections.forEach(gallery => {
        if (window.innerWidth <= 768) {
            gallery.style.display = "flex";
            gallery.style.overflowX = "auto";
            gallery.style.scrollSnapType = "x mandatory";

            const images = gallery.querySelectorAll("img");
            images.forEach(img => {
                img.style.minWidth = "80%";
                img.style.margin = "5px";
                img.style.scrollSnapAlign = "center";
                img.style.borderRadius = "10px";
                img.style.transition = "transform 0.3s ease-in-out";
            });

        } else {
            gallery.style.display = "flex";
            gallery.style.flexWrap = "wrap";
            gallery.style.justifyContent = "center";

            const images = gallery.querySelectorAll("img");
            images.forEach(img => {
                img.style.minWidth = "200px";
            });
        }
    });
}

// Call functions on page load & resize
document.addEventListener("DOMContentLoaded", makeGalleryResponsive);
window.addEventListener("resize", makeGalleryResponsive);
