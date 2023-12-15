const express = require("express")
const app = express(); 
const {createServer} = require("node:http");   
const server = createServer(app);
const { join } = require("node:path");
const { Server } = require("socket.io");
const io = new Server(server);