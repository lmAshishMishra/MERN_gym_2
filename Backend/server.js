//importing express package
const express =require('express')
const dotenv =require('dotenv')
const mongoose=require('mongoose')
const workoutRoutes =require('./routes/workout')

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
//connect to db
mongoose.connect(process.env.MONGO_URL).then(()=>{
    //listen for request
    app.listen(PORT,()=>{
    console.log(`Server is upp and listening on port: ${PORT}`)
})
}).catch((error)=>{console.log(error)})

//PORT num
const PORT =process.env.PORT;


