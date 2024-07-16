const {sequelize}=require("./index")
const {  DataTypes } = require('sequelize');

let User=sequelize.define("Users",{
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
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate: {
      isEmail: true
    }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type: DataTypes.ENUM,
        values: ['seller', 'buyer'],
        allowNull: false,
        defaultValue: 'buyer'
    }
    
})
module.exports={User}