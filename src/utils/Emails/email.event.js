import {EventEmitter} from "events"
import sendEmails, { subjects } from "./sendEmails.js"
import { signupHtml } from "./generate-html.js"
import { generateToken } from "../Token/token.js"


const evnetEmitter =new EventEmitter()

export default  evnetEmitter.on("sendEmail",(email)=>{

  const token=generateToken({payload:{email},secretKey:process.env.JWT_SECRET_KEY})
   const link =`http://localhost:3000/auth/activate-account/${token}`

    sendEmails({ to: email, subject: subjects.register, html: signupHtml(link) })
})