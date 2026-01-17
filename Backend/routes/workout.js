const express=require('express');

const Workout=require('../models/workoutModels')

const {createWorkout,getWorkouts,getWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutControllers');
const requireAuth = require('../middlewares/requireAuth');
const router =express.Router();
 router.use(requireAuth);
/**
 
* Routes: /api/workouts
*Methods:GET
*Description :get all workout
* Parameters: none
 */


router.get('/',getWorkouts)
/**
 
* Routes: /api/workouts/:id
*Methods:GET
*Description :get all workout by its id
*Access :public
* Parameters: id
 */


router.get('/:id',getWorkout)

/**
 
* Routes: /api/workouts
*Methods:POST
*Description :Create/add new workout
*Access :public
* Parameters: none
 */


router.post('/',createWorkout)

/**
 
* Routes: /api/workouts
*Methods:DELETE
*Description :delete a workout bt its id
*Access :public
* Parameters: none
 */


router.delete('/:id',deleteWorkout)

/**
 
* Routes: /api/workouts
*Methods:PATCH
*Description :UPDATE a workout bt its id
*Access :public
* Parameters: id
 */


router.patch('/:id',updateWorkout)

module.exports=router
