// "use strict"

// module.exports = function(sequelize, DataTypes) {
//   var Users = sequelize.define('users', {
//       name: {
//       type: Sequelize.STRING,
//       field: 'name' // Will result in an attribute that is firstName when user facing but first_name in the database
//     },
//     userName: {
//       type: Sequelize.STRING,
//       field: 'username'
//     },
//     passWord:{
//       type: Sequelize.STRING,
//       field: 'password'
//     }
//   }, {
//     freezeTableName: true // Model tableName will be the same as the model name
//   });

//   return Users;
// }
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

// User.sync({force: true}).then(function () {
//   // Table created
//   return User.create({
//     name: 'Usman Irale',
//     userName: 'superirale'
//   });
// });

module.export = User;
