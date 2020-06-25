
//requiring express
const express= require('express');

//getting all the funciton in express
const app =express();

//telling the port 
const port = 8000;


//requiring the layouts 
const expresslayouts = require('express-ejs-layouts');


//developing a middle ware 
app.use(expresslayouts);


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


