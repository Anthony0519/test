// creating server with express

const express = require("express")

const app = express()

const port = 2023

app.get("/",async(req,res)=>{
    res.send('hello world anthony')
})
app.get('/anthony',async(req,res)=>{
    res.send('welcome')
})

app.listen(port,()=>{
    console.log(`server: ${port}`);
})



// const express = require("express")

// class apps extends express{}

// const app = new apps()

// const port = 2023

// app.get("/",async(req,res)=>{
//     res.send('hello world anthony')
// })
// app.get('/anthony',async(req,res)=>{
//     res.send('welcome')
// })

// app.listen(port,()=>{
//     console.log(`server: ${port}`);
// })