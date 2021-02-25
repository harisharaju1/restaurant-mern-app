const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const ItemSchema = new mongoose.Schema({
    itemFileName :{
        type: 'String',
        required: true,
    },
    itemName: {
        type: 'String',
        required: true,
        trim: true,
        maxlength: 60
    },
    itemDesc: {
        type: 'String',
        trim: true,
    },
    itemPrice: {
        type: 'String',
        required: true
    },
    itemCategory: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    itemQuantity: {
        type: Number,
        required: true
    },
    itemWeight: {
        type: Number,
        required: true
    }
},{timestamps: true});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;