//using asyncAwait 

const fs = require("fs")

const writeup = "this is newly written"

const path = "./write.txt"

async function myDoc() {
    try {
        await fs.writeFile(path, writeup, (error)=>{
            if (error) {
                console.log("error writing files")
            } else {
                console.log("file written sucessfully")
            }
        })
    } catch (error) {
        console.log("error writing to file:", error)
    }
}
myDoc()