const mongoose = require("mongoose");

module.exports = connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected");
    } catch (err){
        console.error("❌ DB Error:", error.message);
        process.exit(1);
    }
};