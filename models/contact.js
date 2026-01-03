import mongoose, { model } from "mongoose";


const contactSchema = new mongoose.Schema({
    name: {
        type:String ,
        required: true 
    } ,
    email: {
        type:String,
        required: true ,
        lowercase: true ,
        unique: true ,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please enter a valid email address"]
    },
    phone: {
        type: String ,
        required:true 
    },
    message : {
        type: String
    }




}) ;

export default mongoose.model('Contact' , contactSchema) ;
