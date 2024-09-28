const userDB=require('../Db/userDao')
const apperror=require('../exception/AppError')




const register= async(reqbody)=>{
    const user=await userDB.findByEmail(reqbody.email)
   if(user){
    return new apperror('user already exists',400)
   }
   const newUser=await userDB.createUser(reqbody)
   return newUser;
}


module.exports={
    register,
}