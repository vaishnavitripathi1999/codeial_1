const Post = require('../models/posts')

module.exports.create = function(req, res){
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, function(err, post){
        if(err){console.log('error in creating a post',err); return;}

        return res.redirect('back');
    });
}
//are you there ? wait okay open robo3T ok 