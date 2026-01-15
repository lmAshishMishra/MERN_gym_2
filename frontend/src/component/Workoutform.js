import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';


const Workoutform = () => {
  const {dispatch} =useWorkoutsContext()
const [title,setTitle] =useState('');
const [load,setLoad] =useState('');
const [reps,setReps] =useState('');
const[error,setError] =useState(null);


const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };

    try {
        const response = await fetch('/api/workouts/', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // First check if the response is okay
        const text = await response.text(); // Get response as text first
        const json = text ? JSON.parse(text) : {}; // Only parse if text exists

        if (!response.ok) {
            setError(json.error || 'Something went wrong on the server');
        } else {
            setError(null);
            setTitle('');
            setLoad('');
            setReps('');
            dispatch({type:'CREATE_WORKOUT',payload:json})
            console.log('New Workout Added:', json);
        }
    } catch (err) {
        setError('Could not connect to the server.');
    }
};
  return (
  <form className='create' onSubmit={handleSubmit}>
<h3>Add a new workout</h3>

<label>Excersize Title</label>
<input type='text'value={title} onChange={(e)=>setTitle(e.target.value)}/> 

<label>Load (in Kg'):</label>
<input type='number'value={load} onChange={(e)=>setLoad(e.target.value)}/> 

<label>Reps:</label>
<input type='number'value={reps} onChange={(e)=>setReps(e.target.value)}/> 
 
<button>Add Workout</button>
{error && <div className='error'>{error}</div>}
  </form>
  )
}

export default Workoutform
