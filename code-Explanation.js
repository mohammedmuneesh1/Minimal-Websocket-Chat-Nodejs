//NOTE: THIS FILE ONLY FOR DETAILING THE WORKING OF THE IMPORTANT PART OF SOCKET. THIS FILE HAVE NO CONNECTION WITH THE WORKING OF THE PROEJCT 
const express = require("express");
const { createServer } = require("node:http");   //importing http from node module  
//extracting createServer method from the "http" module and assigning it to a variable with the same name (createServer).
const { join } = require("node:path");//the join method from the built-in "path" module in Node.js. 
const { Server } = require("socket.io");

// Create an Express application.
const app = express();

// Create an HTTP server using the Express app.
const server = createServer(app);
//The Server class is a key component of the "socket.io" library. It represents the WebSocket server that manages communication between clients and the server in real-time.
// Create a new instance of Socket.IO and attach it to the HTTP server.
const io = new Server(server);


//Dependencies and Imports: 
// Import necessary modules,
//  including Express for the web framework, 
// createServer from node:http for creating an HTTP server, join from node:path for joining file paths,
//  and Server from socket.io for creating a Socket.IO server.

















// Event handler for when a client connects to the server.
io.on("connection", (socket) => {

    // This code runs when a new user connects.
    console.log("a user connected");

    // Event handler for when a client disconnects from the server.
    // socket is an object that represents an individual client's connection to the server in a WebSocket-based application.
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });

    // Event handler for chat-message-1 event start.
    // Event handler for a custom event "chat-message-1".
    socket.on("chat-message-1", (msg) => {
      // This code runs when a client sends a "chat-message-1" event.
      console.log("message: " + msg);
  
      // Emitting a message to all connected clients with the event "from-chat1".
     // Broadcast the message to all connected clients in chat1.
      io.emit("from-chat1", msg);
    });

    // Event handler for chat-message-1 event End.

  








    // Event handler for chat-message-2 event.
    // Event handler for a custom event "chat-message-2".
    socket.on("chat-message-2", (msg) => {
      // This code runs when a client sends a "chat-message-2" event.
      console.log("message: " + msg);
       // Broadcast the message to all connected clients in chat2.
      // Emitting a message to all connected clients with the event "from-chat2".
      io.emit("from-chat2", msg);
    });
  });
  