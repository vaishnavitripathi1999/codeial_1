const Comment = require('../models/comments');
const Post = require('../models/posts');

module.exports.create = function(req, res){
    Post.findById(req.body.post, function(err, post){

        if (post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }, function(err, comment){
                // handle error

                post.comments.push(comment);
                post.save();

                req.flash('success','comment is  created');
                res.redirect('/');
            });
        }
        else{
            req.flash('error','comment is not created');
            return res.redirect('back');
        }

    });
}


module.exports.destroy = function(req, res){
    Comment.findById(req.params.id, function(err, comment){
        if (comment.user == req.user.id){

            let postId = comment.post;

            comment.remove();

            Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}}, function(err, post){
                req.flash('success','comment is  deleted');
                return res.redirect('back');
            })
        }else{
            req.flash('error','comment is not deleted');
            return res.redirect('back');
        }
    });
}