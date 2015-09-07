var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.end("Hello World");
}).listen(8080);
