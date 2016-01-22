//var hello = require('./Hello');
//hello.sayHello();
var connect = require('connect');
var app = connect();


var helloWorld = function(req,res,next){
res.setHeader('Content-type','text/plain');
res.end('yeahhhhh');
};
var byeWorld = function(req,res,next){
res.setHeader('Content-type','text/plain');
res.end('byeeeeeeee');
};
app.use('/hello',helloWorld);
app.use('/bye',byeWorld);
app.listen(3000);
console.log('server is up and running at http://localhost:3000/');
\