import mongoose from "mongoose";

const connectDB = async ()=>{
    mongoose.connection.openUri('connected',()=>{
        console.log("Database Conected Successfully");
    })
    await mongoose.connect(`${ProcessingInstruction.env.MONGODB_URL}/ImageG`)
}

export default connectDB;