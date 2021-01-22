const port = 3007;
const io = require('socket.io')(port);


io.on('connection', (client) => {
    console.log('connected with: ', client.id)
    client.on('subscribe', (interval) => {
        console.log('client has subscribed to timer with interval: ', interval)
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval)
    })

})


console.log('listening on port: ', port)