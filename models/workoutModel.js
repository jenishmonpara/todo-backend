const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    reps : {
        type : Number,
        required : true
    },
    load : {
        type : Number,
        required : true
    }
}, {timestamps :  true});

// model is an object used to interact with the DB
module.exports = mongoose.model('Workout', workoutSchema);