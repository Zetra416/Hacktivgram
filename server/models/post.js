'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Post extends Model {}

  Post.init({
    caption: DataTypes.STRING,
    img: DataTypes.STRING,
    title: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, { sequelize });
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User)
  };
  return Post;
};
