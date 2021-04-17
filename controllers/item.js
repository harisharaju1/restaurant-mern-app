const Item = require('../models/Item');
const fs = require('fs');

exports.create = async (req,res) => {
    const {filename} = req.file;
    const {itemName, itemDesc, itemWeight, itemPrice, itemQuantity, itemCategory} = req.body;

    try{
        let item = new Item();

        item.itemFileName = filename;
        item.itemName = itemName;
        item.itemDesc = itemDesc;
        item.itemWeight = itemWeight;
        item.itemPrice = itemPrice;
        item.itemQuantity = itemQuantity;
        item.itemCategory = itemCategory;

        await item.save();

        res.json({
            successMessage: `${itemName} was created`,
            item
        });

    } catch(err){
        console.log(err, 'item controller error');
        res.status(500).json({
            errorMessage: 'Please try again later',
        })
    }
}

exports.readAll = async (req,res) => {
    try{
        const items = await Item.find({}).populate('populateCategory', 'category');
        //.populate allows to pull the category from the category model; synonymous to join in SQL
        res.status(200).json({
            items,
        })
    } catch(err){
        console.log(err, 'item controller readAll error');
        res.status(500).json({
            errorMessage: 'Please try again later',
        })
    }
}

exports.read = async (req,res) => {
    try{
        const itemId = req.params.itemId;
        const item = await Item.findById(itemId);
        res.status(200).json(item);
    } catch(err){
        console.log(err, 'item controller readAll error');
        res.status(500).json({
            errorMessage: 'Please try again later',
        })
    }
}

exports.update = async (req,res) => {
    try{
        const itemId = req.params.itemId;

        req.body.itemFileName = req.file.filename;

        const oldItem = await Item.findByIdAndUpdate(itemId, req.body);

        fs.unlink(`uploads/${oldItem.itemFileName}`, err => {
            if(err) throw err;
        });
        
        res.json({
            successMessage: 'Item successfully updated'
        });

    } catch(err){
        res.status(500).json({
            errorMessage: 'Please try again later',
        })
    }
}

exports.delete = async (req,res) => {
    try{
        const itemId = req.params.itemId;
        const deletedItem = await Item.findByIdAndDelete(itemId);

        console.log(deletedItem);

        fs.unlink(`uploads/${deletedItem.itemFileName}`, (err) => {
            if(err) throw err;
            console.log('Image succesfully deletd from file system', deletedItem.itemFileName);
        });

        res.json(deletedItem);
    } catch(err){
        console.log(err, 'deleteItem controller error');
        res.status(500).json({
            errorMessage: 'Please try again later',
        })
    }
}