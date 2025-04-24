// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const app = require("./src/index"); // ← modular app logic here

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Socket.IO setup
io.on("connection", (socket) => {
    console.log("Client connected");
});

server.listen(process.env.PORT || 3001, () =>
    console.log(`Backend running on port ${process.env.PORT || 3001}`)
);