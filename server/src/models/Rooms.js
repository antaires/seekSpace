module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('Room', {
      roomId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: DataTypes.STRING,
      feature: DataTypes.STRING,
      imageURL: DataTypes.STRING,
      detail: DataTypes.STRING,
      booked: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    })
  
    return Room
  }
  