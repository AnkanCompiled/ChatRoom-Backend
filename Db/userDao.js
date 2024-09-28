const USER  = require('../model/user')
const createUser = async(userBody)=>{
    const data= new USER(userBody)
    data.save()
    return data;
}

const findByEmail = async(email)=>{
    const response=await USER.findOne({email})
    return response;
}
module.exports={
    createUser,
    findByEmail,
}