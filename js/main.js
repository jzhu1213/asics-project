// Main JavaScript - Global functions and utilities

// Utility function to show loading states
function showLoading(element) {
    if (element) {
        element.textContent = 'Loading...';
        element.disabled = true;
    }
}

// Utility function to hide loading states
function hideLoading(element, originalText) {
    if (element) {
        element.textContent = originalText;
        element.disabled = false;
    }
}

// Utility function to handle API errors
function handleApiError(error, userMessage = 'An error occurred') {
    console.error('API Error:', error);
    return userMessage;
}

// Utility function to validate form inputs
function validateInput(input, minLength = 1) {
    return input && input.trim().length >= minLength;
}

// Global event listeners for common interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading states to buttons
    document.querySelectorAll('button[data-loading]').forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            showLoading(this);
            
            // Simulate async operation (replace with actual logic)
            setTimeout(() => {
                hideLoading(this, originalText);
            }, 1000);
        });
    });
}); 