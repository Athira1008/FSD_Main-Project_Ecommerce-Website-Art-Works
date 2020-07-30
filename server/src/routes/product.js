const express = require('express');
const mongoose = require('mongoose');
const ProductData = require('../models/Productdata');
const productRoutes= express.Router();



productRoutes.get('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    
        res.send("hello from productlist");
    
});
productRoutes.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    ProductData.find()
    .then(function(products){
        res.json(products);
    });
});

productRoutes.post('/add-product',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var product={
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        artistName : req.body.product.artistName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        status : req.body.product.status,
        imageUrl : req.body.product.imageUrl  
    }
    var product=new ProductData(product);
    product.save();
});


productRoutes.get('/delete/:id',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    ProductData.findOneAndDelete({_id:req.params.id})
    .then (function(){
        ProductData.find()
        .then(function (products){
             res.send(products);
        });
        
    });
});
productRoutes.get('/edit/:id',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    ProductData.findOne({_id:req.params.id})
    .then (function(product){
         {
            res.send(product);
        }
    });
});
productRoutes.post('/update',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var product={
        _id:req.body.product._id,
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        artistName : req.body.product.artistName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        status : req.body.product.status,
        imageUrl : req.body.product.imageUrl  
    }
    ProductData.findOne({_id:product._id})
    .then (function(result){
            var productEdit= new ProductData(product);
            ProductData.findByIdAndUpdate(productEdit._id, productEdit, (err, updated) => {
                console.log("updated" + updated);
            });
        // }
    });
    // var product=new ProductData(product);
    // product.save();
});


module.exports = productRoutes;