var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one': {
    title : 'Article One | Arun Kumar',
    heading :'Article One',
    date : 'Sep 5, 2016',
    content:`
    <p>
        This is my content of my first artical.This is my content of my first artical.This is my content of my first artical.This is my content of my first artical.This is my content of my first artical.This is my content of my first artical.This is my content of my first artical.This is my content of my first artical.This is my content of my first artical.This is my content of my first artical. 
    </p>`
    },
    'article-two': {
    title : 'Article Two | Arun Kumar',
    heading :'Article Two',
    date : 'Sep 12, 2016',
    content:`
    <p>
        This is my Second Article I havw Created......!!
    </p>
        
    `},
    'article-three': {
    title : 'Article Three | Arun Kumar',
    heading :'Article Three',
    date : 'Sep 20, 2016',
    content:`
    <p>
        This is my Third Article I havw Created......!!!
    </p>
        
    `},
    
}

function createTemplate(data){
    var title = data.title;
    var date = data.title;
    var heading = data.heading;
    var content = data.content;
    
var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scaled=1">
        <link href="/ui/style.css" rel="stylesheet" />
        <style>
            
        </style>
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <div>
               <h1> ${heading}</h1>
            </div>
            <div>
                ${date}
            </div>
            <div>
               ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleNmae',function(req,res){
    //articleName = article-one
    //articles[articlesName]
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
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
