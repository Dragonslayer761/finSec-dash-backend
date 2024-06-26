'use strict';
const {
  Model,DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `firstname cannot be null`
        },
        notEmpty : {
          msg : `firstname cannot be empty`
        }
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `lastname cannot be null`
        },
        notEmpty : {
          msg : `lastname cannot be empty`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `email cannot be null`
        },
        notEmpty : {
          msg : `email cannot be empty`
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `username cannot be null`
        },
        notEmpty : {
          msg : `username cannot be empty`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `password cannot be null`
        },
        notEmpty : {
          msg : `password cannot be empty`
        }
      }
    },
    role: {
      type: DataTypes.ENUM("admin","agent","user"),
      allowNull : false,
      defaultValue : "agent",
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes .DATE
    }
  }, {
    sequelize,
    modelName: 'user',
    freezeTableName : true
  });
  return user;
};