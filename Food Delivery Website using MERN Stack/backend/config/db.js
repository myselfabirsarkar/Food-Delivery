import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://hilloldas2002:cqHR6l2Cu2FmAvU3@food.uu8v2mg.mongodb.net/Food').then(()=>console.log("DB Connected"));
}