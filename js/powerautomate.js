// PowerAutomate JavaScript - PowerAutomate page functionality

class PowerAutomateManager {
    constructor() {
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Toggle script details in library
        document.querySelectorAll('.pa-view-details').forEach(btn => {
            btn.addEventListener('click', (e) => this.toggleScriptDetails(e));
        });

        // Handle template downloads
        document.querySelectorAll('.pa-download').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleDownload(e));
        });

        // Handle FAQ toggles
        document.querySelectorAll('.pa-faq-item').forEach(item => {
            item.addEventListener('click', (e) => this.toggleFAQ(e));
        });
    }

    toggleScriptDetails(event) {
        const btn = event.target;
        const details = btn.parentElement.querySelector('.pa-script-details');
        
        if (details) {
            const isHidden = details.style.display === 'none' || details.style.display === '';
            details.style.display = isHidden ? 'block' : 'none';
            btn.textContent = isHidden ? 'Hide Details' : 'View Details';
        }
    }

    handleDownload(event) {
        const btn = event.target;
        const originalText = btn.textContent;
        
        // Show loading state
        btn.textContent = 'Downloading...';
        btn.disabled = true;
        
        // Simulate download (replace with actual download logic)
        setTimeout(() => {
            btn.textContent = 'Downloaded!';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1000);
        }, 500);
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