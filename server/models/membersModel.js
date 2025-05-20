const mongoose = require('mongoose');   

const memberSchema = new mongoose.Schema({
    userID:{
        type: String,
        required: true,
    },
    mobile:{
        type: String,
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