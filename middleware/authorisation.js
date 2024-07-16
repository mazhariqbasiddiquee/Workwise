const authorisation=(role)=>{
    return (req,res,next)=>{
        if(req.body.role==role){
            next()
        }else{
            res.status(401).json({msg:"You are not authorised"})
        }
    }
}

module.exports={authorisation}