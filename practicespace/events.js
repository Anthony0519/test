const event = require('events')

class newevent extends event{}

const eventobject = new newevent()

eventobject.on("light up", ()=>{
    console.log("up nepa")
})

eventobject.emit('light up')