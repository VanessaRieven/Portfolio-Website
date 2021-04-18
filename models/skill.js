const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    skill: {type: String,unique:true,required: true},
    percentage: {type: Number,required: true},
    type: {type: String,required: true},
});



