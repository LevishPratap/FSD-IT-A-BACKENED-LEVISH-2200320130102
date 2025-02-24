const http=require('http')
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Contect-Type','text/plain');
    res.end('hello');
});

server.listen(9000,()=>{
    console.log('server is running at port 9000')
})