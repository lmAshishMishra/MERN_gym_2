import React from 'react'
import DeleteButton from '../component/DeleteButton'
const WorkoutDetails = ({workout}) => {
  return (
   <div className='workout-details'>
    <h4>{workout.title}</h4>
  <p><strong>Load (in kgs):</strong>{workout.load}</p>
  <p><strong>Reps:</strong>{workout.reps}</p>
  <p>{workout.createdAt}</p>
 <DeleteButton/>
   </div>
  )
}

export default WorkoutDetails
