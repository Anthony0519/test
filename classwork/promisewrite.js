//using promise

const fs = require('fs').promises

const myDoc = "./promise.txt"

const myWriteup = "this is newly written"

fs.writeFile(myDoc, myWriteup, "utf8")

.then(() =>{
    console.log('successful');
})
.catch((error)=>console.log(`this error occoured: ${error}`))