const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/coeial_development');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error inconnecting to the db '));

db.once('open',function(){

    console.log('connected to the data base ');


});

module.export = db;



