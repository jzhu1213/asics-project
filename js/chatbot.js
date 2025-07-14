// Chatbot JavaScript - Dedicated chatbot functionality

class Chatbot {
    constructor() {
        this.messagesDiv = document.getElementById('chatbot-messages');
        this.input = document.getElementById('chatbot-input');
        this.sendBtn = document.getElementById('chatbot-send');
        
        if (this.messagesDiv && this.input && this.sendBtn) {
            this.initialize();
        }
    }

    initialize() {
        this.sendBtn.addEventListener('click', () => this.handleSend());
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.handleSend();
            }
        });
    }

    appendMessage(sender, text) {
        const msg = document.createElement('div');
        msg.style.margin = '6px 0';
        msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
        this.messagesDiv.appendChild(msg);
        this.messagesDiv.scrollTop = this.messagesDiv.scrollHeight;
    }

    handleSend() {
        const userText = this.input.value.trim();
        if (!userText) return;
        
        this.appendMessage('You', userText);
        this.input.value = '';
        this.appendMessage('Bot', 'WIP');
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new Chatbot();
}); 