

module.exports.home=function(req,res){

    //this is to send the response directly 
    // return res.end('<h1>HEYYYYYYYY</h1>');


    //to render ejs file 

    console.log(req.cookies);
    res.cookie('user_1',25);



    return res.render('home',{
        title: "home  "
    });

}