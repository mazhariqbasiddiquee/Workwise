const express=require("express")
const userRouter=express.Router()
const {User}=require("../module/user")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require("dotenv").config()

userRouter.get("/",async(req,res,next)=>{
    try{
        let data=await User.findAll()
        res.status(200).json({msg:data})
    }catch(err){
         next(err)
    }
})
userRouter.post("/signup", async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;

     
        bcrypt.hash(password, 10, async function(err, hash) {
            if (err) {
                return next(err); 
            }

            try {
                await User.create({ name, email, role, password: hash });
                res.status(201).json({ msg: "User created" }); 
            } catch (error) {
                next(error); 
            }
        });

    } catch (err) {
        next(err);
    }
});

userRouter.post("/login",async(req,res,next)=>{
   
    try{
        let {email,password}=req.body
  
        let data=await User.findOne({where:{email}})
        console.log(data,email)
      
        if(data){
            bcrypt.compare(password, data.password, function(err, result) {
               
                if(result){
                    let token=jwt.sign({
                        data: data.role,
                        userid:data.id
                      }, process.env.SECRET, { expiresIn: 60 * 60 });
                    res.status(200).json({msg:"login Successfull",token})
                }else{
                    res.status(401).json({msg:"Invalid password"})
                }
            });
           
        }else{
            res.status(401).json({msg:"Invalid Email"})
           
        }
    }catch(err){
        next(err)
    }
})


module.exports={userRouter}
