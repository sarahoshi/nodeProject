const mongoose = require("mongoose")
const {Schema} = mongoose
const userSchema = new Schema({
    id: String,
    googleId: String,
    username: String,
    fullname: String,
    avatar: String,
    gender: String,
    hobbies: String,
    level: String,
    testResult: String,
    address: String,
    email: String,
    birthday: Date,
    status: String
})

mongoose.model("users", userSchema)