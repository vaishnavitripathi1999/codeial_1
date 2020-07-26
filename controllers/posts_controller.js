const Post = require('../models/posts');




module.exports.createP= function(req,res){

    Post.create({
        content:req.body.content,
        user:req.user._id

    },function(err,post){
        if(err){console.log('error in posting the comment',err); return}
        return res.redirect('back');

    });

}