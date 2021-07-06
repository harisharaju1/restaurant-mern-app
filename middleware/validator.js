const { check, validationResult} = require('express-validator');

exports.signupValidator = [
    check('username').not().isEmpty().trim().withMessage('All fields required'),
    check('email').isEmail().normalizeEmail().withMessage('Invalid email'),
    check('password1').isLength({min:6}).withMessage('Password length must be at least 6 chcs long')
];

exports.signinValidator = [    
    check('email').isEmail().normalizeEmail().withMessage('Invalid email!'),
    check('password1').isLength({min:6}).withMessage('Password length must be at least 6 chcs long')
];

exports.validatorResult = (req,res,next) => {
    const result = validationResult(req);
    const hasErrors = !result.isEmpty();

    if(hasErrors){
        const firstError = result.array()[0].msg;
        return res.status(400).json({
            errorMessage: firstError
        });
    }
    next();
};