const fs = require('fs')

let myDocument = "./callback.txt"

fs.readFile(myDocument, 'utf8', (error,data)=>{
    if (error) {
        console.log("message:" + error )
        console.log("message:unable to read this file" + myDocument)
    }else {
        console.log(data)
    }
})



