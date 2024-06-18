const express = require('express') 

import serverless from "serverless-http";

const app = express() 

const port = 5000

app.get("/", (req, res) => {
    res.send("Hello world.") 
})

app.listen(port, console.log("Server listening to port 5000 ..."))

export const handler = serverless(app);

