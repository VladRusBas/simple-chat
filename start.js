var express = require('express');
var chatController = require('./controllers/chatController');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

chatController(app);

app.listen(8080);
console.log('You are listening port 3000');
