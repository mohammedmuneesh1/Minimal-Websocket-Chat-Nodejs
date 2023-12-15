const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");



const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + '/public'));

app.get('/chat1',(req,res)=>{
    res.sendFile(join(__dirname,'/views/chat1.html'))
})
app.get('/chat2',(req,res)=>{
    res.sendFile(join(__dirname,"/views/chat2.html"))
})



io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  
    socket.on("chat-message-1", (msg) => {
      console.log("message: " + msg);
      io.emit("from-chat1", msg);
    });
  
    socket.on("chat-message-2", (msg) => {
      console.log("message: " + msg);
      io.emit("from-chat2", msg);
    });
  });


  
server.listen(3000,(req,res)=>{
    // console.log(`http://localhost:4000`)
    console.log(`http://localhost:3000/chat1`)
    console.log(`http://localhost:3000/chat2`)
})

// module.exports = app
