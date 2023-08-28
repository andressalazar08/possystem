const db = require('../config/dbConfig');

const User = db.users


const getUsers = async(req, res)=>{
    const users = await User.findAll({})

    res.status(200).json({
        message:"All users",
        users
    })
}


module.exports ={
    getUsers
}