const mongoose = require("mongoose");

const despachoSchema = new mongoose.Schema({
  fechaSalida: { type: Date, default: Date.now },
  estado: { type: String, default: "PENDIENTE", enum: ["PENDIENTE", "EN_PROCESO", "ENTREGADO", "REAGENDAR"] },
  compra: { type: mongoose.Schema.ObjectId, ref: "Compra" },
  destino: { type: String, required: true },
});

module.exports = mongoose.model("Despacho", despachoSchema);
