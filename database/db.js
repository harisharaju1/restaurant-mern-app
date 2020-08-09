const mongoose = require('mongoose');
const { mongoURL } = require('../config/keys');

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }    
        );
        console.log('Database connection success');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;