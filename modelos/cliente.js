const mongoose = require("mongoose")

const clienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }, 
    password: {
        type: String,
        require: true,
    },
    salt: {
        type: String,
        require: true
    }
},{versionKey: false})

const clienteModel = mongoose.model("cliente", clienteSchema)

module.exports = clienteModel



