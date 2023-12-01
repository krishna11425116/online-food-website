const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.9';
const port = 3000;
const fileContent = fs.readFileSync('home.html')

const home = fs.readFileSync('home.html');
const menu = fs.readFileSync('menu.html');
const about = fs.readFileSync('about.html');
const signup = fs.readFileSync('signup.html');

const server = http.createServer((req , res) =>{
    console.log(req.url);
    res.statusCode = 200;
    res.writeHead(100 , {'Content-type': 'text/html'});
    res.end(fileContent)
})

server.listen(80 , '127.0.0.9', ()=>{
    console.log('Hello Diksha Didi http://${hostname}:${port}/')
})