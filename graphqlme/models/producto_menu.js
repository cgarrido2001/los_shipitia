const mongoose = require("mongoose")

const producto_menuSchema = new mongoose.Schema({
    producto:{
        type:{type: mongoose.Schema.ObjectId, ref: 'producto'}
    },

    cantidad:{
        type: Number,
        unique: false,
        required: true
    }
})

module.exports = mongoose.model("producto_menu",producto_menuSchema);