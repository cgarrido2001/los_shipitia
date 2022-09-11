const mongoose = require("mongoose");

const productoMenuSchema = new mongoose.Schema({
  producto: { type: mongoose.Schema.ObjectId, ref: "Producto" },
  cantidad: Number,
});

module.exports = mongoose.model("ProductoMenu", productoMenuSchema);
