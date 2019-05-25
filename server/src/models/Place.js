module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    name: DataTypes.STRING,
    feature: DataTypes.STRING,
    activity: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    youtubeID: DataTypes.STRING,
    detail: DataTypes.STRING,
    equip: DataTypes.STRING
  })

  return Place
}
