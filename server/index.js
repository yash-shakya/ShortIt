import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/router.js";
import cors from "cors";
dotenv.config()

const PORT=process.env.PORT || 4000;
const mongoUrl=process.env.MONGODB_HOST

const app=express();

mongoose.connect(mongoUrl)
.then(console.log("MongoDB connected successfully"))

app.use(express.json())

routes(app);

app.listen(PORT,()=>console.log(`currently running on https://localhost:${PORT}`))

