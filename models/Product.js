const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    globalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type:String,
        trim:true,
        required:true,
    },
    image: {
        type:String,
        trim:true,
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    description:{
        type:String,
        trim:true
    }
})

let Product = mongoose.model('Product', productSchema);

module.exports = Product