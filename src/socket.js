import { io } from 'socket.io-client';

const URL = process.env.SOCKETURL || 'http://localhost:4000';

const socket = io(URL, {
    autoConnect: false
});

export default socket;