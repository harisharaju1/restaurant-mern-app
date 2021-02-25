const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/keys');

exports.authenticateJWT = (req,res,next) => {
    const token = req.cookies.key;

    console.log('inside auth.js');
    
    if(!token){
        return res.status(401).json({
            errorMessage:'No token. Authorization denied'
        })
    }

    try{
        const decoded = jwt.verify(token,jwtSecret);

        req.user = decoded.user;

        next();
    } catch(err) {
        console.log('jwt wrror: ',err);
        res.status(401).json({
            errorMessage:'Invalid token'
        })
    }

}