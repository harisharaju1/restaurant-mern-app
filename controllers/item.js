const Item = require('../models/Item');

exports.create = async (req,res) => {
    const {item} = req.body;
    console.log(item);
    try{
        let newItem = new Item();
        newItem.item = item;

        newItem = await newItem.save();

        res.status(200).json({
            successMessage:`${newItem.item} was created!`
        })
    } catch(err) {
        console.log('item craete error: ', err);
        res.status(500).json({
            errorMessage:'Please try again later'
        })
    }
}