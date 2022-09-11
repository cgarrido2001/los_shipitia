const mongoose = require("mongoose");

const pagoSchema = new mongoose.Schema({
  compra: { type: mongoose.Schema.ObjectId, ref: "Compra" },
  tipo: String,
  estado: Boolean,
});

module.exports = mongoose.model("Pago", pagoSchema);
