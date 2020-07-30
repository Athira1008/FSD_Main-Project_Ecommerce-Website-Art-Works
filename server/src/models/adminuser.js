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

var AdminSchema = new Schema({
    
    email :String,
    password :String
     
});

var Admindata = mongoose.model('admin', AdminSchema,'admin');
module.exports = Admindata;