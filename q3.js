
const http= require("http");
const fs= require("fs");

let porta =3000
let host ="localhost";

const server = http.createServer((req,res)=>{
    res.setHeader("content-type","text/html");
   
    let html_page ="";

    switch (req.url){
        case "/":
            html_page="index.html";
            res.statusCode = 200;
            break;
        case "/index":
            html_page="index.html";
            res.statusCode = 200;
            break;
        case "/contato":
            html_page="contato.html";
            res.statusCode = 200;
            break;
        default:
            html_page="erro.html";
            res.statusCode = 404;
            break;
    }

fs.readFile("./html/"+html_page,(erro,data)=>{
    if (erro){
    console.log(erro);
}else{
    res.write(data);
    res.end()
}

})
})

server.listen(porta,host,()=>{
    console.log("servidor no ar")
})
