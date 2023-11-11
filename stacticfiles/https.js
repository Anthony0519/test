// import your modules
const http = require("http")
const fs = require ("fs")
const path = require("path")

//create a dynamic function for tracking file extentions
const getcontenttype = (filepath)=>{
    //get the extentions name
    const extentionsname = path.extname(filepath)
    //switch the extentions names
    switch(extentionsname){
        case("html"):
        return("text/html")
        case("css"):
        return("text/css")
        case("txt"):
        return("text/plain")
        case('jpeg'):
        return('image/jpeg')
        case("js"):
        return("application/javascript")
        default:
            return("application/octet-stream")
    }
}
// create a server
const server = http.createServer((req,res)=>{
    //get the path specified from the url
    const filepath = path.join(__dirname,"stactics", req.url)
    //comfirm if the file exists
    fs.exists(filepath, (fileexist)=>{
        if (fileexist) {
            //read the file
            fs.readFile(filepath, "utf8", (error,data)=>{
                if (error) {
                    res.writeHead(500, {"content-type":"text/plain"})
                    res.end("server error")
                } else {
                    //pass the content of the file
                    const contenttype = getcontenttype(filepath)
                    res.writeHead(200, {"content-type": contenttype})
                    res.end(data)
                }
            })
        } else {
            res.writeHead(404, {"content-type":"text/plain"})
            res.end("file not found")
        }
    })
})
// listen to ur server 
const host = 'localhost'
const port = 2005
server.listen(port,()=>{
    console.log(`server on: http://${host}:${port}`)
})