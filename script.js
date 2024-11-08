// Functions for opening and closing the login/signup modals
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function openSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}

function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function openSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}
// Check if the user is logged in
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        // Redirect to the explore page if logged in
        window.location.href = "explore.html";
    }
}

// Set login flag and redirect after successful login or signup
function handleLogin() {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "explore.html";
}

// Clear login flag on logout
function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";  // Redirect to home page on logout
}

// Run checkLoginStatus on page load
window.onload = checkLoginStatus;
// Toggle the display of the language dropdown menu
document.getElementById("language-button").addEventListener("click", function () {
    const dropdown = document.getElementById("language-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Toggle the display of the language dropdown menu
document.getElementById("language-button").addEventListener("click", function () {
    const dropdown = document.getElementById("language-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Set language function
function setLanguage(languageCode) {
    alert("Language set to: " + languageCode);
    document.getElementById("language-dropdown").style.display = "none";
}

// Close the dropdown if clicked outside
window.addEventListener("click", function (e) {
    if (!e.target.matches('#language-button')) {
        const dropdown = document.getElementById("language-dropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
});

// Handle Start Exploring button
function handleExplore() {
    window.location.href = "explore.html";
}
// After a successful login or sign-up
function handleLoginSignupSuccess() {
    // Simulating successful login or sign-up
    localStorage.setItem("isLoggedIn", "true"); // Set login flag in localStorage
    window.location.href = "explore.html"; // Redirect to explore page
}

// Call this function upon form submission in login/signup pages
// Sample data for demonstration
const sampleOrders = [
    { id: 1, date: "2024-10-15", items: ["Gift Item 1", "Gift Item 2"], total: "$45.99" },
    { id: 2, date: "2024-11-01", items: ["Gift Item 3"], total: "$29.99" },
    { id: 3, date: "2024-11-10", items: ["Gift Item 4", "Gift Item 5", "Gift Item 6"], total: "$75.50" },
];

// Function to load and display order history
function loadOrderHistory() {
    const orderList = document.getElementById("order-list");

    if (!sampleOrders || sampleOrders.length === 0) {
        orderList.innerHTML = "<p>No past orders found.</p>";
        return;
    }

    sampleOrders.forEach(order => {
        const orderElement = document.createElement("div");
        orderElement.className = "order-item";
        orderElement.innerHTML = `
            <h3>Order #${order.id}</h3>
            <p><strong>Date:</strong> ${order.date}</p>
            <p><strong>Items:</strong> ${order.items.join(", ")}</p>
            <p><strong>Total:</strong> ${order.total}</p>
        `;
        orderList.appendChild(orderElement);
    });
}

// Call loadOrderHistory if the user is on the order history page
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("order_history.html")) {
        loadOrderHistory();
    }
});
// Function to check login status and update navigation
function updateNavigationLinks() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // Get the navigation elements
    const profileLink = document.getElementById("profileLink");
    const wishlistLink = document.getElementById("wishlistLink");
    const orderHistoryLink = document.getElementById("orderHistoryLink");
    const logoutLink = document.getElementById("logoutLink");

    // Toggle visibility based on login status
    if (isLoggedIn) {
        profileLink.style.display = "inline";
        wishlistLink.style.display = "inline";
        orderHistoryLink.style.display = "inline";
        logoutLink.style.display = "inline";
    } else {
        profileLink.style.display = "none";
        wishlistLink.style.display = "none";
        orderHistoryLink.style.display = "none";
        logoutLink.style.display = "none";
    }
}

// Logout function to clear login status
function logoutUser() {
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "index.html";
}

// Check login status on page load
document.addEventListener("DOMContentLoaded", () => {
    updateNavigationLinks();
});
