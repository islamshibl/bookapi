var express =require('express');
    mongoose =require('mongoose');
    var bodyParser = require('body-parser');

var db =mongoose.connect('mongodb://localhost/bookAPI');
var Book =require('./models/bookModel');
var app  =express();

var port =process.env.port ||3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


//app.use(bodyParser.urlencoded({extended:true}));

//add routes
bookRouter =require('./Routes/bookRoutes')(Book);

app.use('/api/books',bookRouter)
//app.use('/api/authors',authorRouter)

app.get('/',function(req,res){
res.send('Hello, welcome to my API ');
});

app.listen(port,function(){
    console.log('Gulp is Running my app on PORT '+port);
});

