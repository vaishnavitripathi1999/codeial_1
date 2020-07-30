const mongoose = require('mongoose');
const { model } = require('mongoose');

const ComentsSchema = new mongoose.Schema({
content:{
    type:String,
    required:true
},
user:{
    type:  mongoose.Schema.Types.ObjectId,
    ref:'User'
},
post:{
   type:  mongoose.Schema.Types.ObjectId,
   ref:'Post'

}
},{
    timestamps: true
});


const Comments= mongoose.model('Comment',ComentsSchema);
module.exports=Comments;
