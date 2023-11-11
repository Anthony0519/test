// readstream
//import the file system module(fs)
const fs = require("fs")

//read a file
const myreadstream = fs.createReadStream("./text.txt","utf8");

// read the files in chunk
myreadstream.on("data", (chunk)=>{
    console.log(`ourchunk: ${chunk}`);
});

//end the read stream operation
myreadstream.on('end', ()=>{
    console.log("end of my chunk");
});