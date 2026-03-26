const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    age: {
        type: Number,
        min: 18,
        max: 100,
    },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);