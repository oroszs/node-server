const http = require('http');
const fs = require('fs');
const PORT = 5000;
const handleRequest = (request, response) => {
    fs.readFile('./index.html', (err, data) => {
        if (err) throw err;
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);
    });
}
const server = http.createServer(handleRequest);
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});