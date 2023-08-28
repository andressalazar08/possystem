module.exports =(sequelize, DataTypes)=>{

    const UserModel = sequelize.define('UserModel',{
        username:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        }
    
    },
    {timestamps:true}
    )

    return UserModel

}