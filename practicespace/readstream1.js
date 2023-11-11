const fs = require('fs')

const readstream = fs.createReadStream("./readstream1.txt","utf8")

readstream.on('data', (chunk)=>{
    console.log(`chunks:${chunk}`)
})

readstream.on('close', ()=>{
    console.log ("finished reading")
})