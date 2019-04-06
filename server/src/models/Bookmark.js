// Default object for associations
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {})

  Bookmark.associate = function (models) {
    // Associate bookmark to other models
    Bookmark.belongsTo(models.User)
    Bookmark.belongsTo(models.Place)
  }

  return Bookmark
}