const express = require('express')
const port = 3214
const app = express()
var cors = require('cors')

app.use(cors())

app.post("/", (req, res) => {
    res.sendFile(__dirname+"/res.json")
})

app.listen(port, ()=>{})