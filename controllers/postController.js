const posts = require('../data/posts.js');

// index
function index(req,res){
    res.send('Elenco dei post');
}

// show
function show(req,res){
    res.send(`Post con id ${req.params.id}`);
}

// store
function store(req,res){
    res.send('inserimento di un nuovo post');
}

// update
function update(req,res){
    res.send(`Modifica totale del post con id ${req.params.id} `)
}

// modify
function modify(req,res){
    res.send(`Modifica parziale del post con id ${req.params.id}`)
}

// destroy
function destroy(req,res){
    res.send(`Cancellazione del post con id ${req.params.id}`)
}