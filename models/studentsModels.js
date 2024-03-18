const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    email: String,
    nota: Number
});

const Estudiantes = mongoose.model('estudiantes', userSchema);

module.exports = Estudiantes;
