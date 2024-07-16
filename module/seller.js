const {sequelize}=require("./index")
const {  DataTypes } = require('sequelize');

let Seller=sequelize.define("Sellers",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
    
    },
    discount:{
        type: DataTypes.INTEGER,
        allowNull: false,
       
    },
    
})
module.exports={Seller}