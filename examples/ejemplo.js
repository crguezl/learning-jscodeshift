const fs = require('fs');
fs.readFile('tutu.txt', function(err, data) {
  console.log(data);
});
