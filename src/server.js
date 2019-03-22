const http = require('http');
const url =require('url');
const fs = require('fs')
const  qs= require('querystring')
const Connection = require('mysql')

let simpleForm =
    '  <html> <head><title>node learn dev </title> </head>'+
    '<body>'+
    '<form method="post" action ="/">'+
    'first name : <input type="text" name="firstname" /><br/><br/>'+
    'last name : <input type="text" name="lastname" /><br/><br/>'+
    '<input type="submit" value="Submit" /><br/>'+
    '</form>'+
    '<div id="result"></div><br/>'+
    '<div >Show the users list <a href="/users.html" target="_blink">Users List</a> </div><br/>'+
    '</body></html>';
 
http.createServer(function(req,res){
    let queryString = url.parse(req.url,true);
  //  console.log(queryString)
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("please fill your firstname and your lastname please <br /><br />")
    res.end(simpleForm)
    
    let filename='.'+queryString.pathname;
    console.log(filename);
    fs.readFile(filename,(err,data)=>{
      if (err) {
        res.writeHead(404,{'Content-type':'text/html'});
         res.end("404 not found")
      } else{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
       res.end();
      }
     
    })
    if(req.method == "POST"){
        var body ="";
      
         req.on('data', (data) => body=body+data );
         req.on('end',()=>{
             let result = qs.parse(body);
             console.log(result["firstname"]);
             console.log(result["lastname"])
             let data=[result["firstname"],result["lastname"]];
             console.log(data)
             insertData(data);
             body ="";
            
         }) 
    }
}).listen(5000);
/*
const fs =require("fs");

fs.readFile("src/info.txt",(err,data)=>{
    if(err) return console.error(err);
    console.log(data.toString())
})*/

// events ---------------------------------------- 
/*
let event=require('events');
let eventemitter = new event.EventEmitter();
eventemitter.on('play',()=>{console.log("the player 1 is playing");eventemitter.emit("done") } )
eventemitter.addListener('play',()=>console.log("the player 2 is playing") )
eventemitter.on('done',()=>console.log("done") )

eventemitter.emit("play")
*/
//-Connect to db-------------------------------------
/*
let configuration ={
    userName :'root',password:'',server:'http://localhost/phpmyadmin/db_structure.php?db=&db=test'
}*/

let myConnection =Connection.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
  });

myConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    
  });

function insertData(data){
  let sql = "insert into user(firstname,lastname) values ? ";
  myConnection.query(sql,[[data]],function(err,result){
    if(err) throw err;
    console.log("1 row inserted")
    
  });
  
}
  
