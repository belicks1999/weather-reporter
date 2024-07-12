import User from "../models/user.js";


export const createUser= async(req,res)=>{

    try {

        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
        
    } catch (error) {

        res.status(400).send(error);
        
    }

   
}

export const updateLocation= async(req,res)=>{

    try {

        const user = await User.findOneAndUpdate(
            {
                email:req.body.email

            },
            {
                location:req.body.location
            },
            {
                new:true
            }
        );

        if(!user){
            return res.status(404).send();
        }

        res.send(user);
        
    } catch (error) {

        res.status(400).send(error);
        
    }

};