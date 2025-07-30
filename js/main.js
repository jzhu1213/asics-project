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

// Search functionality
const searchData = [
    {
        title: "Home",
        path: "index.html",
        url: "index.html",
        content: "ASICS Boston IT Info Center, ServiceNow, PowerAutomate, IT Tasks, Troubleshooting"
    },
    {
        title: "ServiceNow & PowerAutomate",
        path: "SN&PA/snpa.html",
        url: "SN&PA/snpa.html",
        content: "ServiceNow overview, PowerAutomate development, library, information"
    },
    {
        title: "ServiceNow Introduction",
        path: "SN&PA/ServiceNow/introduction.html",
        url: "SN&PA/ServiceNow/introduction.html",
        content: "ServiceNow platform introduction, features, benefits"
    },
    {
        title: "ServiceNow Overview",
        path: "SN&PA/ServiceNow/overview.html",
        url: "SN&PA/ServiceNow/overview.html",
        content: "ServiceNow system overview, capabilities, usage"
    },
    {
        title: "ServiceNow Tickets & Requests",
        path: "SN&PA/ServiceNow/tickets-requests.html",
        url: "SN&PA/ServiceNow/tickets-requests.html",
        content: "ServiceNow tickets, requests, incident management"
    },
    {
        title: "PowerAutomate Library",
        path: "SN&PA/PowerAutomate/library.html",
        url: "SN&PA/PowerAutomate/library.html",
        content: "PowerAutomate flows, scripts, automation library"
    },
    {
        title: "PowerAutomate Development",
        path: "SN&PA/PowerAutomate/development.html",
        url: "SN&PA/PowerAutomate/development.html",
        content: "PowerAutomate development guide, building flows, Copilot"
    },
    {
        title: "PowerAutomate Information",
        path: "SN&PA/PowerAutomate/info.html",
        url: "SN&PA/PowerAutomate/info.html",
        content: "PowerAutomate information, benefits, examples"
    },
    {
        title: "IT Tasks",
        path: "IT-Tasks/it-tasks.html",
        url: "IT-Tasks/it-tasks.html",
        content: "IT staff responsibilities, tasks, procedures"
    },
    {
        title: "Asset Management",
        path: "IT-Tasks/asset-management.html",
        url: "IT-Tasks/asset-management.html",
        content: "Asset management, inventory tracking, equipment"
    },
    {
        title: "Imaging",
        path: "IT-Tasks/imaging.html",
        url: "IT-Tasks/imaging.html",
        content: "Computer imaging, system deployment, software installation"
    },
    {
        title: "Inventory",
        path: "IT-Tasks/inventory.html",
        url: "IT-Tasks/inventory.html",
        content: "Inventory management, tracking, reporting"
    },
    {
        title: "Software Installation",
        path: "IT-Tasks/software-installation.html",
        url: "IT-Tasks/software-installation.html",
        content: "Software systems overview, ServiceNow, SAP, Azure, Outlook, Teams, Cisco VPN"
    },
    {
        title: "TeamViewer",
        path: "IT-Tasks/teamviewer.html",
        url: "IT-Tasks/teamviewer.html",
        content: "TeamViewer remote access, setup, troubleshooting"
    },
    {
        title: "Work Logs",
        path: "IT-Tasks/work-logs.html",
        url: "IT-Tasks/work-logs.html",
        content: "Work logs, documentation, time tracking"
    },
    {
        title: "Troubleshooting",
        path: "Troubleshooting/troubleshooting.html",
        url: "Troubleshooting/troubleshooting.html",
        content: "Troubleshooting guide, IT issues, solutions"
    },
    {
        title: "Display Problems",
        path: "Troubleshooting/display-problems.html",
        url: "Troubleshooting/display-problems.html",
        content: "Display troubleshooting, monitor issues, camera problems"
    },
    {
        title: "Email & Communication",
        path: "Troubleshooting/teams-outlook.html",
        url: "Troubleshooting/teams-outlook.html",
        content: "Outlook issues, Teams problems, email communication, audio video"
    },
    {
        title: "Meeting Rooms",
        path: "Troubleshooting/meetingrooms.html",
        url: "Troubleshooting/meetingrooms.html",
        content: "Meeting room setup, AV equipment, conference rooms"
    },
    {
        title: "Monitor Stations",
        path: "Troubleshooting/monitor-stations.html",
        url: "Troubleshooting/monitor-stations.html",
        content: "Monitor station setup, display configuration, workstation"
    },
    {
        title: "Printer Setup",
        path: "Troubleshooting/printer-setup.html",
        url: "Troubleshooting/printer-setup.html",
        content: "Printer setup, configuration, troubleshooting"
    },
    {
        title: "WiFi Issues",
        path: "Troubleshooting/wifi.html",
        url: "Troubleshooting/wifi.html",
        content: "WiFi troubleshooting, network connectivity, wireless issues"
    }
];

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = this.value.trim().toLowerCase();
            
            if (query.length < 2) {
                searchResults.classList.remove('show');
                return;
            }
            
            const results = searchData.filter(item => {
                return item.title.toLowerCase().includes(query) ||
                       item.content.toLowerCase().includes(query) ||
                       item.path.toLowerCase().includes(query);
            }).slice(0, 8); // Limit to 8 results
            
            displaySearchResults(results, query);
        }, 300); // Debounce search
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('show');
        }
    });
    
    // Handle keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchResults.classList.remove('show');
            this.blur();
        }
    });
}

function displaySearchResults(results, query) {
    const searchResults = document.getElementById('search-results');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No results found</div>';
        searchResults.classList.add('show');
        return;
    }
    
    const resultsHTML = results.map(item => {
        const title = highlightMatch(item.title, query);
        const snippet = getSnippet(item.content, query);
        
        return `
            <a href="${item.url}" class="search-result-item">
                <div class="search-result-title">${title}</div>
                <div class="search-result-path">${item.path}</div>
                <div class="search-result-snippet">${snippet}</div>
            </a>
        `;
    }).join('');
    
    searchResults.innerHTML = resultsHTML;
    searchResults.classList.add('show');
}

function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function getSnippet(content, query) {
    const index = content.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) {
        return content.substring(0, 100) + '...';
    }
    
    const start = Math.max(0, index - 30);
    const end = Math.min(content.length, index + 70);
    let snippet = content.substring(start, end);
    
    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';
    
    return highlightMatch(snippet, query);
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
});

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