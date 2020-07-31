const Post = require('../models/posts');
const Comments=require('../models/comments');

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

module.exports.destroy = function(req, res){
    Post.findById(req.params.id, function(err, post){
        // .id means converting the object id into string
        if (post.user == req.user.id){
            post.remove();

            Comments.deleteMany({post: req.params.id}, function(err){
                return res.redirect('back');
            });
        }else{
            return res.redirect('back');
        }

    });
}