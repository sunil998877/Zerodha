import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
import express from "express";
const app = express();
// if by default port is empty then 3001 port will work
const PORT = process.env.PORT || 3001;
// mongodb connection
connectDB();


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})