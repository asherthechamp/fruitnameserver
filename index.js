const express = require('express') 
const path = require('path')

const serverless = require("serverless-http");

const app = express() 

const router = express.Router()

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/data.json")) 
})

app.use(router)
module.exports = {
    handler : serverless(app)
} 

