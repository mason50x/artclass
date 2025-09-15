// Authentication check for Art Class
// This script checks if user is authenticated and redirects to auth screen if not

(function() {
    // Don't run auth check on the auth screen itself
    if (window.location.pathname.includes('auth.html')) {
        return;
    }

    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem('artclass_authenticated') === 'true';

    if (!isAuthenticated) {
        // Redirect to auth screen
        window.location.href = '/auth.html';
    }
})();

// Function to logout (can be called from settings or other pages if needed)
function logout() {
    sessionStorage.removeItem('artclass_authenticated');
    window.location.href = '/auth.html';
}