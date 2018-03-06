
var exp = require('express');
var app = exp();

app.get('/',function(request,response){
response.send('Hi this is my first nodejs server');
});

app.get('/home',function(req,res){
res.send('Hi this is my home page')
});
app.get('/about',function(req,res){
    res.send('Hi this is about my page')
    });
 app.get("/download",function(req,res){
        res.download("./app.js",function(){console.log('download is over')}
    )})
           
        
       

           
var port = process.env.npm_package_config_port;
app.listen(port,function(){
console.log('HTTP opened up on the port number ' + port);
});
// var exp = require("express");

// var app = exp();


// app.get("/", function(req, res){
// 	res.send("<html><body><h1>You called root path</h1></body></html>");
// });

// app.get("/data", function(req, res){
// 	res.send("You called data");
// });

// app.get("/download", function(req, res){
// 	res.download("./package.json", function(){
// 		console.log("download is over");
// 	});
// });

// var port =  8989;

// app.listen(port, function(){
// 	console.log("Server is ON at " + port);
// });
