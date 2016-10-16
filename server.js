var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artical-one',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'artical-one.html'));
});

app.get('/artical-two',function(req,res){
    res.send('aritical two arun is requested');
});

app.get('/artical-three',function(req,res){
    res.send('aritical three arun is requested');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/1293.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1293.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
