const sequelize = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = require('./user')(sequelize, DataTypes)
db.Room = require('./room')(sequelize, DataTypes)
db.Word = require('./word')(sequelize, DataTypes)

db.User.hasMany(db.Room);
db.Room.belongsTo(db.User);

db.Room.hasMany(db.Word);
db.Word.belongsTo(db.Room);

module.exports = db;