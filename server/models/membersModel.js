const mongoose = require('mongoose');   

const memberSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    mobile:{
        type: Number,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    fullName:{
        type: String,
        required: true,
    }
});

const Member = mongoose.model('Member', memberSchema);
module.exports = Member;