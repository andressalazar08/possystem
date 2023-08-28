const dotenv = require('dotenv').config()

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'mysql',
        operatorsAliases:0,
        pool:{
            min:0,
            max: 5,
            acquire:30000,
            idle:10000
        
        }
    }
)


sequelize.authenticate()
.then(()=>{
    console.log('DB connected')
})
.catch(err=>{
    console.log('Error on db ' +err)
})


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


//model definition
db.users = require('../models/userModel')(sequelize, DataTypes)

db.sequelize.sync({force:true})
.then(()=>{
    console.log('Resync on DB!')
})


module.exports = db;