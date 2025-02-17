const fs=require('fs');
const read=()=>{
    fs.readFile('./data.txt','utf-8',(err,dt)=>{
        if (err){
            console.log(err)
        }
        else
        console.log(dt)
    
    })
}
console.log('i am before reading')

read()
console.log('i am after reading')