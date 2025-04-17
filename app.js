//  importo express
const express = require('express');

// inizializzo express nella variabile app
const app = express();

// inizializzo la porta
const port = 3000

// definisco rotta base
app.get('/', (req, res)=>{
    res.send()
})

// metto in ascolto il server
app.listen(port, () =>{
    console.log(`server in ascolto alla porta ${port}`)
})