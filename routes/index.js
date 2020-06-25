
//getting the express module 
const express= require('express');

//importing the homecontroller 
const homecontroller = require('../controllers/home_controller');



//calling router of express in a variable called router 
const router = express.Router();


//accessing the home from homecontroller
router.get('/',homecontroller.home);

router.use('/user',require('./users'));

//for any other router we can use 
//router.use('/name',require('./filename'))





console.log('index from the router is loaded');




module.exports= router;