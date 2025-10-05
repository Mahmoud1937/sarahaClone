
import joi from "joi"
import { Types } from "mongoose"

 export const sendMessageSchema=joi.object(
    {
        content:joi.string().required(),
        receiver:joi.custom((value,helper)=>{
          if (Types.ObjectId.isValid(value))return true
        return helper.message("Invalid Id")
        }) 
    }
).required()
 export const getMessageSchema=joi.object(
    {
       
        id:joi.custom((value,helper)=>{
          if (Types.ObjectId.isValid(value))return true
        return helper.message("Invalid Id")
        }) 
    }
).required()

export const flags={
  inbox:"inbox",
  outbox:"outbox"
}

 export const getAllMessageSchema=joi.object(
    {
flag:joi.string().valid(...Object.values(flags)).required()
    }
).required()