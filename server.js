//Express kan hantera olika protokoll automatiskt och nu begär vi nedan in att arbeta med
//express istället för Node.js egna modul "http"
const express = require('express')

//Deklarera att vår app ska arbeta med express
const app = express()

//Nedan gör vi en enkel GET request
/* app.get('/', (request, response) => {
    response.send('Hello World!')
  })

  app.get('/one', (request, response) => {
    response.send('One')
  })

  app.get('/two', (request, response) => {
    response.send('Two')
  })

  app.get('/three', (request, response) => {
    //Sending json back
    response.send({ greeting: 'Hello World!' })
  })
 */

//Kunna visa en fil beroende på vilken adress man går till
//Då kan vi arbeta med EJS paketet för at åstadkomma detta

//Implementera ejs
app.set("view engine", "ejs")

//Skapar en get
app.get('/', (req, res) => {
    res.render('index', {name:'Richard'})
})

app.listen(3000, () => {
    console.log('Server startad på port 3000')
})
