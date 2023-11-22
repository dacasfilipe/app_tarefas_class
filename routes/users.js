var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

// Rota para cadastro de usuários
router.post('/cadastrousuarios', userController.cadastrarUsuario);

// Rota para deletar usuário por ID
router.delete('/deletaruser/:id', userController.deletarUsuarioPorId);

// Rota para imprimir usuários
router.get('/imprimiruser', userController.imprimirUsuarios);

// Rota para listar usuários
router.get('/listaruser', userController.listarUsuarios);

// Rota para pesquisar usuários
router.get('/pesquisaruser', userController.pesquisarUsuarios);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
