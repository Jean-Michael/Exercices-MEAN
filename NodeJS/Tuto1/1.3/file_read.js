var fs = require('fs');

var callback = function(error, contents) {
    console.log(contents);
};

fs.readFile('index.html', callback);
