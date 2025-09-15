// Authentication check for Art Class
// This script checks if user is authenticated and redirects to lockscreen if not

(function() {
    // Don't run auth check on the lockscreen itself
    if (window.location.pathname.includes('lockscreen.html')) {
        return;
    }

    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem('artclass_authenticated') === 'true';

    if (!isAuthenticated) {
        // Redirect to lockscreen
        window.location.href = '/lockscreen.html';
    }
})();

// Function to logout (can be called from settings or other pages if needed)
function logout() {
    sessionStorage.removeItem('artclass_authenticated');
    window.location.href = '/lockscreen.html';
}