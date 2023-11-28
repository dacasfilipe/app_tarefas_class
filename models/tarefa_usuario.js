const sequelize = require("../db"),
  Tarefa = require("./tarefa"),
  Usuario = require("./usuario");

Tarefa.belongsToMany(Usuario, {
  through: "usuarios_has_tarefas",
  foreignKey: "usuarios_id",
  otherKey: "tarefas_id",
  unique: true,
});

Usuario.belongsToMany(Tarefa, {
  through: "usuarios_has_tarefas",
  foreignKey: "tarefas_id",
  otherKey: "usuarios_id",
  unique: true,
});

module.exports = sequelize;