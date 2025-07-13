// Quiz functionality
function checkAnswer(button, isCorrect) {
  const result = document.getElementById("quiz-result");
  const allButtons = button.parentElement.querySelectorAll('button');
  
  // Disable all buttons
  allButtons.forEach(btn => {
    btn.disabled = true;
  });
  
  // Show result
  if (isCorrect) {
    result.innerHTML = `<div class="quiz-feedback correct">✅ Correct! Well done!</div>`;
  } else {
    result.innerHTML = `<div class="quiz-feedback incorrect">❌ Incorrect. Try again!</div>`;
  }
  
  // Reset after 2 seconds
  setTimeout(() => {
    allButtons.forEach(btn => {
      btn.disabled = false;
    });
    result.innerHTML = '';
  }, 2000);
}

// API fetch simulation
function fetchIncidents() {
  const incidentList = document.getElementById("incident-list");
  const button = event.target;
  const originalText = button.textContent;
  
  // Show loading state
  button.textContent = 'Loading...';
  button.disabled = true;
  
  // Clear previous content
  incidentList.innerHTML = "";
  
  // Simulate API call
  setTimeout(() => {
    const mockData = [
      { 
        number: "INC001", 
        short_description: "Email outage affecting multiple users",
        priority: "High",
        status: "In Progress"
      },
      { 
        number: "INC002", 
        short_description: "VPN access issue for remote workers",
        priority: "Medium", 
        status: "Open"
      },
      { 
        number: "INC003", 
        short_description: "Printer connectivity problems in Building A",
        priority: "Low",
        status: "Resolved"
      }
    ];
    
    // Create incident cards
    mockData.forEach((incident) => {
      const card = document.createElement("div");
      card.className = "incident-card";
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <h3 style="margin: 0; color: #0046be; font-size: 1.1rem;">${incident.number}</h3>
          <span class="incident-priority ${incident.priority.toLowerCase()}">${incident.priority}</span>
        </div>
        <p style="margin: 0.5rem 0; color: #374151;">${incident.short_description}</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="incident-status">${incident.status}</span>
          <button onclick="viewIncident('${incident.number}')" style="
            background: #0046be;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 0.8rem;
            cursor: pointer;
          ">View Details</button>
        </div>
      `;
      
      incidentList.appendChild(card);
    });
    
    // Reset button
    button.textContent = originalText;
    button.disabled = false;
    
  }, 1000);
}

// Incident viewer
function viewIncident(incidentNumber) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <h2 style="margin-top: 0; color: #0046be;">${incidentNumber} Details</h2>
      <p>This would show detailed information about the incident, including:</p>
      <ul>
        <li>Full description</li>
        <li>Assigned to</li>
        <li>Created date</li>
        <li>Resolution notes</li>
      </ul>
      <button onclick="this.closest('.modal').remove()" style="
        background: #0046be;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 1rem;
      ">Close</button>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.remove();
    }
  }
});
  