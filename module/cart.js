const {sequelize}=require("./index")
const {  DataTypes } = require('sequelize');
const {User}=require("../module/user")

let Cart=sequelize.define("Cart",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    userid:{
        type:DataTypes.INTEGER,
       
        allowNull:false,
        references:{
            model:User,
            key:"id"
        }
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
User.hasMany(Cart,{foreignKey:"userid"})
Cart.belongsTo(User,{foreignKey:"userid"})
module.exports={Cart}