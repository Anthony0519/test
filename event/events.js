//  import the builtin module
const eventemitter = require('events');

//extend a class to the eventemitter
class myemitter extends eventemitter{}

//create an object of the class myemmitter
const emittedObject = new myemitter();

//make use of the object
emittedObject.on('lightup',()=>{
    console.log('up nepa');
});

emittedObject.emit('lightup')