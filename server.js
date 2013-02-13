// load http module
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require('fs');

// create http server
http.createServer(function(req, res) {
  
  //open and read in blah
  fs.readFile('blah','utf8', function(err,data)
        {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          if (err)
            res.write('Could not find or open file for reading\n');
          else
            res.write(data);
            
          res.end();
        });
}).listen(port);
