const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    type:{
        type: String,
        required: true,
    },
    code:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    details:[
        {
            type:{
                type: String,
                required: true,
            },
            min:{
                type: Number,
                required: true,
            },
            max:{
                type: Number,
                required: true,
            },
            rate:{
                type: Number,
                required: true,
            },
            tenure:{
                type: Number,
                required: true,
            }

        }
    ],
});

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;   