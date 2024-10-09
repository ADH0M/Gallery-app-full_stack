const { DataTypes } = require("sequelize");
const connectMySQL = require("../database/connectMySql");


const User = connectMySQL.define('User' , {
    id    : { type:DataTypes.INTEGER     , allowNull:false , autoIncrement:true , unique:true , primaryKey:true} ,
    name  : { type:DataTypes.STRING(255) , allowNull:false },
    email : { type:DataTypes.STRING(255) , allowNull:false , unique:true },
    phones: { type:DataTypes.JSON , allowNull:false , validate:{
        isArray(value){
            if(!Array.isArray(value)){
                throw new Error('image must be an array')
            }
        }
    }},
    password : {type : DataTypes.STRING(255) , allowNull: false },
    gender   : {type : DataTypes.ENUM('male' , 'female' ) , allowNull:false  },
    role     : {type : DataTypes.ENUM( 'manager','admin' , 'cunsumer' ) , defaultValue:'cunsumer' , allowNull:true  },
    profileImg : {type : DataTypes.STRING(255) , allowNull: true  },
    birthdate  :{type:DataTypes.STRING(255) , allowNull:true ,validate:{
        notEmpty:true ,
        is: /^\d{4}-\d{2}-\d{2}$/ // birth must be in YYYY-MM-DD format
    }},
    slug  : { type:DataTypes.STRING(255) , allowNull:true  },
    
},{timestamps:true });


module.exports = User ;