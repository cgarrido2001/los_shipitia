const mongoose = require("mongoose")

const clienteSchema = new mongooseSchema({
    nombre:{
        type: String,
        unique: false,
        required: true
    },

    apellido:{
        type:String,
        unique: false,
        required: true
    },

    email:{
        type: String,
        unique: true,
        required: true
    },

    constraseña:{
        type: String,
        unique: false,
        required: true
    }
})

module.exports = mongoose.model("cliente",clienteSchema);