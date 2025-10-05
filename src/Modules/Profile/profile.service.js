
import { User } from "../../DB/Models/User/user.model.js"
import { ciphertextEncrypted, decrypted } from "../../utils/Encryption/utlis-encryption.js"
import asyncHandler from "../../utils/ErorrHandler/asyncHandler.js"
import { compareHashing, hashed } from "../../utils/Hashing/utils-hashing.js"


export const getUserProfile = asyncHandler(async (req, res, next) => {

        const { user } = req
        const phoneDecrypt = decrypted({ ciphertext: user.phone, secretKey: process.env.SECRET_KEY })

        return res.status(200).json({ success: true, results: { ...user, phone: phoneDecrypt } })

})

export const UpdateUserProfile = asyncHandler(async (req, res, next) => {

        const { user } = req
        if (req.body.phone) {
                req.body.phone = ciphertextEncrypted({ value: req.body.phone, secretKey: process.env.SECRET_KEY })
        }
        await User.findByIdAndUpdate(user._id, { ...req.body }, { new: true, runValidators: true })

        return res.status(200).json({ success: true, message: "profile updated successfully" })

})


export const updatePassword = asyncHandler(async (req, res, next) => {
        const { oldPassword, newPassword } = req.body
        const user = await User.findById(req.user._id)
        const comparePassword = compareHashing({ plainText: oldPassword, hash: user.password })
        if (!comparePassword) return next(new Error("invalid old password", { cause: 401 }))
        user.password = hashed({ plainText: newPassword })
        user.isLoggedIn = false
        await user.save()
        return res.status(200).json({ success: true, message: "password updated successfully" })

})

export const deactivated = asyncHandler(async (req, res, next) => {
        const { password } = req.body
        console.log(password);
        const user = await User.findById(req.user._id)
        const invalidPassword=compareHashing({plainText:password,hash:user.password})
        if(!invalidPassword) return next(new Error("Invalid password",{cause:401}))
        user.freezed=true
user.isLoggedIn=false
await user.save()
        return res.status(200).json({ success: true, message: "account freezed now",user })
})