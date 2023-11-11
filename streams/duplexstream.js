const { Transform } = require('stream');

// Create a custom Transform stream to convert text to uppercase
const newTransform = new Transform({
  transform(chunk, encoding, callback) {
    const transformUppercase = chunk.toString().toUpperCase();
    this.push(transformUppercase);
    callback();
  }
});

const text = "hello world"
const {Readable} = require("stream")
const main = new Readable
main.push(text)
main.push(null)
main.pipe(newTransform).pipe(process.stdout);

main.on('end', () => {
  console.log('Duplex stream has completed.');
});