const express = require('express');
const cors = require('cors');
const { isValidObjectId } = require('mongoose');
var bodyparser = require('body-parser');
var app = new express();

const api=require('./src/routes/api');
const admin=require('./src/routes/admin');
const artist=require('./src/routes/artist');
const product=require('./src/routes/product');

app.use(cors());
app.use(bodyparser.json());
app.use('/api',api);
app.use('/admin',admin);
app.use('/artist',artist);
app.use('/product-list',product);

app.get('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    
        res.send("hello from server");
    
});

app.listen(3000);