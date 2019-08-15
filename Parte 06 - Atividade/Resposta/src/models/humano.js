const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const Humano = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    idade: {
        type: Number,
        required: true,
        min: 18,
        max: 150
    },
    caracteristicas: {
        peso: {
            type: Number,
            required: true,
            min: 0,
            max: 1000
        },
        altura: {
            type: Number,
            required: true,
            min: 0,
            max: 3,
        },
    },
    registro: {
        type: Date,
        default: Date.now
    }
});
Humano.plugin(mongoosePaginate);
mongoose.model('Humano', Humano);