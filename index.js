const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');
const MongoStore = require('connect-mongo')(session);
const sassMiddleware =require('node-sass-middleware');
const flash =require('connect-flash');
const customflash=require('./config/middleware');
const multer  = require('multer');
const passportGoogle=require("./config/passport-google-oauth");

//you there ?yes waoit
//const upload = multer({ dest: 'uploads/' }) save this file this was wrong

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));
app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets')); 

app.use('/uploads', express.static(__dirname + '/uploads')); 
//this was missingokaay actually can you also tell me the path  i dont know how to write thse
// this is simple just write (__direname and follow like normamal path)what is this thing dodingthis is telling main root file that where is our uploads folder in okoaur directoryokayy thank you :) your name is aditya ?yes i amm yher freidn vaihsnavi doing the course , mine is over , so im using his account okay ur doubt just got closed from my window can u plz resolve  siutr from ur side sure wit  dont exit the  done okay than uu you too , can i get your mail , so that i can ask more doubts sure sihmarradha@gmail.com tata ok
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);






// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        
        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


app.use(flash());
app.use(customflash.setFlash);

// use express router
app.use('/', require('./routes'));



app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
