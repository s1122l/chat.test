// Connect to Socket.io server
const socket = io();

// Handle message send
function sendMessage() {
    const message = document.getElementById("message-input").value;
    if (message.trim()) {
        socket.emit('chat-message', message);
        document.getElementById("message-input").value = ''; // Clear input field
    }
}

// Listen for incoming messages
socket.on('chat-message', (message) => {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
});
