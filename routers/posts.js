// importo express
const express = require('express');

// importo la classe router
const router = express.Router();


// index
router.get('/', (req, res) => {
    res.send('Lista dei post')
})

// show
router.get('/:id', (req,res) =>{
    res.send(`Dettaglio del post: ${req.params.id}`)
})

// store
router.post('/', (req,res) =>{
    res.send('inserimento nuovo post')
})