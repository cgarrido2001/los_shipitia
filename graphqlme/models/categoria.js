const mongoose = require("mongoose")

const categoriaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        unique: true
    },

    productos:{
        type: [{type: mongoose.Schema.ObjectId, ref: 'producto'}]
    }
})

module.exports = mongoose.model("categoria",categoriaSchema);