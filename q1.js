const http=require('http');

const server =http.createServer((req,res)=>{
    console.log("Efetuando o pedido no servidor")
    res.write("<h1>O servidor do Bernardo atendeu sua requisição</h1>")
    res.end()
})

server.listen(3000,"localhost",()=>{
    console.log('Servidor do Bernardo no ar');
    
})
