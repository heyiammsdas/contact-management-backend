import mongoose from "mongoose";
import dotenv from "dotenv"
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI) ;
        console.log("Mongodb database connected") ;
    }
    catch(error) {
        console.error(error) ;
    }


}


export default connectDB ;