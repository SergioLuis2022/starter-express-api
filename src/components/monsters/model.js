const mongoose = require('mongoose')

const { Schema } = mongoose

const usuariosSchema = new Schema({
    nombre: { type: String },
    apellidos: { type: String },
    edad : { type: Number },
    correo : { type: String },
    password: { type: String },
    telefono: { type: String },
    direccion: { type: Object },
    intereses: { type: Array },
    activo: { type: Boolean }
  })

module.exports.usuariosModel = mongoose.model('usuarios', usuariosSchema, 'usuarios')