const express = require('express');
const router = express.Router();
const passport = require('passport');


const posts_controller=require('../controllers/posts_controller');


router.post('/create',posts_controller.createP);









module.exports = router;