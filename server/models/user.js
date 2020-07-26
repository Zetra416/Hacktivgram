'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class User extends Model {}

  User.init({
    email: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: 'Email cant empty!'
        }
      }
    },
    password: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: 'Password cant empty!'
        }
      }
    },
    avatar: DataTypes.STRING
  }, { sequelize });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post)
  };
  return User;
};
