const fs=require('fs');
const dat='hello this is overwritten by levish'
fs.writeFile('./data.txt',dat,(err,dt)=>{
    if (err){
        console.log(err)

    }
    else
    console.log('updated',dt)
})