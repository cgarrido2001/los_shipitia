const mongoose = require("mongoose");

const compraSchema = new mongoose.Schema({
    usuario:{
        type: {type: mongoose.Schema.ObjectId, ref: 'usuario'}
    },

    fecha:{
        type: Date,
        required: true,
        unique: false
    },

    valor:{
        type: Number,
        required: true,
        unique: false
    },

    pago:{
        type:[{type: mongoose.Schema.ObjectId, ref: 'pago'}] //registro de compras x x true
    },

    despacho:{
        type: [{type: mongoose.Schema.ObjectId, ref: 'despacho'}]
    },

    carro:{
        type:{type: mongoose.Schema.ObjectId, ref: 'carro'}
    }
});

module.exports = mongoose.model("compra",compraSchema);