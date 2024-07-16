const express=require("express")
const sellerRouter=express.Router()
const {Seller}=require("../module/seller")
const {authorisation}=require("../middleware/authorisation")

sellerRouter.get("/",async(req,res,next)=>{
    try{
        let data=await Seller.findAll()
        res.status(200).json({msg:data})
    }catch(err){
         next(err)
    }
})


sellerRouter.post("/add",authorisation("seller"),async(req,res,next)=>{
    try{
        let {name, category, description, price, discount}=req.body
         await Seller.create({name,category,description,price,discount})
        res.status(201).json({msg:"product created"})
    }catch(err){
         next(err)
    }
})


sellerRouter.patch("/update/:id",authorisation("seller"),async(req,res,next)=>{
    try{
        let {id}=req.params
        const [updated] = await Seller.update(req.body, {
            where: { id }
          });
     
          if (updated) {
          
            res.status(200).json({ msg: "product updated" });
          } else {
            res.status(404).json({ msg: 'product  not found' });
          }
       
    }catch(err){
         next(err)
    }
})


sellerRouter.delete("/delete/:id",authorisation("seller"),async(req,res,next)=>{
    try{
        let {id}=req.params
        const deleted = await Seller.destroy( {
            where: { id }
          });
      
          if (deleted) {
          
            res.status(200).json({ msg: "product deleted" });
          } else {
            res.status(404).json({ msg: 'product  not found' });
          }
       
    }catch(err){
         next(err)
    }
})

module.exports={sellerRouter}