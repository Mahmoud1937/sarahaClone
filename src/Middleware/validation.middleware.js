import joi from "joi"
import { genders, roles } from "../DB/Models/User/user.model.js"

const validation = (schema) => {
    
    return (req, res, next) => {
        const data = { ...req.body, ...req.query, ...req.params }
        const results = schema.validate(data, { abortEarly: false })
        
        if (results.error) {
            const errorMessageList = results.error.details.map(obj => obj.message)
        
            return next(new Error(errorMessageList, { cause: 401 }))
        }
        return next()
    }

}

export const generalFields={
       username: joi.string().min(3).max(20),
        email: joi.string().email(),
        password: joi.string(),
        confirmPassword: joi.string().valid(joi.ref("password")),
        age: joi.number().min(18).max(80),
        phone: joi.string(),
        gender: joi.string().valid(...Object.values(genders)),
        role:joi.string().valid(...Object.values(roles))
}

export default validation