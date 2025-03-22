let currentTab = 0; // Track the current tab index

// Function to show a specific tab
function showTab(index) {
    document.querySelectorAll(".tab").forEach((tab, i) => {
        tab.classList.toggle("active", i === index);
    });
    currentTab = index;
}

// Function to validate Profile tab
function validateProfile() {
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let email = document.getElementById("email").value.trim();
    let valid = true;

    // Name validation
    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Age validation
    if (!age || isNaN(age) || age < 18) {
        document.getElementById("ageError").innerText = "Age must be a number and at least 18.";
        valid = false;
    } else {
        document.getElementById("ageError").innerText = "";
    }

    // Email validation
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        document.getElementById("emailError").innerText = "Enter a valid email address.";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (valid) {
        // Store valid data in localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        localStorage.setItem("email", email);
        showTab(1); // Move to the next tab
    }
}

// Function to validate Interests tab
function validateInterests() {
    let selectedInterests = Array.from(document.querySelectorAll(".interest:checked")).map(i => i.value);
    
    if (selectedInterests.length === 0) {
        document.getElementById("interestsError").innerText = "Select at least one interest.";
    } else {
        document.getElementById("interestsError").innerText = "";
        localStorage.setItem("interests", selectedInterests.join(", "));
        showTab(2); // Move to the next tab
    }
}

// Function to handle form submission
function submitForm() {
    let notifications = document.getElementById("notifications").checked ? "Enabled" : "Disabled";
    localStorage.setItem("notifications", notifications);

    // Populate summary
    document.getElementById("summaryName").innerText = localStorage.getItem("name");
    document.getElementById("summaryAge").innerText = localStorage.getItem("age");
    document.getElementById("summaryEmail").innerText = localStorage.getItem("email");
    document.getElementById("summaryInterests").innerText = localStorage.getItem("interests");
    document.getElementById("summaryNotifications").innerText = notifications;

    showTab(3); // Show summary tab
}
