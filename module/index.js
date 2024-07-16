const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()

const sequelize=new Sequelize("Workwise","postgres",process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:"postgres",
    "dialectOptions": {
        "ssl": {
            "require": true,
            "rejectUnauthorized": false
        }
    }
})




module.exports={sequelize}