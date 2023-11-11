const http = require("http")

const host = 'localhost'

const port = 2003;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"})
    res.end('hello world')
})

server.listen(port, ()=>{
    console.log(`host:${host}:${port}`)
})