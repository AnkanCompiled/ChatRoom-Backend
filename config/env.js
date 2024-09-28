require('dotenv').config();

module.exports ={
    port: process.env.PORT || 3000,
    dburi:process.env.DB_URI ||"mongodb://localhost:27017/Chat-App-V2",
    jwtSecret:process.env.JWT_SECRET || "arifIslam123",
}