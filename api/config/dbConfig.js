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
db.User = require('../models/userModel')(sequelize, DataTypes)
db.Product =require('../models/productModel')(sequelize, DataTypes)
db.Category = require('../models/categoryModel')(sequelize, DataTypes)


//models relationships
db.Category.hasMany(db.Product);
db.Product.belongsTo(db.Category)

db.sequelize.sync({force:true})
.then(()=>{
    console.log('Resync on DB!')
})


module.exports = db;