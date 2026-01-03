import express from "express" ;
import dotenv from "dotenv" ;
import connectDB from "./config/db.js";
import contactRoutes from "../backend/routes/contactRoute.js"
import cors from "cors" ;
const app = express() ;
dotenv.config() ;
app.use(cors()) ;
app.use(express.json()) ;

connectDB();



app.use('/api/contacts' , contactRoutes) ;

app.get('/' , (req , res)=> {
    return res.json({msg:"contact api is running!!"}) 
})

const port = process.env.PORT || 3000 ;
app.listen(port , () => {
    console.log(`Server is running on ${port}`) ;
})




