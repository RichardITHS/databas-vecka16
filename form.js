const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true}))

app.get("/form", (req, res) => {
    res.render('form')
})

app.post("/form", (req, res) => {
    console.log(req.body.name)
    res.send(`Hej du heter ${req.body.name}`)
})

app.listen(3000, () => {
    console.log('Server startad på port 3000')
})
