const http = require('http');
const requestHandle = require('./routes');

const server = http.createServer(requestHandle);

server.listen(3000, function() {
    console.log("Server has started...");
});