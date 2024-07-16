var jwt = require('jsonwebtoken');
require("dotenv").config()

const auth=function(req,res,next){
    let token=req.headers.authorization

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
           if(decoded){
            console.log(decoded)
            req.body.role=decoded.data
            req.body.userid=decoded.userid
            next()
           }else{
            res.status(401).json({msg:"Please login"})
           }
      });

}

module.exports={auth}

