const mongoose = require("mongoose")


const consultaSchema = new mongoose.Schema({
    fechaVisita: {
        type: Date,
        require: true
    },
    cuadro: {
        type: String,
        require: true
    },
    tratamiento: {
        type: String,
        require: true
    },
    mascotaId: {
        type: String,
        require: true
    }
})

const consultaModel = mongoose.model("consulta", consultaSchema)

module.exports = consultaModel