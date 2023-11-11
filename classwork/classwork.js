// using the callback

const fs = require('fs')

let myDocument = "./callbak.txt"

const writeup = "Anthony"

fs.writeFile(writeup, myDocument, 'utf8', (error)=>{
    if (error) {
        console.log("message:" + error )
        console.log("message:error writtikng to the file" + myDocument)
    }else {
        console.log('successful')
    }
})