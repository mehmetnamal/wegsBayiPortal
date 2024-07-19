document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('modeToggle');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const sidebar = document.querySelector('.wegs-sidebar');
    const cardHeaders = document.querySelectorAll('.card-header');
    const cardBodies = document.querySelectorAll('.card-body');
    const userInfoButton = document.getElementById('userInfoButton');
    const userInfoDropdown = document.getElementById('userInfoDropdown');

    // Check for saved user preference, if any, on load of the website
    const currentMode = localStorage.getItem('mode') || 'day';
    if (currentMode === 'night') {
        body.classList.add('night-mode');
        navbar.classList.add('night-mode');
        sidebar.classList.add('night-mode');
        cardHeaders.forEach(header => header.classList.add('night-mode'));
        cardBodies.forEach(body => body.classList.add('night-mode'));
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        userInfoDropdown.classList.add('night-mode');
    }

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('night-mode');
        navbar.classList.toggle('night-mode');
        sidebar.classList.toggle('night-mode');
        cardHeaders.forEach(header => header.classList.toggle('night-mode'));
        cardBodies.forEach(body => body.classList.toggle('night-mode'));

        // Save the current mode to localStorage
        if (body.classList.contains('night-mode')) {
            localStorage.setItem('mode', 'night');
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
            userInfoDropdown.classList.add('night-mode');
        } else {
            localStorage.setItem('mode', 'day');
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
            userInfoDropdown.classList.remove('night-mode');
        }
    });

    userInfoButton.addEventListener('click', function () {
        // Toggle the visibility of the user info dropdown
        if (userInfoDropdown.classList.contains('show')) {
            userInfoDropdown.classList.remove('show');
        } else {
            userInfoDropdown.classList.add('show');
        }
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', (e) => {
        if (!userInfoButton.contains(e.target) && !userInfoDropdown.contains(e.target)) {
            userInfoDropdown.classList.remove('show');
        }
    });
});
