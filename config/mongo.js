const mongoose = require('mongoose');
const {dburi} = require('./env')

const mongodbConnect = async ()=>{
    await mongoose.connect(dburi)
    .then(()=>{console.log('MONGO DB START')})
    .catch((err)=> {
        console.log(`MONGO CONNECTON FAILED ${err}`);
        
    })
}
module.exports = {
    mongodbConnect,
}