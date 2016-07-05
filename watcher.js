var fs = require('fs');
fs.watch('./debug/549652', console.log);
fs.watchFile('./debug', console.log);