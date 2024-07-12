import mongoose from "mongoose";
import user from "./user.js";

const weatherSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'user',
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }
    ,
    weatherData:{
        type:Object,
        required:true
    },
    weatherReport:{
        type:String,
        required:true
    }
})

export default mongoose.model('weather',weatherSchema);