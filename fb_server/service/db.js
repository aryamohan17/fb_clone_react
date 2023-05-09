const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/fb_clone_server',{useNewUrlParser:true})

const User = mongoose.model('User',{
firstname:String,
lastname:String,
email:String,
password:String,
dob:String,
// gender:String,
profilepic:String
})
module.exports={
    User
}