//Sequelize
const { Sequelize } = require('sequelize');
// Option 3: Passing parameters separately (other dialects)
//new Sequelize('database', 'username', 'password',
const sequelize = new Sequelize('app_tarefas', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;