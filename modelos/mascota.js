const mongoose = require("mongoose")


const mascotaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    fechaDeNacimiento: {
        type: Date,
        require: true
    },
    especie: {
        type: String,
        require: true
    },
    owner: {
        type: String,
        require: true
    }
})

const mascotamodel = mongoose.model("mascota", mascotaSchema)

module.exports = mascotamodel