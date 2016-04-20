var Sequelize = require("sequelize");

var sequelize = new Sequelize('twitapp', 'root', 'omokhudu', {
  host: 'localhost',
  dialect: 'mysql',
  freezeTableName: true,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;