const posts = require('../data/posts.js');

// index
function index(req,res){
    res.send('Elenco dei post');
}

// show
function show(req,res){
    res.send(`Post con id ${req.params.id}`);
}