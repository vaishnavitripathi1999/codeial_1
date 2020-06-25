

module.exports.profile=function(req,res){

    // return res.end('<h1>HERE IS YOUR PROFILE</h1>');

    return res.render('user',{
        title: 'user '
    });
    
    }