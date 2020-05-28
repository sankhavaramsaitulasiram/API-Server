const express = require('express');
const products = require('./products.js').products;
const app = express();

app.get('/',(req,res)=>{
console.log("request received");
res.send({'products':products});
})

app.listen(8000,()=>{
	console.log("API Server started on port 8000");
})