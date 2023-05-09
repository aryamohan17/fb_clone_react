const db = require('./db')

const register =(firstname,lastname,email,password,dob,profilepic)=>{
    return db.User.findOne({email}).then(result=>{
        if(result){
            return{
                status:false,
                statusCode:404,
                message:"user already exist"
            }
        }
        else{
            const newUser = new db.User({firstname,lastname,email,password,dob,profilepic})
            newUser.save();
            return{
                status:true,
                statusCode:200,
                message:"Sucessfully register"

            }
        }
    })
}
const login =(email,password)=>{
    return db.User.findOne({email,password}).then(result=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                message:"sucessfully login"
            }
        }
        else{
            return{
                status:false,
                statusCode:404,
                message:"email or password incorrect"
            }
        }
    })
}
module.exports={
    register,login
}