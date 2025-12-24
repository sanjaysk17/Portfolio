// Simple script to show a welcome message in the console
console.log("Welcome to Sanjaykumar's Portfolio!");

// Simple button click alert for the contact area (Optional beginner touch)
// If someone clicks a link, we can just log it or add a small effect
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Just a simple way to confirm the click is working
        console.log("Navigating to: " + this.getAttribute('href'));
    });
});