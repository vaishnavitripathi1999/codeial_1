const Post = require('../models/posts');
const User = require('../models/user')

// module.exports.home = function(req, res){
//     // console.log(req.cookies);
//     // res.cookie('user_id', 25);

//     // Post.find({}, function(err, posts){
//     //     return res.render('home', {
//     //         title: "Codeial | Home",
//     //         posts:  posts
//     //     });
//     // });

//     // populate the user of each post
//     Post.find({})
//     .populate('user')
//     .populate({
//         path: 'comments',
//         populate: {
//             path: 'user'
//         }
//     })
//     .exec(function(err, posts){

//         User.find({},function(err,user){

//             return res.render('home', {
//                 title: "Codeial | Home",
//                 posts:  posts,
//                 all_user:user
//             });


//         });

        
//     })

// };

// module.exports.actionName = function(req, res){}
module.exports.home=async function(req,res){
try{

    let posts =await  Post.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    });

    let user=await User.find({},function(err,user){

        return res.render('home', {
            title: "Codeial | Home",
            posts:  posts,
            all_user:user
        });


    });

}catch(err){

console.log('ERROR',err);
return ;



}


}