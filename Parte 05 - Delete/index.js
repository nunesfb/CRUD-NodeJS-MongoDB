//crio uma funcao express
const express = require('express');

//chama o MongoDB
const mongoose = require('mongoose');

//para fazer o require no diretorio
const requireDir = require('require-dir');

//para fazer a permissao de acesso de outras api
const cors = require('cors');

//chamo essa funcao para ser executada
//inicia o app
const app = express();
//diz para minha aplicacao permitir que insira os dados no formato de json
app.use(express.json());
//aqui eu posso passar quais dominios quero permitir cors(aqui)
app.use(cors());

//iniciando o DB
//precisamos passar a url de conexao
//pode ser necessarioa {useNewUrlParser: true}
mongoose.connect('mongodb://localhost:27017/curso', {useNewUrlParser: true});

//como pode ser que tenha diversos models para fazer isso, pode ser usada uma biblioteca
//faz o papel de require em todos arquivos do diretorio para nao precisar fazer um por vez
requireDir('./src/models')

//Rotas
//use - curinga - vai receber todo tipo de requisicao (get, post, delete, put, etc.)
//todos os tipos
//toda vez que receber uma requisicao a partir da rota api (qualquer prefixo), 
//vamos mandar para o arquivo scr routes
app.use('/sistema', require('./src/routes/routes'));

//para evitar de atualizar no terminal, pode ser feito automatico com o nodemon
// -D sao dependencias que vamos usar somente no ambiente de desenvolvimento
// nao vao ser instaladas quando a aplicacao for posta online
app.listen(3001);

//mongoose
// é um ORM de bancos nao relacionais com MongoDB 
// encapsula a logica da programacao do banco de dados atraves do codigo
// (nao usa query ou a linguagem da base de dados (INSERT, DELETE, etc.))
// usa linguagem em JS com o ORM (Object Relational Mapping) 
// transforma a tabela do banco de dados em objetos JS