const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const messages = [
    {
        name: 'Admin',
        message: 'Welcome to Wassapp'    
    }
]

io.on('connection', function(socket) {
    console.log('Socket.io client connected')
    socket.broadcast.emit('init', messages)

    socket.on('newMessage', function(payload) {
        messages.push(payload)
        console.log(payload)
        socket.broadcast.emit('serverMessage', payload)
    })
})

server.listen(3000, () => {
    console.log('listening on port ' + 3000)
})