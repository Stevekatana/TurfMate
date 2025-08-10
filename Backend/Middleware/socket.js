const { Server } = require("socket.io");
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

        // socket.on("ownerConnect", (ownerId) => {
        //     if (!ownerId) {
        //         console.warn(`ownerConnect event received without a valid ownerId from socket: ${socket.id}`);
        //         return;
        //     }
        //     socket.join('ownerRoom');
        //     // socket.ownerId = ownerId; // Attach ownerId to socket instance
        //     console.log(`Owner joined room with ID: ${ownerId}`);
        // });

        socket.on('connectOwner', (ownerID)=>{
            socket.join(ownerID)
            console.log(`Welcome to my room ${ownerID}`)
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
