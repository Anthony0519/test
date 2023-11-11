const fs = require('fs');

const WriteableStream = fs.createWriteStream("output.txt");

WriteableStream.write("hello world", (error)=>{
    if (error){
        console.error("errow writting to the file:", error);
    }
    else {
        console.log("successfully created an output text");
    }
});

WriteableStream.end();

WriteableStream.on("finish", ()=>{
    console.log('finished writting your content');
});