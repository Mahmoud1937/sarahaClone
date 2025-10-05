
import { User } from "../DB/Models/User/user.model.js";
import asyncHandler from "../utils/ErorrHandler/asyncHandler.js";
import { verifyToken } from "../utils/Token/token.js";
export const isAuthenticated= asyncHandler( async (req, res, next) => {

    
    //token from frot-end 
    const { authorization } = req.headers
    //check token exist
if(!authorization)return next(new Error("Token is required ",{cause:403}))
    //check if it is Bearer
    if (!authorization.startsWith("Bearer"))return next(new Error(" Invalid Token  ",{cause:403}))
    const accessToken = authorization.split(" ")[1]
    //verify token
    const { id } = verifyToken({token:accessToken,secretKey:process.env.JWT_SECRET_KEY })
    //check user
    const user = await User.findOne({ _id: id }).select(" -password").lean()
    if (!user) return res.status(404).json({ success: true, message: "User Not Found" })
     if(!user.isLoggedIn) return next(new Error("try to login again!"))
    req.user = user
    return next()

})