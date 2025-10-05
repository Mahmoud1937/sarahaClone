
import mongoose from "mongoose";

export const genders = {
    male: "male",
    female: "female"
}

export const roles={
    user:"user",
    admin:"admin"
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
        unique: [true,"username already used before "]
    },
    age: Number,
    email: {
        type: String,
        required: true,
        unique: [true,"Email already exist"],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter valid email "],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        // match: [/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/, "please enter avild phond number "]
    },
    gender: {
        type: String, enum: Object.values(genders),

    },
    profileImage: String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    isActivated: {
        type: Boolean,
        default: false
    },
    freezed:{type:Boolean,default:false},
    role:{type:String,enum:Object.values(roles),default:roles.user},
    isLoggedIn:{
        type:Boolean,default:false
    }



}, { timestamps: true })

export const User = mongoose.model("User", userSchema)