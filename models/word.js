module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define('Word', {
    text: DataTypes.STRING,
  });

  Word.associate = (models) => {
    Word.belongsTo(models.Room, { foreignKey: 'roomId', as: 'room' });
  };

  return Word;
};
