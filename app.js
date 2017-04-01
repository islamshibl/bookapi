var express =require('express');
    mongoose =require('mongoose');


var db =mongoose.connect('mongodb://localhost/bookAPI');
var Book =require('./models/bookModel');
var app  =express();

var port =process.env.port ||3000;

//add routes

var bookRouter =express.Router();

bookRouter.route('/Books')
.get(function(req, res){
    var query ={};
    if(req.query.genre){
        query.genre =req.query.genre;
    }
    Book.find(query,function(err,books){
        if(err)
           res.status(500).send(err);
        else
            res.json(books);
    });
   // res.json(responseJson);
});

app.use('/api',bookRouter)


app.get('/',function(req,res){
res.send('Hello, welcome to my API ');
});

app.listen(port,function(){
    console.log('Gulp is Running my app on PORT '+port);
});

