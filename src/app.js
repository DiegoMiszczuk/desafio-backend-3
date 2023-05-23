// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log(req.url)
//     if(req.url === '/'){
//         res.end("hola")
//     }
// })

// server.listen(8080, ()=> {
//     console.log('server running on port 8080')
// })
//import ProductManager from "./ProductManager.js";
const ProductManager = require('../ProductManager');
//const pm = require('./ProductManager');
//import ProductManager from "./ProductManager";
//import  express  from "express"; 
//import ProductManager from "./productManager";
//import ProductManager from './productManager'

//import express from 'express'
const express = require ('express') 
const app = express() 
const fs = require('fs')
//const pm =new ProductManager()
//const productos = new ProductManager('productos.json'); 
//productos.addProduct("text product", "se ingresa producto de prueba", 5000, "imagen", "abcvcvcvc123", 25);
//productos.addProduct("text product", "se ingresa producto de prueba", 5000, "imagen", "abcvcvcvc123", 25);
app.get('/', (req, res) => { 

    res.send('hola151561651561 mundo') 
})

  app.get('/productos/:id', (req, res) => { 
    let usus = req.params.id
   res.send(usus)

   
    console.log(usus)
    //console.log(req.params)
    //console.log(usus)
    //productos.getProductbyId(req.params)
    //res.send(usu)
    //const poid = pm.getProductbyId(req)
   // console.log(req)
    //res.send('hola151561651561 mundo') 
   // res.send(poid)
})













app.listen('8080', ()=>{
    console.log('server running on port 8080')
})