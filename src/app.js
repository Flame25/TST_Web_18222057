const express = require('express');
const http = require('http');
const bcrypt = require('bcryptjs');
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

const publicDir = path.join(__dirname, './public')
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(publicDir))

// Routes to serve HTML files
app.get("/", (req, res) => {
    res.sendFile(path.join(publicDir, "index.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(publicDir, "register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(publicDir, "login.html"));
});

app.get("/services", (req,res) =>{
    res.sendFile(path.join(publicDir, "services.html")); 
});

app.get("/docs", (req,res) =>{
    res.sendFile(path.join(publicDir, "docs.html")); 
});

// Listen on all interfaces for Docker
server.listen(3000, '0.0.0.0', function () {
    console.log("Server is listening on port 3000");
});
