const userservice=require('../services/userservice.js')


const register=async(req,res,next)=>{
    try{
        const ans=await userservice.register(req.body)
        if(ans){
            res.status(201).json(ans)
        }
    }catch(err){
        next(err)
    }
    
}



module.exports={
    register,
}