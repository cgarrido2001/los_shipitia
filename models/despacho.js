const mongoose = require("mongoose");

const despachoSchema = new mongoose.Schema({
  fechaSalida: { type: Date, default: Date.now },
  compra: { type: mongoose.Schema.ObjectId, ref: "Compra" },
  destino: String,
});

module.exports = mongoose.model("Despacho", despachoSchema);
