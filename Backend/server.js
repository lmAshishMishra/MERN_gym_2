//importing express package
const express =require('express')
const dotenv =require('dotenv')
const mongoose=require('mongoose')
//Routes
const workoutRoutes =require('./routes/workout');
const userRoutes =require('./routes/user');

dotenv.config()

// Express App
const app =express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


//Routes
app.get('/',(req,res)=>{
    res.json({msg:'Welcome to our appln'})
})
app.use('/api/workouts/',workoutRoutes)
app.use('/api/user/',userRoutes)
//connect to db
mongoose.connect(process.env.MONGO_URL).then(()=>{
    //listen for request
    app.listen(PORT,()=>{
    console.log(`Server is upp and listening on port: ${PORT}`)
})
}).catch((error)=>{console.log(error)})

//PORT num
const PORT =process.env.PORT;


