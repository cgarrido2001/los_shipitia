const mongoose = require("mongoose")

const pagoSchema = new mongoose.Schema({
    tipo:{
        type: String,
        required: true,
        unique: false
    },

    estado:{
        type: Boolean,
        required: true,
        unique: false
    }
})


module.exports = mongoose.model("pago",pagoSchema);