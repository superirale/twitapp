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

var User = sequelize.define('users', {
    name: {
    type: Sequelize.STRING,
    field: 'name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  userName: {
    type: Sequelize.STRING,
    field: 'username'
  },
  passWord:{
    type: Sequelize.STRING,
    field: 'password'
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

//uncomment force if you want to drop the old user table
// User.sync({force: true}).then(function () {
//   // Table created
//   return User.create({
//     name: 'Usman Irale',
//     userName: 'superirale'
//   });
// });

module.exports = User;