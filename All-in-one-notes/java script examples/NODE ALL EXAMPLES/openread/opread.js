var fs = require('fs');
fs.open('test.txt', 'r', function (err, fd) {
    if (err) {
return console.error(err);
   }
var buffr = new Buffer.alloc(1024);

fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {
    if (err) throw err;
    // Print only read bytes to avoid junk.
    if (bytes > 0) {
console.log(buffr.slice(0, bytes).toString());
}
    // Close the opened file.
fs.close(fd, function (err) {
    if (err) throw err;
});
});
});

