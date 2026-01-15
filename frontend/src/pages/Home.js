
import React, {useEffect} from 'react'
import WorkoutDetails from '../component/WorkoutDetails'
import Workoutform from '../component/Workoutform'

import { useWorkoutsContext } from '../hooks/useWorkoutsContext'






//component

const Home = () => {
    // const [workouts,setWorkout]=useState([])
  const {workouts,dispatch}=useWorkoutsContext()

  useEffect(()=>{
const fetchWorkouts=async () =>{
  const response=  await fetch('/api/workouts/')
  const json =await response.json()
  if(response.ok){
    //useState
    // setWorkout(json)
    dispatch({type:'SET_WORKOUTS',payload:json})
  }
}
fetchWorkouts()
  },[dispatch])

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
   <Workoutform/>
    </div>
  )
}

export default Home
