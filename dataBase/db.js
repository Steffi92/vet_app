const mongoose = require("mongoose")


const db = () => {
    try {
        mongoose.connect("mongodb://localhost:27017/vet_app")
        console.log("DataBase Conectada")
    } catch (error) {
        console.log(error)
    }
}


module.exports = {db}
