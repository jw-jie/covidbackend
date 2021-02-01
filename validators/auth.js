const { check } = require('express-validator');

exports.registerValidator = [

    check('lastName')
        .not()
        .isEmpty()
        .withMessage('Last Name is required'),

    check('suffix')
        .not()
        .isEmpty()
        .withMessage('Suffix is required'),

    check('firstName')
        .not()
        .isEmpty()
        .withMessage('First Name is required'),

    check('middleName')
        .not()
        .isEmpty()
        .withMessage('Middle Name is required'),

       
    check('birthDate')
        .not()
        .isEmpty()
        .withMessage('Birth date is required'),
    
    check('employment')
        .not()
        .isEmpty()
        .withMessage('Employment status is required'), 

    check('sex')
        .not()
        .isEmpty()
        .withMessage('Sex is required'),

    check('civilStatus')
        .not()
        .isEmpty()
        .withMessage('Civil Status is required'),    

    check('pwd')
        .not()
        .isEmpty()
        .withMessage('PWD Status is required'),   


    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
        
    check('contactNumber')
    .trim()
    .isNumeric()
    .withMessage('Mobile number must be numeric.')
    .bail()
    .isLength({ max: 11, min: 11 })
    .withMessage('Mobile number must be 11 digits long.')
    .bail(),

    check('streetSubdivision')
        .not()
        .isEmpty()
        .withMessage('Street/Subdivision is required'),

    check('barangay')
        .not()
        .isEmpty()
        .withMessage('Barangay is required'),

        // check('municipality')
        // .not()
        // .isEmpty()
        // .withMessage('Municipality is required'),


];