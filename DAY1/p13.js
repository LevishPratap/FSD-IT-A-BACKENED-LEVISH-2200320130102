const fs=require('fs/promises')
data='this data will be added into the file'
const write=async()=>{
    fs.writeFile('./data.txt',data,(err)=>{
    if (err){
        console.log('error occured uring the writing')

    }
    else
    console.log('data is successfully added')
    })
}
write()