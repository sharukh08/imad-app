var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title: "Article one | Mohd Sharukh",
    heading: "ARTICLE ONE",
    date: "25 Feb 2018",
    content: `<p>This date needs to be rememberedThis date needs to be rememberedThis date needs to be rememberedThis date needs to be remembered
                This date needs to be rememberedThis date needs to be rememberedThis date needs to be rememberedThis date needs to be remembered
                This date needs to be rememberedThis date needs to be rememberedThis date needs to be rememberedThis date needs to be remembered
                This date needs to be rememberedThis date needs to be rememberedThis date needs to be rememberedThis date needs to be remembered
    </p>`
    
},
    'article-two': {
    title: "Article two | Mohd Sharukh",
    heading: "ARTICLE TWO",
    date: "28 Feb 2018",
    content: `<p>This date needs to be rememberedThis date needs to be rememberedThis date needs to be rememberedThis date needs to be remembered
                
    </p>`
    
},
    'article-three': {
    title: "Article three | Mohd Sharukh",
    heading: "ARTICLE THREE",
    date: "28 Mar 2018",
    content: `<p>This date needs to be rememberedThis date needs to be rememberedThis date needs to be rememberedThis date needs to be remembered
            </p>`}
};

function createTemplate(data){
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;
    
    var htmlTemplate = `
<html>
<head>
    <title>${title}</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="/ui/style.css" rel="stylesheet" />

</head>
<body>
    <div class="Inform">
    <div><a href='/'>Home</a></div>
    <hr/>
    ${heading}
    <div>
    <h3><marquee>${date}</marquee></h3>
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
app.get('/:articleName', function(req, res){
     var articleName=req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/s1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 's1.jpg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
