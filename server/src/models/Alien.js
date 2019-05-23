module.exports = (sequelize, DataTypes) => {
    const Alien = sequelize.define('Alien', {
      name: DataTypes.STRING,
      diet: DataTypes.STRING,
      picture: DataTypes.STRING,
      placeId: DataTypes.INTEGER
    })
  
    return Alien
  }