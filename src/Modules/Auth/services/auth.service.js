import { User } from "../../../DB/Models/User/user.model.js"
import evenEmitter from "../../../utils/Emails/email.event.js"
import { compareHashing, hashed } from "../../../utils/Hashing/utils-hashing.js"
import { ciphertextEncrypted } from "../../../utils/Encryption/utlis-encryption.js"
import { generateToken, verifyToken } from "../../../utils/Token/token.js"
import asyncHandler from "../../../utils/ErorrHandler/asyncHandler.js"


//signUp

export const signUpservice = async (req, res, next) => {
      const { username, email, password, confirmPassword, age, phone, gender } = req.body

      // check if email used 
      const isEmailExist = await User.findOne({ email })
      if (isEmailExist) next(new Error("this email already exists", { cause: 409 }))

      // password hashing
      const hashedPassword = hashed({ plainText: password, rounds: Number(process.env.ROUNDS) })

      // phone encryption 
      const ciphertext = ciphertextEncrypted({ value: phone, secretKey: process.env.SECRET_KEY })

      await User.create({ ...req.body, password: hashedPassword, phone: ciphertext })

      //send email event
      evenEmitter.emit("sendEmail", email)
      return res.status(201).json({ success: true, message: "User created successfully" })

}
//active email

export const activateEmail = async (req, res, next) => {

      const { token } = req.params
      const { email } = verifyToken({ token, secretKey: process.env.JWT_SECRET_KEY })
      const user = await User.findOne({ email })
      if (!user) return next(new Error("User Not Found", { cause: 404 }))
      user.isActivated = true
      await user.save()
      return res.status(200).send(`
  <h2 style="color:green; font-family:Arial">
    Your account is activated. You can log in now.
  </h2>
`)

}


//login

export const loginService = async (req, res, next) => {

      const { email, password } = req.body
      const user = await User.findOne({ email })
      //check if the user exists
      if (!user) return next(new Error("Invaild email", { cause: 404 }))

      //check user acount is activated
      if (!user.isActivated) return next(new Error("you must be to active your acount first"))
      // compare password from FE and DB

      const passwordIsmatch = compareHashing({ plainText: password, hash: user.password })
      if (!passwordIsmatch) return next(new Error("Invaild Password", { cause: 401 }))


      user.isLoggedIn=true // only one device
      user.freezed=false
      await user.save()
      const token = generateToken({ payload: { id: user._id, email: user.email }, secretKey: process.env.JWT_SECRET_KEY, options: { expiresIn: "1h" } })
      //refreshToken
      const RefreshToken = generateToken({ payload: { id: user._id, email: user.email }, secretKey: process.env.JWT_REFRESH_SECRET_KEY, options: { expiresIn: "1d" } })

      return res.status(200).json({ success: true, message: "you are logining now", token, RefreshToken })


}






export const refreshToken = asyncHandler(async (req, res, next) => {

      const { refreshtoken } = req.headers
      const decoded = verifyToken({ token: refreshtoken, secretKey: process.env.JWT_REFRESH_SECRET_KEY })
      //generate accessToken 

      const accessToken = generateToken({ payload: { id: decoded.id, email: decoded.email }, secretKey: process.env.JWT_SECRET_KEY, options: { expiresIn: 20 } })

      return res.status(200).json({ seccess: true, message: "success refresh token", accessToken })


})



