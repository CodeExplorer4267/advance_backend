
import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async ()=>{
   try {
     const connectionInstance=await mongoose.connect(`mongodb+srv://rupambhadra478:rupam478@cluster0.w9few8s.mongodb.net/${DB_NAME}`)
     console.log(`\n MongoDB connected !! DB Host:${connectionInstance.connection.host}`)
   } catch (error) {
     console.log("Error is:",error);
     process.exit(1);
   }
}
export default connectDB;