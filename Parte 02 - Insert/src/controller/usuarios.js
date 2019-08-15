const mongoose = require('mongoose');

//carrego o modelo de dados
const Usuario = mongoose.model('User');


module.exports = {
    
    //cria a funcao de tela de insert
    //nela executa a funcao de insert no banco de dados
    //os dados sao passados no corpo da requisicao via post
    async insert (req, res) {
        const usuarios = await Usuario.create(req.body);

        return res.json(usuarios);
    }
};

