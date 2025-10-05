
import joi from "joi"
import { generalFields } from "../../Middleware/validation.middleware.js"

// Register schema validation

export const registerSchema = joi.object({
    username: generalFields.username.required(),
    email: generalFields.email.required(),
    phone: generalFields.phone.required(),
    password: generalFields.password.required(),
    confirmPassword: generalFields.confirmPassword.required(),
    gender: generalFields.gender.required(),
    age: generalFields.age.required(),
    role:generalFields.role

}).required()

// login schema validation

export const loginSchema = joi.object({
    email: generalFields.email.required(),
    password: generalFields.password.required()


}).required()