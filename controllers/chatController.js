var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://todo-user:test123@todo-lkgwd.mongodb.net/test?retryWrites=true&w=majority');

var chatSchema = new mongoose.Schema({
  author: String,
  text: String
});

var Chat = mongoose.model('Chat', chatSchema);


//var data = [{item: 'get milk'}, {item: 'drink some water'}, {item: 'bring back communism'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/', function(req, res) {
    Chat.find({}, function(err, data) {
      if (err) throw err;
      res.render('chat', {msgs: data});
    });
  });


  app.post('/', urlencodedParser, function(req, res) {
    //console.log(req.body);
    var newChat = Chat(req.body).save(function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  });

};
