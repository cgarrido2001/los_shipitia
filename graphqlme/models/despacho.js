const mongoose = require("mongoose")

const despachoSchema = new mongoose.Schema({
    fecha_salida:{
        type: Date,
        required: true,
        unique: false
    },

    compra: {
        type:{type: mongoose.Schema.ObjectId, ref: 'compra'}
    },

    destino: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model("despacho",despachoSchema);