var http =require('http');
var DateTime= require("./module1")
var url =require("url");
var routing = require('./NodeRouting')

http.createServer(routing.handleRouting).listen(5000);
   // let queryString = url.parse(req.url,true).query;
    //console.log(queryString)
    //resp.writeHead(200,{'Content-Type':'text/html'});
    //resp.write("Welcom to the first node app <br />");
    //resp.write("the time is"+DateTime.myDateTime());