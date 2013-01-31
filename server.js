var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('My name is Ralph and I am a bad dog. Sometimes I just can''t help myself. I try to be good but I can''t. My doggy instincts get the best of me and I can''t control myself. I must steal food from kids. I must chew things I shouldn''t. I must chase the cat, the squirrel, the rabbit, the bird. It''s who I am.'\n');
}).listen(port);
