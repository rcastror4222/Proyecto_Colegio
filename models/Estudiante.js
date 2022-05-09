

const mongoose = require('mongoose');

const EstudianteSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    notas:{
        type: Number,
        required: true
    },
    estado:{
        type: String,
        required: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('estudiante',EstudianteSchema);