const mongoose = require('mongoose');
const Humano = mongoose.model('Humano');

module.exports = {
    async index (req, res){
        const {page} = req.query;
        const humanos = await Humano.paginate({}, {page, limit: 10});
        return res.json(humanos);
    },

    async details (req, res) {
        const humanos = await Humano.findById(req.params.id);
        return res.json(humanos);
    },

    async insert (req, res) {
        const humanos = await Humano.create(req.body);
        return res.json(humanos);
    },

    async update (req, res) {
        const humanos = await Humano.findByIdAndUpdate(
            req.params.id, req.body, {new: true});
        return res.json(humanos);
    },
    
    async delete (req, res) {
        await Humano.findByIdAndRemove(req.params.id);
        return res.send();
    }
};