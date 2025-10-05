import joi from "joi"
import { generalFields } from "../../Middleware/validation.middleware.js"



export const updateProfileSchema=joi.object({
    username:generalFields.username,
    age:generalFields.age,
    email:generalFields.email,
    phone:generalFields.phone

}).required()


export const changePassword=joi.object({
    oldPassword:generalFields.password.required(),
    newPassword:generalFields.password.not(joi.ref("oldPassword")).messages({
      "any.invalid": "New password must be different from the old password",
    }).required(),
    confirmPassword:generalFields.confirmPassword.valid(joi.ref("newPassword")).required()
}).required()