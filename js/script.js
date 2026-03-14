document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        bodyElement.classList.add('light-mode');
        updateThemeIcon('light');
    }
    
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
});
