var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/gleaming-dinosaur', function(request, response){
    response.send('The gleaming-dinosaur wants to be Pusheen!');
});

app.listen(process.env.PORT || 4000);