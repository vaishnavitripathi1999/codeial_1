


const express = require('express');
const router =  express.Router();

const passport= require('passport');

const usercontroller= require('../controllers/users')


router.get('/profile',usercontroller.profile);


router.get('/signup',usercontroller.signup);
router.get('/signin',usercontroller.signin);


router.post('/create',usercontroller.create);


router.post('/create-session',passport.authenticate('local',{
    failureRedirect:'/user/signin'
}),usercontroller.createSession);



module.exports = router;