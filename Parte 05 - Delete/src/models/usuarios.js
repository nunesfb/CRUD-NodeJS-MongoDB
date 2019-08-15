//importa o mongoose
const mongoose = require('mongoose');

//importa o mongoose paginate (paginacao)
const mongoosePaginate = require('mongoose-paginate');

//vamos criar o schema (model) do banco de dados
const UserSchema = new mongoose.Schema({
    //vamos passar qual campo quero salvar no banco de dados
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },
    matricula: {
        type: Number,
        required: true,
        min: 1,
        max: 99999,
        unique: true
    },
    ativo: {
        type: Boolean,
        default: true,
        required: true,
    },
    endereco: {
        cidade: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100
        },
        estado: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 2
        },
    },
    //vai salvar a data e preencher automaticamente
    createAt: {
        type: Date,
        default: Date.now
    },
});

//adiciona o plugin para permitir paginacao
UserSchema.plugin(mongoosePaginate);

//registro o model na nossa aplicacao
mongoose.model('User', UserSchema);