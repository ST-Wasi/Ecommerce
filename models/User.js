const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
        trim:true,
        required:true
    },
    lastname: {
        type:String,
        trim:true,
        required:true,
    },
    email: {
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    }
})

let User = mongoose.model('User', userSchema);

module.exports = User;