import { io } from 'socket.io-client';

const URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:4000';
console.log("import.meta.env.VITE_SOCKET_URL", import.meta.env.VITE_SOCKET_URL)
console.log("URL", URL)
const socket = io(URL, {
    autoConnect: false
});

export default socket;