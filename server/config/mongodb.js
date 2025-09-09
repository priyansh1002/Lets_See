import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/ImageG`);
    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;

// import mongoose from "mongoose";

// const connectDB = async ()=>{
//     mongoose.connection.openUri('connected',()=>{
//         console.log("Database Conected Successfully");
//     })
//     await mongoose.connect(`${process.env.MONGODB_URL}/ImageG`)
// }

// export default connectDB;