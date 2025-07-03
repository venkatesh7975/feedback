import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { mongo, Mongoose } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app=express();
app.use(cors());
app.use(express.json());//to parse incoming data
app.listen(3001,function(){
    console.log("server running at localhost:3001")
});


//connect the database using mongoose 

mongoose.connect("mongodb://localhost:27017/feedback").then(function(){
    console.log("connected to database")
}).catch(function(err){
    console.log(err)
})

//create schema from database 

const userSchema=new mongoose.Schema({
    email:String,
    password:String
})

//create model for the model 
const User=mongoose.model("User",userSchema);


//post api for register
app.post("/register",async function(req,res){
    const {email,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);
    const user=new User({email:email,password:hashedPassword});
    try{
        const result=await user.save();
        res.send(result);
    }catch(err){
        res.send(err);
     }

})