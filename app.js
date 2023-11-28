const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const Associations = require("./models/tarefa_usuario");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const moment = require('moment-timezone');
app.use(bodyParser.json());

// Sequelize
const { Sequelize } = require('sequelize');
const sequelize = require('./db');
sequelize.sync();
// Models
const Tarefa = require('./models/tarefa');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sincroniza o modelo com o banco de dados
    // await Tarefa.sync();
    
    // // Cria uma tarefa
    // const resultadoCreate = await Tarefa.create({
    //   titulo: 'estudar',
    //   descricao: 'estudar IOT',
    //   status: 'pendente',
    //   data_criacao: '2023-11-13 10:00',
    //   data_limite: '2023-11-20 10:00'
    // });
    // console.log(resultadoCreate);
    //Read / leitura dos dados
    // ler todas tarefas
    // const listar_tarefas = await Tarefa.findAll();
    // console.log(listar_tarefas);
    // ler uma tarefa por id
    // const tarefa_id = await Tarefa.findByPk(1);
    // console.log(tarefa_id);

    //Update
    // const tarefa_update = await Tarefa.findByPk(1);
    // //console.log(produto);
    // tarefa_update.titulo = "Viajar";
    // const resultadoSave = await tarefa_update.save();
    // console.log(resultadoSave)

    //Delete
    // const tarefa_delete = await Tarefa.findByPk(1);
    // tarefa_delete.destroy();

    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    })();

// Restante do código para setup do Express
const usersRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
