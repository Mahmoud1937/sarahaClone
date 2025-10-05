import { model, Schema, Types } from "mongoose";


const messageSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    sender: { type: Types.ObjectId, ref: "User", required: true },
    receiver: { type: Types.ObjectId, ref: "User", required: true },
}, { timestamps: true })




export const Message = model("Message", messageSchema)