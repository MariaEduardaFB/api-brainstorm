module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    code: {
      type: DataTypes.STRING(6),
      unique: true,
      allowNull: false,
    },
    title: DataTypes.STRING,
  });

  Room.associate = (models) => {
    Room.belongsTo(models.User, { foreignKey: 'userId', as: 'creator' });
    Room.hasMany(models.Word, { foreignKey: 'roomId', as: 'words' });
  };

  return Room;
};
