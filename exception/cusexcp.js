const errorHandler = async (err , req ,res , next)=>{
    err.statusCode = err.statusCode ||500;
    err.status = err.status || 'error';
    
    res.status(err.statusCode).json({
        status: err.status,
         message:err.message|| 'Internal Server Error',
    })
}
module.exports = errorHandler;