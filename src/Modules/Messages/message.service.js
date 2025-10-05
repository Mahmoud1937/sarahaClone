import { Message } from "../../DB/Models/message/message.model.js";
import { User } from "../../DB/Models/User/user.model.js";
import asyncHandler from "../../utils/ErorrHandler/asyncHandler.js";
import { flags } from "./message.validation.js";


export const sendMessage = asyncHandler(async (req, res, next) => {


    const { content, receiver } = req.body
    // check if the receiver is existance
    const user = await User.findById(receiver)
    if (!user) return next(new Error("user is not avalible", { cause: 404 }))
    // create message
    const results = await (await Message.create({ content, receiver, sender: req.user._id })).populate([
        { path: "sender", select: "email ,username -_id" }, { path: "receiver", select: "email ,username -_id" }
    ])

    return res.status(201).json({ success: true, message: "message sent successfully", results })

}
)
export const readMessage = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const { user } = req
    const message = await Message.findById(id).populate([
        { path: "sender", select: "username email -_id" },
        { path: "receiver", select: "username email -_id " }])
    console.log(message);
    if (!message) return next(new Error("message not found"))
    if (message.receiver?.email == user.email || message.sender?.email == user.email) return res.status(201).json({ success: true, message })

    return next(new Error("Unauthorized!"))




}
)
export const readAllMessages = asyncHandler(async (req, res, next) => {

    const { flag } = req.query
    const { user } = req
    let results;
    if (flag == flags.outbox) {
        results = await Message.find({ sender: user._id }).populate([
            { path: "sender", select: "username email -_id" },
            { path: "receiver", select: "username email -_id " }]).select("-_id")        //outbox

    } else {

        results = await Message.find({ receiver: user._id }).populate([
            { path: "sender", select: "username email -_id" },
            { path: "receiver", select: "username email -_id"}]).select("-_id")          //inbox
    }
 if (!results||results.length==0){

     return next(new Error("not found messages",{cause:404}))
 }
    return res.status(200).json({ success: true, message: results })

})