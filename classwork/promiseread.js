//using promise

const fs = require('fs').promises

const myDoc = "./promise.txt"

fs.readFile(myDoc, "utf8")

.then((data) =>{
    console.log(data);
})
.catch((error)=>console.log(`this error occoured: ${error}`))