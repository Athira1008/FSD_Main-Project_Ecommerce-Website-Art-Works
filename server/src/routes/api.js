const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const UserData = require('../models/user');

// register
router.post('/register',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    let userData=req.body;
    let user=new UserData(userData)
    user.save((err)=>{
        if(err){
            console.error(err);
        }
        else{
            let payload={subject:user._id}
            let token=jwt.sign(payload,'secretKey')
            res.status(200).send({token})
        }
    });
});

// login
router.post('/login',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    let userData=req.body;
    UserData.findOne({email:userData.email},(err,user)=>{
        if(err){
            console.error(err);
        }
        else{
            if(!user){
                res.status(401).send('Invalid Email')
            }   
        
        else if(user.password!==userData.password){
            res.status(401).send('Invalid Password');
            }
            else{
                let payload={subject:user._id}
                let token=jwt.sign(payload,'secretKey')
                res.status(200).send({token})
                
            }
        }
    });
});

router.get('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.send("From API")
});

module.exports = router;