const isAuthorized=(...roles)=>{
 return (req,res,next)=>{
    if (!roles.includes(req.user.role)){
        return next(new Error("You are unauthorized!",{cause:401}))
    }
          return next()
 }
}

export default isAuthorized