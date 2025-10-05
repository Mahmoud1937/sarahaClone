import { connectDB } from "../DB/connection.js";
import authRouter from "../Modules/Auth/auth.controller.js";
import userRouterProfile from "../Modules/Profile/profile.controller.js"
import globalErorrHandler from "../utils/ErorrHandler/globalErrorHandler.js";
import messageRouter from "../Modules/Messages/message.controller.js"
import cors from "cors"
export const bootstarp = async (app, express) => {
  await connectDB()
  app.use(cors())
  app.use(express.json())
  app.use("/auth", authRouter)
  app.use("/user", userRouterProfile)
  app.use("/message",messageRouter)
  app.all(/.*/, (req, res) => {
    res.status(404).json({ success: false, message: "Not Found Page" });
  });


  app.use(globalErorrHandler)
}