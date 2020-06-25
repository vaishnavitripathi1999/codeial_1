

module.exports.home=function(req,res){

    //this is to send the response directly 
    // return res.end('<h1>HEYYYYYYYY</h1>');


    //to render ejs file 

    return res.render('home',{
        title: "home  "
    });

}