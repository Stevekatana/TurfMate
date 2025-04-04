const { Server } = require("socket.io");
const ownerAuth = require('../Middleware/ownerAuthentication')

let io;

const initializeSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: ['http://localhost:5173','http://localhost:5174'],
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);

        // Turf owner joins a specific room
        socket.on("owner-room", (room)=>{
            socket.join(room)
            console.log(`owner ${socket.id} joined ${room}`)
        })

        // Handle disconnect
        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });

    return io;
};

const getIO = () => {
    if (!io) {
        throw new Error("Socket.io not initialized!");
    }
    return io;
};

module.exports = { initializeSocket, getIO };
