


const express = require('express');
const router =  express.Router();

const usercontroller= require('../controllers/users')


router.get('/profile',usercontroller.profile);


router.get('/signup',usercontroller.signup);
router.get('/signin',usercontroller.signin);



module.exports = router;