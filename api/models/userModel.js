module.exports =(sequelize, DataTypes)=>{

    const UserModel = sequelize.define('UserModel',{
        username:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        }
    
    },
    {paranoid:true},
    {timestamps:true}
    )

    return UserModel

}