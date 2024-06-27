import http from "http";

console.log("server.js: Initialing server...");
const requestListener = (request, response) => {
    const {method, url} = request;
    if (url === "/"){
        (method==="GET")? response.end(`<h1>welcome to homepage!</h1>`): response.end(`<h1>unable to access this page using ${method} method request!</h1>`);
    }else if(url === "/about"){
        if(method==="POST"){
            let body = [];
            request.on("data", (chunk)=>{
                body.push(chunk);
            });
            request.on("end", ()=>{
                body = Buffer.concat(body).toString();
                const {data} = JSON.parse(body);
                response.end(`<h1>you just pass ${data} as the data, now you are on about page!</h1>`);
            });
        }else{
            response.end(`unable to access this page using ${method} method request!, kindly use POST method!`);
        }
    }else{
        response.statusCode = 400;
        response.end(`can't find this page!`);
    }
};

const http_server = http.createServer(requestListener);
const port = 5000;
const host_name = "localhost";

http_server.listen(port, host_name, () => {
    console.log(`HTTP server berhasil berjalan! [http://${host_name}:${port}]`);
});