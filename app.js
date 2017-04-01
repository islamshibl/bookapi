var express =require('express');


var app  =express();

var port =process.env.port ||3000;

app.get('/',function(req,res){
res.send('Hello, welcome to my API ');
});

app.listen(port,function(){
    console.log('Gulp is Running my app on PORT '+port);
});