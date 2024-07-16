const express=require("express")
const cartRouter=express.Router()
const {authorisation}=require("../middleware/authorisation")
const { Cart } = require("../module/cart")
const {Seller}=require("../module/seller")


cartRouter.get("/",authorisation("buyer"),async(req,res,next)=>{
    try{
      
        let data=await Cart.findAll()
        res.status(200).json({msg:data})
    }catch(err){
         next(err)
    }
})

cartRouter.get("/:name",authorisation("buyer"),async(req,res,next)=>{
    try{
        let {name}=req.params
        let data=await Seller.findAll({where:{name}})
        res.status(200).json({msg:data})
    }catch(err){
         next(err)
    }
})


cartRouter.post("/addtocart",authorisation("buyer"),async(req,res,next)=>{
    try{
        let {name, category, description, price, discount,userid}=req.body
        const existingProduct = await Cart.findOne({ where: { name } });
        if (existingProduct) {
          return res.status(400).json({ message: 'Product is already in the cart' });
        }
         await Cart.create({name,category,description,price,discount,userid})
        res.status(201).json({msg:"Product added to cart"})
    }catch(err){
         next(err)
    }
})

cartRouter.delete("/remove/:id",authorisation("buyer"),async(req,res,next)=>{
    try{
        let {id}=req.params
        const deleted = await Cart.destroy( {
            where: { id }
          });
      
          if (deleted) {
          
            res.status(200).json({ msg: "product removed from cart" });
          } else {
            res.status(404).json({ msg: 'product  not found' });
          }
       
    }catch(err){
         next(err)
    }
})

module.exports={cartRouter}