var Sequelize = require("sequelize");
var Config = require("../config.js"); 

var sequelize = new Sequelize(Config.dbname, Config.dbuser, Config.dbpassword, {
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
