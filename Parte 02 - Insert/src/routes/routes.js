const express = require('express');
const routes = express.Router();

const usuarioController = require("../controller/usuarios.js");

//toda vez q o usuario acessar a rota (rota raiz), tem a funcao que recebe o req e res
//req simboliza a requisicao que esta sendo feita ao servidor 
//req contém os dados dessa requisicao, parametros, corpo, cabecalho, autenticacao, usuario, ip, etc.)
//res - resposta que vai ser dada a requisicao (resposta do servidor)

//quando criar algo, usa post
//insert
routes.post('/usuarios', usuarioController.insert);

module.exports = routes;