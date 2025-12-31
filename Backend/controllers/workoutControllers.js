const Workout=require('../models/workoutModels')
const mongoose =require('mongoose')
//get all workout
exports.getWorkouts=async (req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1})
    if(!workouts)
        return res.status(400).json({error:"no enteries founde"})
    res.status(200).json(workouts)
}


//get a single workout by its id
exports.getWorkout=async(req,res)=>{
    const  {id} =req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
        
    
    }
    const workout=await Workout.find({_id:id})
    if(!workout)
        return res.status(404).json({error:"No such workout"})

    res.status(200).json(workout)
}



//create a new workout 

exports.createWorkout=async(req,res)=>{
    const {title,load,reps}=req.body;
    try{
const workout=await Workout.create({title,load,reps});
res.status(200).json(workout)
    }catch(error){
res.status(400).json({ error: error.message });

    }
   
}



//delete a workout by its id
exports.deleteWorkout=async(req,res)=>{
    const {id} =req.params;
     if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
        
    
    }
    const workout =await Workout.findOneAndDelete({_id:id})
    if(!workout){return res.status(400).json({error:"No such Workout to delete"})}
}


//update a workout by its id
exports.updateWorkout =async(req,res)=>{
const {id} =req.params;
 if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
        
    
    }
    const workout =await Workout.findOneAndUpdate({_id:id},
        {
            ...req.body
        }
    )
    if(!workout){
          return res.status(400).json({error:"No such workout"})
    }
    res.status(200).json(workout)
}