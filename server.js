const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/item');

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/item', itemRoutes);

connectDB();

app.get('/', (req,res) => {
    res.send('Inside server');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));