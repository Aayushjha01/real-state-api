import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js';
export const register= async(req,res)=>{
   const {username,email,password} = req.body;
   console.log(req.body)
   //hashed password
   const hashedPassword= await bcrypt.hash(password,10);
   console.log(hashedPassword);
   //connection with db
   const newUser = await prisma.User.create({
      data:{
         username,
         email,
         password:hashedPassword

      }
   })
   console.log(newUser)

}
export const login=(req,res)=>{
    
}
export const logout=(req,res)=>{
    
}