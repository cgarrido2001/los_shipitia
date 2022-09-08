const mongoose = require("mongoose")

const productoSchema = new mongoose.Schema({
    nombre:{
        type:String,
        unique: true,
        required: true
    },

    descripcion:{
        type:String,
        unique: true,
        required: true
    },

    precio:{
        type: Number,
        required: true,
        unique: false
    },

    stock:{
        type: Number,
        required: true,
        unique: false
    },

    categoria:{
        type:{type: mongoose.Schema.ObjectId, ref: 'categoria'}
    }
})

module.exports = mongoose.model("producto",productoSchema);