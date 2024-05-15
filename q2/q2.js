
const http=require('http');

const fs=require('fs');

let porta =3000;
let local ='localhost';

const server=http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    fs.readFile('q2.html',(erro,data)=>{
        if(erro){
            res.write('Deu errado, sinto muito');
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
})

server.listen(porta, local, ()=>{
    console.log('Servidor iniciado');
});