import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config
const app = express()
const port =4000

// Using express we can access backend from frontend
// CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served

//middleware
app.use(express.json())
app.use(cors())

// DB  Connection
connectDB();

// api endpoint
 app.use("/api/food",foodRouter)
 app.use("/images",express.static('uploads'))
 app.use("/api/user",userRouter)
 app.use("/api/cart",cartRouter)
 app.use("/api/order",orderRouter)

// GET is a HTTP method used to request data from a specified resource
// POST is a HTTP method used to send data to a server to create/update a resource
app.get("/",(req,res)=>{
    res.send("API Working ")
})

// To run the express server, we need to call the listen method on the and pass in the port
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://hilloldas2002:cqHR6l2Cu2FmAvU3@food.uu8v2mg.mongodb.net/?
// retryWrites=true&w=majority&appName=Food