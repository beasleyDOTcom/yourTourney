import io from 'socket.io-client';
const socket = io.connect('http://localhost:3007');

function subscribe(cb){
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribe', 1000);
};

export { subscribe };