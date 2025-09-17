// Universal Panic Key Handler
// This script can be injected into iframes to handle panic key functionality

(function() {
    'use strict';

    let panicKey = null;
    let panicUrl = null;

    // Function to trigger panic key
    function triggerPanic() {
        try {
            // Try to redirect parent window
            if (window.parent && window.parent !== window) {
                window.parent.postMessage({
                    type: 'TRIGGER_PANIC_KEY'
                }, '*');
            } else {
                // Fallback: redirect current window
                window.location.replace(panicUrl || 'https://classroom.google.com/h');
            }
        } catch (error) {
            // Last resort: redirect current window
            window.location.replace(panicUrl || 'https://classroom.google.com/h');
        }
    }

    // Keydown event handler
    function handleKeyDown(e) {
        if (panicKey && e.key === panicKey) {
            e.preventDefault();
            e.stopPropagation();
            triggerPanic();
        }
    }

    // Setup panic key configuration
    function setupPanicKey(key, url) {
        panicKey = key;
        panicUrl = url;

        // Remove existing listener if any
        document.removeEventListener('keydown', handleKeyDown);

        // Add new listener
        if (panicKey) {
            document.addEventListener('keydown', handleKeyDown, true);
        }
    }

    // Listen for messages from parent window
    window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'SETUP_PANIC_KEY') {
            setupPanicKey(event.data.panicKey, event.data.panicUrl);
        }
    }, false);

    // Auto-setup if localStorage is available (same-origin)
    try {
        if (window.localStorage) {
            const storedPanicKey = localStorage.getItem('panickey');
            const storedPanicUrl = localStorage.getItem('panicurl');
            if (storedPanicKey) {
                setupPanicKey(storedPanicKey, storedPanicUrl);
            }
        }
    } catch (error) {
        // Cross-origin restrictions - will rely on postMessage
    }

    // Notify parent that we're ready to receive panic key config
    try {
        if (window.parent && window.parent !== window) {
            window.parent.postMessage({
                type: 'PANIC_HANDLER_READY'
            }, '*');
        }
    } catch (error) {
        // Cross-origin restrictions
    }
})();