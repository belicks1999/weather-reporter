import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },

    location:{
        type:String,
        required:true
    }
})

export default mongoose.model('User',userSchema);