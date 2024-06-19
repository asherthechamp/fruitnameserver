const express = require('express') 
const path = require('path')

const serverless = require("serverless-http");

const app = express() 

const port = 5000

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/data.json")) 
})

app.listen(port, console.log("Server listening to port 5000 ..."))

module.exports = {
    handler : serverless(app)
} 

