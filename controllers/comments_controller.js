const comments= require('../models/comments');
const posts= require('../models/posts');
const Post = require('../models/posts');



module.exports.create = function(req,res){

    Post.findById(req.body.post,function(err,post){

        if(post){
            comments.create({
                    content: req.body.content,
                    post:req.body.post,
                    user:req.user._id

            },function(err,comments){

                if(err){
                    console.log('there is an error in creating a comment',err);
                }
                post.comments.push(comments);
                post.save();

                res.redirect('/');
            });
        }

    });


};