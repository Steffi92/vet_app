const express = require("express")
const cors = require("cors")
require("dotenv").config
const { db } = require("./dataBase/db")

const app = express()


app.use(express.json())
app.use(cors())
db()

app.listen(process.env.PORT, () => console.log("Arranco el servidor"))