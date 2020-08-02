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
//dekho generally jb hm get rwquest bhejte hain toh uske sath kio additional information nhi bhejte hain,but agar hme addtional data behjna get request k sath jaisa ki hm post request me bhejde hain toh params aur query use krte hain......
//okay aur bhi hai , if you want aap mic on kar sakte ho ? acyaat utyplle ykar loge ?
//actully mere microphone kharab ho chuka hai...a
//okay no problem , you can solve like this only :)...if u c are comfortable u can call it will easy for u to understand and forme easy to explain ...//sure i willl call 
//it will help me for future questions also thanks alot :)...9625961919...//your name?
//abhinav// arey you confortable in call right now or later ?
//any time before 12..
//okay ill give you a ping after 10 mins till then you can solve other's doubt  ?.o.kaoykay  no problem
//tatatat bye :) thanks ...