// call a module
const http = require("http");

//call a host
const host = "localhost"

//create a port
const PORT = 2005;

//create a server
const server = http.createServer((req, res) => {
    //show a text content
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("i am Anthony")
});

//connect ur server to ur port
server.listen(PORT, ()=>{
    console.log(`server is listening on host: ${host}:${PORT}`)
});