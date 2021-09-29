const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3030;

app.use(express.static(path.resolve(__dirname,'public')));  //Esta linea siempre antes de las rutas

app.get('/',(req,res)=>{
	let htmlPath = path.join(__dirname, '/views/index.html');
	res.sendFile(htmlPath);
});

app.get('/babbage',(req,res)=>{
	let htmlPath = path.join(__dirname, '/views/babbage.html');
	res.sendFile(htmlPath);
});

app.get('/berners-lee',(req,res)=>{
	let htmlPath = path.join(__dirname, '/views/berners-lee.html');
	res.sendFile(htmlPath);
});

app.get('/clarke',(req,res)=>{
	let htmlPath = path.join(__dirname, '/views/clarke.html');
	res.sendFile(htmlPath);
});

app.get('/hamilton',(req,res)=>{
	let htmlPath = path.join(__dirname, '/views/hamilton.html');
	res.sendFile(htmlPath);
});

app.get('/hopper',(req,res)=>{
	let htmlPath = path.join(__dirname, '/views/hopper.html');
	res.sendFile(htmlPath);
});

app.get('/index',(req,res)=>{
	let htmlPath = path.join(__dirname, '/views/index.html');
	res.sendFile(htmlPath);
});

app.get('/lovelace',(req,res)=>{
	let htmlPath = path.join(__dirname, '/views/lovelace.html');
	res.sendFile(htmlPath);
});

app.get('/turing',(req,res)=>{
	let htmlPath = path.join(__dirname, '/views/turing.html');
	res.sendFile(htmlPath);
});

//app.listen(3030, () => console.log('DH Server corriendo puerto 3030'))  //Esta linea siempre al final