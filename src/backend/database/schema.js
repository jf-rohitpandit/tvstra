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
    },
    avtar:{
        data:Buffer,
        contentType: String,
    },

    role:{
        type: String,
        default: 'user'
    },
    speciality:{
        type: String,
        // default: ''
    },
    qualification:{
        type: String,
        // default: ''
    },
    treatmentList:{
        type: String,
        default: ''
    },
    location:{
        type: String,
        // default: ''
    },
    hospitalList:{
        type: String,
        // default: ''
    },
    achievement:{
        type: String,
        default: ''
    },
    awards:{
        type: String,
        // default: ''
    },
    experience:{
        type: String,
        // default: ''
    },
    avgFees:{
        type: String,
        // default: ''
    },
    resume:{
        data: Buffer,
        contentType: String
    }

})

module.exports = mongoose.model('User', User);