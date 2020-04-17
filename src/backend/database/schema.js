var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
    name: {
        type: String, 
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    gender:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    dob: {
        type:Date,
        required: true
    },
    
    phone:{
        type:Number,
        required: true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('User', User);