
//requiring express
const express= require('express');

//getting all the funciton in express
const app =express();

//telling the port 
const port = 8000;


//getting the db file
const db = require('./config/mongoose');

//requiring the layouts 
const expresslayouts = require('express-ejs-layouts');


//developing a middle ware for using layouts
app.use(expresslayouts);

//to extract the style and script  from the sub pages to layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//creating a middle ware for using assts folder 
app.use(express.static('./assets'));




//telling the app to go to the router's index
//this is a middle ware 
app.use('/',require('./routes/index'));


//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');




//telling app to listen to port umber 8000
app.listen(port,function(err){

    if(err){
        console.log('there is an error in connecting to the port ', err);
         return;

    }

    console.log('The server is successfully connected to port no', port );


});


