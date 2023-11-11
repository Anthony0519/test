const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(express.static('stactics'))
app.get("/", (req,res)=>{
    const filepath = path.join(__dirname,req.url)
    fs.exists(filepath, (existing)=>{
        if (existing) {
            fs.readFile(filepath,'utf-8', (error,data)=>{
                if (error) {
                    res.status(500).send('sever error')
                } else {
                    res.status(200).send(data)
                }
            })
        } else {
            res.status(404).send('file not found')
        }
    })
})

app.listen(2023, ()=>{
    console.log(`server on: http://:${2023}`);
})