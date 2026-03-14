// Load navbar and footer components
function loadComponents() {
    // Load navbar
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            // Re-initialize theme toggle after navbar loads
            initializeThemeToggle();
        })
        .catch(error => console.error('Error loading navbar:', error));

    // Load footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            if (bodyElement.classList.contains('light-mode')) {
                bodyElement.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
                updateThemeIcon('dark');
            } else {
                bodyElement.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
                updateThemeIcon('light');
            }
        });
    }
    
    function updateThemeIcon(theme) {
        if (themeToggle) {
            if (theme === 'light') {
                themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
            } else {
                themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
            }
        }
    }
}

// Load components when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadComponents);
} else {
    loadComponents();
}
