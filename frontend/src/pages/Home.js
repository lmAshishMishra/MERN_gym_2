
import React, {useEffect, useState} from 'react'
import WorkoutDetails from '../component/WorkoutDetails'




//component

const Home = () => {
    const [workouts,setWorkout]=useState([])


  useEffect(()=>{
const fetchWorkouts=async () =>{
  const response=  await fetch('/api/workouts/')
  const json =await response.json()
  if(response.ok){
    setWorkout(json)
  }
}
fetchWorkouts()
  },[])

//key ={workout._id}
  return (
    <div className="home">
   <div className='workouts'>
{
    workouts && workouts.map((workout)=>(
        // <p>{workout.title}</p>
        <WorkoutDetails key={workout._id} workout={workout}/>
    ))
}
   </div>
    </div>
  )
}

export default Home
