const express = require('express')
const router = express.Router()

//Obs:tänk på att alla dynamiska adresser ska ligga längst, de statiska adresserna
//ska ligga överst




router.get('/:id', (req, res) => {
    console.log(req.user)
    res.send(`Se användare med id ${req.params.id}`)
})

module.exports = router
