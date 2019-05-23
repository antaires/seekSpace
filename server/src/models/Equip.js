module.exports = (sequelize, DataTypes) => {
    const Equip = sequelize.define('Equip', {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      risk: DataTypes.STRING,
      cost: DataTypes.STRING,
      activity: DataTypes.STRING,
      placeId: DataTypes.INTEGER
    })
  
    return Equip
  }