const User= require('../models/user');

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

    if(req.body.password!=req.body.confirm_pass){
        return res.redirect('back');
    }
     User.findOne({email:req.body.email},function(err,user){
         if(err){console.log('there is an error in fingong the user'); return;}

         if(!user){
             User.create(req.body,function(err,user){

                if(err){console.log('There is an error in creating the user'); return }

                return res.redirect('/user/signin');

             })
         }
         else{
            return res.redirect('back');
         }
     })
            
}



module.exports.createSession= function(req,res){
    //find the user

        User.findOne({email:req.body.email},function(err,user){

            if(err){return console.log('the user is not found')}

            if(user){
                if(user.password != req.body.password){

                    return res.redirect('back');
                }
                res.cookie('user_id',user.id);
                return res.redirect('/user/profile');
            }
            else{

                return res.redirect('back');

            }

        })

        //handel the user found

    //handleing pssword mis matching 

    
    //handel session creation

    //handel user not found


};


module.exports.profile= function(req,res){

 if (req.cookies.user_id){
    User.findById(req.cookies.user_id,function(err,user){
        // if(err){ return console.log('There is an error finging the cookie withb email')}
        if(user){ return res.render('user',{
                title: 'User Profile',
                user:user
        })}
        return res.redirect('/user/signin');

    })
    
 }

 else{
     return res.redirect('back');
 }

}



module.exports.signout=function(req,res){    
    req.session.destroy(function(err){  
        if(err){  
            console.log(err);  
        }  
        else  
        {  
            res.redirect('/user/signin');  
        }  
    })  

};