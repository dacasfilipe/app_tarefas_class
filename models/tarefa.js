"use strict";
const Sequelize = require('sequelize');
const database = require('../db');
 
const Tarefa = database.define('tarefa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_criacao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_limite: {
        type: Sequelize.DATE,
        allowNull: false
    },
})
 
module.exports = Tarefa;