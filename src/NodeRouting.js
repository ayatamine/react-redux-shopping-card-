var fs = require('fs') 
var url =  require('url');


function renderHTML(path,response){
   fs.readFile(path,null,(err,data)=>{
       if(err) {
           response.write(404,{'Content-type':'text/html'});
           response.write('file not found');
           response.end();
       }
       response.write(data);
       response.end();
   })
}
module.exports ={
    handleRouting:(request,response)=>{
        
        let path = url.parse(request.url,true).pathname;
        switch(path){
            case '/users': renderHTML('./user.html',response); break;
            case '/': response.write('<div >Show the users list <a href="/users" target="_blink">Users List</a> </div><br/>') ;

            default: response.writeHead(404);
                     response.write("route not found");
                     response.end();
        }
    }
}