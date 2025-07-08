//togle between two pages
const toggleSwitch = document.getElementById('mytoggleSwitch');
// Define the paths for your two pages
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('mytoggleSwitch');
    const switchContainer = document.querySelector('.switch-container');

    const mainPagePath = '/index.html';
    const experiencedPagePath = '/html/experienced.html';

    const currentPath = window.location.pathname;

    // Only show toggle on main and experienced pages
    const showToggle = currentPath.includes(mainPagePath) || currentPath.includes(experiencedPagePath);

    if (!showToggle && switchContainer) {
        // Hide the toggle if we're not on allowed pages
        switchContainer.style.display = 'none';
        return; // Exit early, no need to bind toggle behavior
    }

    // Set the toggle state based on the current page
    toggleSwitch.checked = currentPath.includes(experiencedPagePath);

    // Handle toggle switching
    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            window.location.href = experiencedPagePath;
        } else {
            window.location.href = mainPagePath;
        }
    });
});