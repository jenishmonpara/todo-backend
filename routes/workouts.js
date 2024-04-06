const express = require('express')

const  router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg : 'Get all the workouts'});
});

// GET single workout
router.get('/:id', (req, res) => {
    res.json({mssg : 'Get workout with  id'});
});

//  POST a new workout
router.post('/', (req, res) => {
    res.json({mssg : 'POST a new workout.'});
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg : 'DEL a new workout.'});
});

// UPDATE a  workout
router.patch('/:id', (req, res) => {
    res.json({mssg : 'PATCH a new workout.'});
});
module.exports = router