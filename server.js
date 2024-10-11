import express from "express";
import "dotenv/config.js"
import "./config/database.js"

const server = express();

const PORT = process.env.PORT || 8080;

const ready = ()=> console.log("server ready in port :"+PORT);

server.get('/',(request,response) =>{
    response.send('Hola mundo en express')
})


server.get('/saludo',(request,response) =>{
    response.send('Hola bienvenido al mundo en express')
})

server.listen(PORT,ready);

console.log(process.env.PORT);