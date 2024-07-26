
import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async ()=>{
   try {
     const connectionInstance=await mongoose.connect(`url/${DB_NAME}`)
     console.log(`\n MongoDB connected !! DB Host:${connectionInstance.connection.host}`)
   } catch (error) {
     console.log("Error is:",error);
     process.exit(1);
   }
}
export default connectDB;
