const mongoose = require("mongoose");

const productoCarroSchema = new mongoose.Schema({
  producto: { type: mongoose.Schema.ObjectId, ref: "Producto", required: true },
  cantidad: { type: Number, default: 1 },
});

module.exports = mongoose.model("ProductoCarro", productoCarroSchema);
