// const express = require('express')
// const fs = require('fs')
// const path = require('path')
// const port = 2000

// const app = express()

// app.use(express.static('stactics'))

// app.get('/' , (req,res)=>{
//     const filepath = path.join(__dirname, req.url)
//     fs.exists(filepath,(fileExist)=>{
//         if (fileExist) {
//             fs.readFile(filepath, 'utf8', (error,data)=>{
//                 if (error) {
//                     res.status(500)
//                     res.send('server error')
//                 } else {
//                     res.status(200)
//                     res.send(data)
//                 }
//             })
//         } else {
//             res.status(404)
//             res.send('file not found')
//         }
//     })
// })

// app.listen(port, ()=>{
//     console.log(`server on: http://:${port}`);
// })





const express = require('express')
const path = require("path")