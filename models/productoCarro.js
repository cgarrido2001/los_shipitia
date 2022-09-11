const mongoose = require("mongoose");

const productoCarroSchema = new mongoose.Schema({
  producto: { type: mongoose.Schema.ObjectId, ref: "Producto" },
  cantidad: Number,
});

module.exports = mongoose.model("ProductoCarro", productoCarroSchema);
