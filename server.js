const express = require('express');
const workoutRoutes = require('./routes/workouts.js');
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

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
});

console.log('This line here.');