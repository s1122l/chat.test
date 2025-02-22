const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public')); // Serve static files from the 'public' directory

// Handle incoming chat messages
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat-message', (message) => {
        io.emit('chat-message', message); // Broadcast message to all connected clients
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
