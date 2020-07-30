const express = require('express');
const Artistrouter= express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const ArtistData = require('../models/artistuser');


// register
Artistrouter.post('/register',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    let artistData=req.body;
    let artist=new ArtistData(artistData)
    artist.save((err)=>{
        if(err){
            console.error(err);
        }
        else{
            let payload={subject:artist._id}
            let token=jwt.sign(payload,'secretKey')
            res.status(200).send({token})
        }
    });
});

// login
Artistrouter.post('/login',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    let artistData=req.body;
    ArtistData.findOne({email:artistData.email},(err,artist)=>{
        if(err){
            console.error(err);
        }
        else{
            if(!artist){
                res.status(401).send('Invalid Email')
            }   
        
        else if(artist.password!==artistData.password){
            res.status(401).send('Invalid Password');
            }
            else{
                let payload={subject:artist._id}
                let token=jwt.sign(payload,'secretKey')
                res.status(200).send({token})
                
            }
        }
    });
});

Artistrouter.get('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.send("From Artist")
});

module.exports = Artistrouter;