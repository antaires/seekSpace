module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    name: DataTypes.STRING,
    feature: DataTypes.STRING,
    activity: DataTypes.STRING,
    imageURL: DataTypes.STRING,
  })

  return Place
}
