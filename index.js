let http = require('http');
let path = require('path');
let fs = require('fs');

let hostname = '127.0.0.1';
let port = 3000;

let server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  displayHome(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function displayHome(res) {
    fs.readFile('index.html', (err, data) => {
        if(err)
        {
            res.writeHead(404);
            res.end("Error: 404 - Page Not Found");
            console.log("Error");
            return;
        }

        res.writeHead(200);
        res.end(data);
    });
}