// Require the express module
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


// Tell the web server to serve files
// from the www folder
app.use(express.static('www'));

io.on('connection', function (socket) {
    socket.on('playEvent', function (msg) {
        console.log(msg);
    })
    console.log('a user connected');

});


// Start the web server on port 3000
http.listen(3000, () => console.log('Listening on port 3000'));