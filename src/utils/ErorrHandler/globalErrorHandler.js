const globalErorrHandler=(error,req,res,next)=>{
          return res.status(error.cause||500).json({ success: false, message: error.message });

  }
  export default globalErorrHandler