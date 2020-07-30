const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EcommerceDb');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    productId :Number,
    productName :String,
    artistName :String,
    productCode :String,
    releaseDate :String,
    description :String,
    price :Number,
    status :String,
    imageUrl :String  
});

var Productdata = mongoose.model('product', NewProductSchema,'products');
module.exports = Productdata;