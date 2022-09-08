const mongoose = require("mongoose")

const carroSchema = new mongoose.Schema({
    productos:{
        type: [{type: mongoose.Schema.ObjectId, ref: 'producto_carro'}] 
    }
})

module.exports = mongoose.model("carro",carroSchema);