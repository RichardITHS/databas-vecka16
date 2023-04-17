//Enklare Webbtjänst

//Vi måste använda http modul
const http = require('http')

//Vi ska skapa en server i node med funktionen createServer
//I denna ska det finnas en callback funktion som kan hantera våra respons, requests och göra något med detta
//request, response kanj även skrivas såhär: res, req
const app = http.createServer((request, response) => {
    response.write('Hej allihopa nu får vi svar från vår egna server')
    response.end()
})

app.listen({ port: 3000}, () => {
    console.log('Server startad på localhost:3000')
})
