const mongoos = require('mongoose');
const bcrypt = require('bcryptjs');

//schema 
const userSchema = new mongoos.Schema({
 name:{type:String ,required :true},
 email:{type:String ,required :true,unique:true},
 password:{type:String ,required :true}

});
// hash password before save event ;
userSchema.pre('save',async function (next) {
    if(this.isModified('password')) {
        this.password =await bcrypt.hash(this.password,10);
    }
    next()
})
const USER = mongoos.model('users',userSchema);
module.exports = USER;