//= MODELOS
const Categoria = require("../models/categoria");
const Cliente = require("../models/cliente");
const Compra = require("../models/compra");
const Despacho = require("../models/despacho");
const Pago = require("../models/pago");
const Producto = require("../models/producto");
const ProductoCarro = require("../models/productoCarro");
const Usuario = require("../models/usuario");

//= Funciones en Threads
async function updProducto(id, nuevoStock) {
  const producto = await Producto.findById(id);
  producto.stock = nuevoStock;
  await producto.save();
}

//= RESOLVERS
const resolvers = {
  Query: {
    hello: () => "Hello World",

    //= Buscar objeto
    buscarUsuario: async (_, { correo }) => {
      const usuario = await Usuario.findOne({ email: correo }).populate([
        {
          path: "carro",
          populate: [{ path: "producto", populate: { path: "categoria" } }],
        },
        {
          path: "compras",
          populate: [{ path: "items", populate: [{ path: "producto", populate: { path: "categoria" } }] }, { path: "pago" }, { path: "despacho" }],
        },
      ]);
      return usuario;
    },
    buscarPago: async (_, { idPago }) => {
      const pago = await Pago.findById(idPago).populate({ path: "compra" });
      return pago;
    },
    buscarCompra: async (_, { idCompra }) => {
      const compra = await Compra.findById(idCompra).populate([{ path: "pago" }, { path: "despacho" }, { path: "items", populate: { path: "producto", populate: { path: "categoria" } } }]);
      return compra;
    },
    buscarDespacho: async (_, { idDespacho }) => {
      const despacho = await Despacho.findById(idDespacho).populate();
      return despacho;
    },

    //= Arrays de Objetos segun el Usuario(ID)
    revisarProductosCarro: async (_, { idUsuario }) => {
      const usuario = await Usuario.findById(idUsuario).populate({
        path: "carro",
        populate: [{ path: "producto", populate: { path: "categoria" } }],
      });
      return usuario.carro;
    },
    revisarCompras: async (_, { idUsuario }) => {
      const usuario = await Usuario.findById(idUsuario).populate({
        path: "compras",
        populate: [{ path: "items", populate: { path: "producto" } }, { path: "pago" }, { path: "despacho" }],
      });
      return usuario.compras;
    },
    revisarDespachos: async (_, { idCompra }) => {
      const despachos = await Despacho.find({ compra: idCompra });
      return despachos;
    },

    //= Retorna todo los objetos en un array de la base de datos
    obtenerMenu: async () => {
      const menu = await Producto.find({ visibilidad: true }).populate({
        path: "productos",
        populate: { path: "categoria" },
      });
      return menu;
    },
    obtenerUsuarios: async () => {
      const usuarios = await Usuario.find();
      return usuarios;
    },
    obtenerProductosCarros: async () => {
      const productosCarros = await ProductoCarro.find({ path: "producto", populate: { path: "categoria" } });
      return productosCarros;
    },
    obtenerProductos: async () => {
      const productos = await Producto.find().populate({ path: "categoria" });
      return productos;
    },
    obtenerCategorias: async () => {
      const categorias = await Categoria.find().populate({ path: "productos" });
      return categorias;
    },
    obtenerPagos: async () => {
      const pagos = await Pago.find().populate({ path: "compra" });
      return pagos;
    },
  },
  Mutation: {
    //= CRUD DE USUARIO
    agregarUsuario: async (_, { input }) => {
      const usuario = new Usuario(input);
      await usuario.save();
      return usuario;
    },
    actualizarUsuario: async (_, { idUsuario, input }) => {
      const usuario = await Usuario.findByIdAndUpdate(idUsuario, { $set: input }, { new: true });
      return usuario;
    },
    eliminarUsuario: async (_, { idUsuario }) => {
      await Usuario.deleteOne({ _id: idUsuario });
      return { mensaje: "Usuario eliminado" };
    },

    //= CRUD DE CLIENTE
    agregarCliente: async (_, { input }) => {
      const cliente = new Cliente(input);
      await cliente.save();
      return cliente;
    },
    actualizarCliente: async (_, { idCliente, input }) => {
      const cliente = await Cliente.findByIdAndUpdate(idCliente, { $set: input }, { new: true });
      return cliente;
    },
    eliminarCliente: async (_, { idCliente }) => {
      await Cliente.deleteOne({ _id: idCliente });
      return { mensaje: "Cliente eliminado" };
    },

    //= CRUD DE PRODUCTO
    agregarProducto: async (_, { input }) => {
      const producto = new Producto(input);
      await producto.save();
      await Categoria.updateOne({ _id: input.categoria }, { $push: { productos: producto._id } });
      await producto.populate({ path: "categoria" });
      return producto;
    },
    actualizarProducto: async (_, { idProducto, input }) => {
      const producto = await Producto.findByIdAndUpdate(idProducto, { $set: input }, { new: true });
      await producto.populate({ path: "categoria" });
      return producto;
    },
    eliminarProducto: async (_, { idProducto }) => {
      const producto = await Producto.findById(idProducto);
      await Categoria.updateOne({ _id: producto.categoria }, { $pull: { productos: producto._id } });
      await Producto.deleteOne({ _id: idProducto });
      return { mensaje: "Producto Eliminado" };
    },

    //= CRUD DE CATEGORIA
    agregarCategoria: async (_, { input }) => {
      const categoria = new Categoria(input);
      await categoria.save();
      return categoria;
    },
    actualizarCategoria: async (_, { idCategoria, input }) => {
      const categoria = await Categoria.findByIdAndUpdate(idCategoria, { $set: input }, { new: true });
      await categoria.populate({ path: "productos" });
      return categoria;
    },
    eliminarCategoria: async (_, { idCategoria }) => {
      await Producto.updateMany({ categoria: idCategoria }, { $set: { categoria: null } });
      await Categoria.deleteOne({ _id: idCategoria });
      return { mensaje: "Categoria Eliminada" };
    },

    //= CRUD DE PRODUCTOCARRO
    agregarProductoAlCarro: async (_, { idUsuario, input }) => {
      const nuevoProductoCarro = await new ProductoCarro(input);
      await nuevoProductoCarro.save();
      await Usuario.updateOne({ _id: idUsuario }, { $push: { carro: nuevoProductoCarro._id } });
      await nuevoProductoCarro.populate({
        path: "producto",
        populate: { path: "categoria" },
      });
      return nuevoProductoCarro;
    },
    actualizarProductoDelCarro: async (_, { idProductoCarro, cantidad }) => {
      const productoCarro = await ProductoCarro.findByIdAndUpdate(idProductoCarro, { $set: { cantidad: cantidad } }, { new: true });
      await productoCarro.populate({
        path: "producto",
        populate: { path: "categoria" },
      });
      return productoCarro;
    },
    eliminarProductoDelCarro: async (_, { idUsuario, idProductoCarro }) => {
      await Usuario.updateOne({ _id: idUsuario }, { $pull: { carro: idProductoCarro } });
      await ProductoCarro.deleteOne({ _id: idProductoCarro });
      return { mensaje: "Producto eliminado del Carro" };
    },

    //= Generar objetos (Compra, Pago, Despacho)
    generarCompra: async (_, { idUsuario }) => {
      const usuario = await Usuario.findById(idUsuario).populate({
        path: "carro",
        populate: [{ path: "producto", populate: { path: "categoria" } }],
      });
      const nueva_compra = await new Compra({
        usuario: usuario._id,
        valor: await usuario.carro.reduce((monto, Item) => monto + Item.producto.precio * Item.cantidad, 0),
        items: usuario.carro,
      });
      await nueva_compra.save();
      await Usuario.updateOne({ _id: idUsuario }, { $push: { compras: nueva_compra._id } });
      await Usuario.updateOne({ _id: idUsuario }, { $set: { carro: [] } }, { multi: true });
      await nueva_compra.populate({ path: "items", populate: { path: "producto", populate: { path: "categoria" } } });
      return nueva_compra;
    },
    generarPago: async (_, { input }) => {
      const compra = await Compra.findById(input.compra).populate({ path: "items", populate: { path: "producto", populate: { path: "categoria" } } });
      const pago = await new Pago({
        compra: compra._id,
        monto: compra.valor,
        tipo: input.tipo,
        estado: input.estado,
      });
      await pago.save();

      if (pago.estado === true) {
        compra.items.forEach((item) => {
          let nuevoStock = item.producto.stock - item.cantidad;
          updProducto(item.producto._id, nuevoStock);
        });
      }
      await Compra.updateOne({ _id: compra._id }, { $push: { pago: pago._id } });
      return pago;
    },
    generarDespacho: async (_, { idPago, destino }) => {
      const pago = await Pago.findById(idPago).populate({ path: "compra", populate: { path: "items", populate: { path: "producto", populate: { path: "categoria" } } } });
      const direccion = `${destino.calle} ${destino.numero}, ${destino.domicilio === "DEPTO" ? destino.domicilio + " " + destino.numeroDomicilio + ", " : ""}${destino.comuna}, Región Metropolitana`;
      const despacho = await new Despacho({
        compra: pago.compra,
        destino: direccion,
      });
      await despacho.save();
      await Compra.updateOne({ _id: pago.compra }, { $push: { despacho: despacho._id } });
      await despacho.populate({ path: "compra", populate: { path: "items", populate: { path: "producto", populate: { path: "categoria" } } } });
      return despacho;
    },
    actualizarEstadoDespacho: async (_, { idDespacho, nuevoEstado }) => {
      const despacho = await Despacho.findByIdAndUpdate(idDespacho, { $set: { estado: nuevoEstado } }, { new: true });
      await despacho.populate({ path: "compra", populate: { path: "items", populate: { path: "producto", populate: { path: "categoria" } } } });
      return despacho;
    },
  },
};

module.exports = { resolvers };
