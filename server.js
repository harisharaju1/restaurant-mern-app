const express = require('express');
const app = express();
//back-end framweork that works alongside node
const cors = require('cors');
//const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/item');
const categoryRoutes = require('./routes/category');
const path = require('path');

//middleware
app.use(cors());
//HTTP request logger
//app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/item', itemRoutes);
app.use('/api/category', categoryRoutes);
app.use('/uploads', express.static('uploads'));;

//serve statis assets if in production
if(process.env.NODE_ENV == 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

connectDB();

app.get('/', (req,res) => {
    res.send('Inside server');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));