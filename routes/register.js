const express = require('express')
const router = express.Router()

const {registerValidator} = require('../validators/auth');
const {runValidation} = require('../validators');


const {register, residency} = require('../controllers/register')

// router.post('/', (req, res) =>{
//    register(req.body)
//     .then(result => {
//         console.log(result)
//         res.send(result)
//     })

// })

 router.post('/register' ,registerValidator,runValidation, register);

 router.post('/residency' ,residency);

module.exports = router;