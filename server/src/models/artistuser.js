const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EcommerceDb',function(err){
    if(err){
        console.error('Error!'+error)
    }
    else{
        console.log('connected to mongodb')
    }
});
const Schema = mongoose.Schema;

var ArtistSchema = new Schema({
    
    email :String,
    password :String
     
});

var Artistdata = mongoose.model('artist', ArtistSchema,'artists');
module.exports = Artistdata;