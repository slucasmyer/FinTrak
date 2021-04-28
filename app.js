var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('views'));

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');
app.set('port', 8898);

app.get('/', function (req, res) {
res.sendFile(__dirname + '/index.html');
});

app.get('/blog', function (req, res) {
res.sendFile(__dirname + '/blog.html');
});

app.get('/participate', function (req, res) {
res.sendFile(__dirname + '/participate.html');
});

app.get('/downloads', function (req, res) {
res.sendFile(__dirname + '/downloads.html');
});

app.get('/homeGen', function (req, res) {
res.sendFile(__dirname + '/homeGen.js');
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on flip2.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});

