var fs = require('fs');

const del=()=>{
    fs.unlink('./mkdir/data.txt', (err)=> {
        if (err) {
           console.log(err)
          };
        console.log('File deleted!');
      });
}
del()