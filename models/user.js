const mongoose = require('mongoose');
const uniqueValidator =require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email:{ type:string , require:true , unique:true},
    password: { type:String , type:true}
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User',userSchema);
