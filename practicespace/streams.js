const fs = require("fs")

const writeable = fs.createWriteStream("output.txt")

writeable.write('byeeee', (error)=>{
    if(error){
        console.error('error loading')
    }
    else{
        console.log('success')
    }
})

writeable.end()

writeable.on('finish', ()=>{
    console.log('done for today')
})