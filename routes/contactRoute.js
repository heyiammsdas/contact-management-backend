import express from "express" ;
import Contact from "../models/contact.js" ;

const router = express.Router() ;
router.post("/" , async (req , res) => {
    try {
        const { name , email , phone , message } = req.body ;
        if(!name || !email || !phone ) {
            console.log("Name email phone is required!!") ;
            return res.status(400).json({msg: "name email phone is required!!"}) ;
        }
        const newContact = new Contact({
            name,
            email,
            phone,
            message: message || "" 
        }) 
        await newContact.save() ;
        return res.status(201).json({
            msg:"You have create a new contact" 
        
        })

    }
    catch(error) {

        console.error(error) ;
        return res.status(500).json({msg: "Server error"}) ;
    }
})

router.get('/' ,async (req ,res)=> {

   try {
    const contacts = await Contact.find() ;
    return res.status(200).json({ data: contacts   })
   }
   catch(error){
    console.error(error) ;
    return res.status(401).json({msg: "error"})
   }


})


export default router ;