var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var ObjectId= require('mongodb').ObjectID;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('views','./app/views');
app.set('view engine','ejs');

var MongoClient = require('mongodb').MongoClient;

app.get('/delete/:id',function(req,res){
	console.log("delete"+req.params.id);
	MongoClient.connect('mongodb://localhost:27017/PatientDB', function(err, db) {
		  if (err) {
		    throw err;
		  }
		  
		  db.collection('PatientList').remove({"_id":ObjectId(req.params.id)},function(err, result) {
		    if (err) {
		      throw err;
		    }else{
		    	console.log("removed"+result);
		    res.redirect('/');
		    }
		    
		  });
		});
	

});

app.use('/save',function(req,res){

	console.log("the req",req.body.b);
	res.redirect('/');
});

app.use('/',function(req,res){
	console.log("find");
	MongoClient.connect('mongodb://localhost:27017/PatientDB', function(err, db) {
		 if (err) {
		    throw err;
		  }
		  db.collection('PatientList').find().toArray(function(err, result) {
		    if (err) {
		      throw err;
		    }
		    console.log(result);
		    res.render('index',{patients:result});
		  });
		});
	

});



app.use('/first',function(req,res){
	res.send("Hello World!");

});

app.use(express.static('./public'));
app.listen(3000);
console.log("Server starting at http://localhost:3000/");
module.exports = app;