document.addEventListener('DOMContentLoaded', function () {
    function showBooks() {
        // Implement showBooks functionality
        console.log('Navigating to Home');
    }

    function navigateToAdmin() {
        window.location.href = 'admin.html';
    }

    function navigateToLogin() {
        window.location.href = 'login.html';
    }

    function navigateToRegister() {
        window.location.href = 'register.html';
    }

    function navigateToGenres() {
        window.location.href = 'genres.html';
    }

    document.getElementById('homeLink').addEventListener('click', showBooks);
    document.getElementById('loginLink').addEventListener('click', navigateToLogin);
    document.getElementById('registerLink').addEventListener('click', navigateToRegister);
    document.getElementById('adminLink').addEventListener('click', navigateToAdmin);
    document.getElementById('genresLink').addEventListener('click', navigateToGenres);
});
