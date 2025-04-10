const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'context-Type':'text/html'});
    res.end(`<h1 style='background-color:red;'>levish</h1>`)
})

server.listen(9000,()=>{
       console.log('server is running at port 9000')
})