const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({
    productos:{
        type: [{type: mongoose.Schema.ObjectId, ref: 'producto_menu'}]
    }
})

module.exports = mongoose.model("menu",menuSchema);