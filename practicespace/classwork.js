// //server reading a file
// const http = require("http");

// const fs = require("fs")
// const host = "localhost"

// const PORT = 2005;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "utf8"});
//     const myreadstream = fs.createReadStream("./testfiles.txt","utf8")
//     myreadstream.pipe(res)
// });

// server.listen(PORT, ()=>{
//     console.log(`server is listening on host: ${host}:${PORT}`)
// });


const fs = require('fs').promises
async function readWrite (source, destination){
    try {
       const datas = await fs.readFile(source, "utf8", (error)=>{
            if (error) {
                console.log("error");
            } else {
                console.log("succesful");
            }
        })
        await fs.writeFile( destination, datas, (error)=>{
            if (error) {
                console.log(error);
            } else {
                console.log('success');
            }
        })
    } catch (e) {
        console.log(e.message)
    }
}

readWrite("./output.txt","./test.txt")