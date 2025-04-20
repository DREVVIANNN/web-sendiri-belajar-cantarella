
window.onload = function() {

    setTimeout(function() {
        // Add fade-out effect to loading screen
        document.getElementById("loading").classList.add("fade-out");

        // Wait for the fade-out to complete, then show the content
        setTimeout(function() {
            document.getElementById("loading").style.display = "none"; // Hide loading screen
            document.getElementById("content").style.display = "block"; // Show main content
            document.getElementById("content").classList.add("fade-in"); // Fade in content
        }, 1000);
        
    }, 2900); // 3100ms = 3.1 seconds
};

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
