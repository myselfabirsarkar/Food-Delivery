import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect(mongodb+srv://<username>:<password>@<cluster-name>.<random-id>.mongodb.net/<database-name>?retryWrites=true&w=majority
);
}
