import http from "http";

console.log("server.js: Initialing server...");
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    response.statusCode = 200;
    response.end('<h1>HTTP server is created!</h1>')
};

const http_server = http.createServer(requestListener);
const port = 5000;
const host_name = "localhost";

http_server.listen(port, host_name, () => {
    console.log(`HTTP server berhasil berjalan! [https://${host_name}:${port}]`);
});