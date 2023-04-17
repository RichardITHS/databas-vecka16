//Enklare Webbtjänst

//1. Skapar endast en respons till webbläsaren i form av text
//Vi måste använda http modul
/* const http = require('http')

//Vi ska skapa en server i node med funktionen createServer
//I denna ska det finnas en callback funktion som kan hantera våra respons, requests och göra något med detta
//request, response kanj även skrivas såhär: res, req
const app = http.createServer((request, response) => {
    response.write('Hej allihopa nu får vi svar från vår egna server')
    response.end()
})

app.listen({ port: 3000}, () => {
    console.log('Server startad på localhost:3000')
}) */

//2. Skapar en respons som "tittar efter" vilken address (path) besökaren är på och ger olika
//svar tillbaka beroende på vilken adress de valt, detta görs med en if sats eller exempelvis en switch
/* const http = require('http') */

//Vi ska skapa en server i node med funktionen createServer
//I denna ska det finnas en callback funktion som kan hantera våra respons, requests och göra något med detta
//request, response kanj även skrivas såhär: res, req
/* const app = http.createServer((request, response) => {
   if(request.url === '/'){
    response.write('Du är på hem adressen')
   }
   else {
    response.write('Annan adress')
   }
   response.end()

})

app.listen({ port: 3000}, () => {
    console.log('Server startad på localhost:3000')
}) */

//3. Vi använder request.method för att ta reda på om inkommande request är av GET, DELETE eller annan typ
//I nedan exempel så arbetar vi med Nodes egna funktionalitet "request.method"

/* const http = require('http')


const app = http.createServer((request, response) => {
    response.write(`Du gjorde ett ${request.method} anrop`)
    response.end()

 })

 app.listen({ port: 3000}, () => {
     console.log('Server startad på localhost:3000')
 }) */

//4. I nedan exempel så arbetar vi med Nodes egna funktionalitet "statusCode"
/*  const http = require('http')


 const app = http.createServer((request, response) => {
     response.statusCode = 401
     response.write('Något är fel, statuskod 401 Unauthorized')
     response.end()

  })

  app.listen({ port: 3000}, () => {
      console.log('Server startad på localhost:3000')
  }) */

//5. I nedan exempel så ska vi göra följande:
/*
  - Ge en respons i form av statuskod 200 i en header
  - Skicka ett meddelande beroende på adress som besökare är på
  - Vi ska testa att skicka med json data
  - Vi ska skicka med HTML content till vår webläsare från Node
  */

const http = require('http')

//Snyggare sätt att hantera PORT data på
const PORT = process.env.PORT || 5001

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })

    //Add Routes
    //Snyggare sätt att hantera url på
    const url = req.url
    if (url === '/profile') {
        res.write('<h1>Welcome to your profile page</h1>')
        res.end()
    } else if (url === '/shipment') {
        //Send json , dummy payload (payload=större mängd data, som ett paket)
        const payload = {
            address: {
                street: 'Richard street',
                city: 'Ankeborg'
            }
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(payload))
        res.end()
    } else {
        res.write('You have reached another page')
        res.end()
    }
})

.listen(PORT, () => {
    console.log(`Server is fine and running on port ${PORT}`)
})
