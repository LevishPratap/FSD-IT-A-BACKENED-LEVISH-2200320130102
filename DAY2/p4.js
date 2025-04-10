const http= require('http');
const fs=require('fs/promises');
const server=http.createServer(async(req,res)=>{
    res.statusCode=200
    res.setHeader('Content-TYpe','text/html');
    const data=await fs.readFile('./index.html','utf-8')
    res.end(data)
})
server.listen(9000,()=>{
    console.log('server is running at port 9000')
})