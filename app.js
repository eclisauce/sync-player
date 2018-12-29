// Require the express module
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


// Tell the web server to serve files
// from the www folder
app.use(express.static('www'));

io.on('connection', (socket) => {
    console.log('Connected');
    socket.on('update', (data) => {
        console.log(data);
        socket.broadcast.emit('update', data);
    });
    socket.on('play', () => {
        socket.broadcast.emit('play')
    })
    socket.on('pause', () => {
        socket.broadcast.emit('pause')
    })
    socket.on('slider', (data) => {
        socket.broadcast.emit('slider', data)
    })
});


// Start the web server on port 3000
http.listen(3000, () => console.log('Listening on port 3000'));