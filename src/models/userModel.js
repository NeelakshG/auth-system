import mongoose from "mongoose"

//making the schema 
const userSchama = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true
    }, 
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    }, 
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: true
    }, 
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("User", userSchama)

export default User