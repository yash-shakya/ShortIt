import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    mainUrl:{
        type:String,
        require:true
    },
    shorturl:{
        type:String,
        require:true,
        unique:true
    }
},{timestamps:true})

const URL = mongoose.model("URL",urlSchema);

export default URL;