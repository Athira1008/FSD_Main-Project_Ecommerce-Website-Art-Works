const express = require('express');
const Adminrouter= express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const AdminData = require('../models/adminuser');



// login
Adminrouter.post('/login',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    let adminData=req.body;
    AdminData.findOne({email:adminData.email},(err,admin)=>{
        if(err){
            console.error(err);
        }
        else{
            if(!admin){
                res.status(401).send('Invalid Email')
            }   
        
        else if(admin.password!==adminData.password){
            res.status(401).send('Invalid Password');
            }
            else{
                let payload={subject:admin._id}
                let token=jwt.sign(payload,'secretKey')
                res.status(200).send({token})
                
            }
        }
    });
});

Adminrouter.get('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.send("From Admin")
});

module.exports = Adminrouter;