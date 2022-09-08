const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    rut:{
        type:String,
        required:true,
        unique:true
    },
    nombre_completo:{
        type:String,
        required:true,
        unique:false
    },
    fecha_nacimiento:{
        type: Date,
        required: true,
        unique: false
    },
    sexo:{
        type: String,
        required:false,
        unique: false
    },
    correo:{
        type: String,
        required: true,
        unique: true
    },
    constraseña:{
        type: String,
        required: true,
        unique: false
    },
    telefono:{
        type: Number,
        required: true,
        unique: true
    },
    compras:{
        type: [{type: mongoose.Schema.ObjectId, ref: 'compra'}]
    }
})

module.exports = mongoose.model("usuario",usuarioSchema); 