const fs =require('fs');
fs.rmdir('mkdir',(err)=>{
    if (err){
        console.log('error deleting the directory', err)

    }
    else
    console.log('directory deleted')
})