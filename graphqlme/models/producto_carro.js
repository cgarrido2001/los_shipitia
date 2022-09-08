const mongoose = require("mongoose")

const producto_carroSchema = new mongoose.Schema({
    producto:{
        type:{type: mongoose.Schema.ObjectId, ref: 'producto'}
    },

    cantidad:{
        type: Number,
        required: true,
        unique: false
    }
})

module.exports = mongoose.model("producto_carro",producto_carroSchema);