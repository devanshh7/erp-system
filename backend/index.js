const fs = require('fs');
fs.writeFile("hey.txt", "hello from node, this file is made from file system function", function (err) {
    if (err) console.error(err);
    else console.log("done");
})