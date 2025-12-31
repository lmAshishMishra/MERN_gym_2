
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import './App.css';
//pages &components Imports
import Home from './pages/Home';
import Navbar from './component/Navbar';
// import WorkoutDetails from './component/WorkoutDetails';

// import { Component } from 'react';
function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
    <Navbar/>
    <div className="pages">
     <Routes>
      <Route path='/' element={<Home/>}>
      
      </Route>
     </Routes>

    </div>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
