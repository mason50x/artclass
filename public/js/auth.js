// Authentication check for Art Class
// This script checks if user is authenticated and redirects to welcome screen if not

(function() {
    // Don't run auth check on the welcome screen itself
    if (window.location.pathname.includes('welcome.html')) {
        return;
    }

    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem('artclass_authenticated') === 'true';

    if (!isAuthenticated) {
        // Redirect to welcome screen
        window.location.href = '/welcome.html';
    }
})();

// Function to logout (can be called from settings or other pages if needed)
function logout() {
    sessionStorage.removeItem('artclass_authenticated');
    window.location.href = '/welcome.html';
}