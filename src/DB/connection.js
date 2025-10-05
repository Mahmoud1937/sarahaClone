import mongoose from "mongoose";
import { User } from "./Models/User/user.model.js";

export const connectDB=async()=>{
try {
   

    await mongoose.connect(process.env.CONNECTION_URI)

    console.log("DB connected succssfully")
// await User.init();
} catch (error) {
    console.log("connect failed",error);
}

}