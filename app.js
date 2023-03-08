const express = require("express")
const { get } = require("http")
const app = express()
const path = require("path")
app.use('/public', express.static(path.join(__dirname, 'public')))



app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"))
})

app.listen(3108, () => {
    console.log("corriendo en el puero ", 3108)
})