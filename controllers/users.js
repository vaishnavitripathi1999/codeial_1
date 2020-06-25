

module.exports.profile=function(req,res){

    // return res.end('<h1>HERE IS YOUR PROFILE</h1>');

    return res.render('user',{
        title: 'user '
    });
    
    };


    

    // remndering the sign up page 
    module.exports.signup= function(req,res){

        return res.render('signup',{
            title: 'signup page'
        });
   
   };


   //rendering the sign in page 
   module.exports.signin= function(req,res){

    return res.render('signin',{
        title: 'signin page'
    });

};



//creating a  user
module.exports.create=function(req,res){

    //todo later
}


module.exports.createSssion= function(req,res){
    //todo later
}

