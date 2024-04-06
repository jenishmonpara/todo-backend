const express = require('express');
const workoutRoutes = require('./routes/workouts.js');
const mongoose = require('mongoose');
require('dotenv').config();

//express app
const app = express();


// middleware
app.use(express.json()) // enables passing req object to routes
app.use((req, res, next) => {
    console.log();
    next();
});

// routes
app.use('/api/workouts/',workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // we listen to requests only once  we are connected to the db
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port ' + process.env.PORT);
});
    })
    .catch((error) => {
        console.log(error);
    });



console.log('This line here.');