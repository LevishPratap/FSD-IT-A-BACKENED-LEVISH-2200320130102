const fs=require('fs');
const dt='this data should be added into the file';
fs.appendFile('./data.txt',dt,(err)=>{
    if (err){
        console.log(err)
    }
    else
    console.log('updated')
})
fs