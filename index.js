const fs = require('fs');

//ex. 1
// const stream = fs.createReadStream('./test.txt', { encoding: 'utf8' });
// stream.on('data', console.log);

//ex. 2
// const writeStream = fs.createWriteStream('test2.txt');
// writeStream.write('and another one down');
// writeStream.end()

// ex. 3
// const readStream = fs.createReadStream('./dog.txt', { encoding: 'utf8' });
// const writeStream = fs.createWriteStream('./dog-copy.txt');

// readStream.on('data', data => {
//   writeStream.write(data);
// });

// readStream.on('end', () => {
//   writeStream.end();
// });

//ex. 4
const readStream = fs.createReadStream('./test.txt');
const writeStream = fs.createWriteStream('./test-copy.txt');


readStream.pipe(writeStream);