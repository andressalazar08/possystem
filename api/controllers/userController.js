const db = require('../config/dbConfig');

const User = db.users


const getUsers = async(req, res)=>{
    const users = await User.findAll({})

    res.status(200).json({
        message:"All users",
        users
    })
}


const addUser = async (req, res)=>{
    
    const userFound = await User.findOne({where:{username:req.body.username}})

    if(userFound ===null){
        const user = await User.create(req.body)
        res.status(200).json({
            message:"User created successfully",
            user
        })
    }else{
        res.status(403).json({
            message:"User already exists"
        })

    }
  
}

module.exports ={
    getUsers,
    addUser
}