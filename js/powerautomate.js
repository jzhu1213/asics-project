// PowerAutomate JavaScript - PowerAutomate page functionality

class PowerAutomateManager {
    constructor() {
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Remove pa-view-details and pa-script-meta logic
        // Handle FAQ toggles
        document.querySelectorAll('.pa-faq-item').forEach(item => {
            item.addEventListener('click', (e) => this.toggleFAQ(e));
        });
    }

    toggleFAQ(event) {
        const item = event.currentTarget;
        const answer = item.querySelector('p');
        
        if (answer) {
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        }
    }
}

// Initialize PowerAutomate functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new PowerAutomateManager();
}); 