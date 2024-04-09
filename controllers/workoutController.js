const Workout  =  require('../models/workoutModel');
const mongoose = require('mongoose')

// get all workouts
const getWorkouts =  async (req, res) =>  {
    const workouts = await Workout.find({}).sort({createdAt : -1});
    res.status(200).json(workouts);
}

// get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error : "no such workout"});
        return
    }
    const workout = await Workout.findById(id);

    if(!workout){
        res.status(404).json({error : "no such workout"})
    }
    else{
        res.status(200).json(workout)
    }
}


// create a workout
const createWorkout = async (req,res) => {
    const {title,load,reps} = req.body;

    try{
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error : error.message});
    };
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error : "no such workout"});
        return;
    }

    const workout = await Workout.findOneAndDelete({_id : id});
    if(!workout){
        res.status(404).json({error : "no such workout"});
    }
    else{
        res.status(200).json([workout,{mssg : "Workout Deleted"}]);
    }
}

// update a workout
const updateWorkout = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error : "no such workout"});
        return;
    }

    const workout = await Workout.findOneAndUpdate({_id : id},{...req.body});

    if(!workout){
        res.status(404).json({error : "no such workout"});
    }
    else{
        res.status(200).json([workout,{mssg : "Workout Updated"}]);
    }
}


module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}