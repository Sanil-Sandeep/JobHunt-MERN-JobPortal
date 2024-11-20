import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req,res) => {
    try{
        const {fullname, email, phoneNumber, password, role} = req.body;
        if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            });
        };
        const user = await User.find({email});
        if(user){
            return res.status(400).json({
                message:'User already exist with this email.',
                success:false,
            })
        }
        const hashPasswoed = await bcrypt.hash(password, 10);

        await User.create({
            fullname, 
            email, 
            phoneNumber, 
            password:hashPasswoed,
            role
        })
    } catch (error) {

    }
}


