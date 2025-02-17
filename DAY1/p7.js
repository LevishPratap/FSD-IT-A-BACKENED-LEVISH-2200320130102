var fs = require('fs');

fs.unlink('data.txt', (err)=> {
  if (err) {
     console.log(err)
    };
  console.log('File deleted!');
});