const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true,
        trim:true,
        maxlength:50
    }
}, {timestamps:true})

const Item = mongoose.model('Item',itemSchema);
module.exports = Item;