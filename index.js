const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Maratona Full Cycle 2.0');
    response.end();
}).listen(3000);

console.log('Webserver starting...');
