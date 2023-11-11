const { Transform } = require('stream');

const newTransform = new Transform({
  transform(chunk, encoding, callback) {
    const transformLowercase = chunk.toString().toLowerCase();
    this.push(transformLowercase);
    callback();
  }
});

const text = 'EXAMPLE OF TRANSFORM STREAM.';
const {Readable} = require("stream")
const transforming = new Readable();
transforming.push(text);
transforming.push(null);
transforming.pipe(newTransform).pipe(process.stdout);