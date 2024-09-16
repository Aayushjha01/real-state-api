import express from 'express'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'

const app = express();
app.use(express.json())
app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);


app.listen(8800,()=>{
    console.log("Listening on port 8800")
})