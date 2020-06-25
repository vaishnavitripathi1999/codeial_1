
//requiring express
const express= require('express');

//getting all the funciton in express
const app =express();

//telling the port 
const port = 8000;


//telling the app to go to the router's index
//this is a middle ware 
app.use('/',require('./routes/index'));

// app.set('views','./views');

//telling app to listen to port umber 8000
app.listen(port,function(err){

    if(err){
        console.log('there is an error in connecting to the port ', err);
         return;

    }

    console.log('The server is successfully connected to port no', port );


});


