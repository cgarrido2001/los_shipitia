//= MODELOS
const Categoria = require("../models/categoria");
const Cliente = require("../models/cliente");
const Compra = require("../models/compra");
const Despacho = require("../models/despacho");
const Menu = require("../models/menu");
const Pago = require("../models/pago");
const Producto = require("../models/producto");
const ProductoCarro = require("../models/productoCarro");
const Usuario = require("../models/usuario");

//= RESOLVERS
const resolvers = {
  Query: {
    hello: () => "Hello World",

    buscarUsuario: async (_, { correo }) => {
      const usuario = await Usuario.findOne({ correo: correo });
      return usuario;
    },
    buscarPago: async (_, { idPago }) => {
      const pago = await Pago.findById(idPago);
      return pago;
    },
    buscarCompra: async (_, { idCompra }) => {
      const compra = await Compra.findById(idCompra);
      return compra;
    },
    buscarMenu: async (_, { idMenu }) => {
      const menu = await Menu.findById(idMenu).populate({
        path: "productos",
        populate: { path: "categoria" },
      });
      return menu;
    },

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

    obtenerMenus: async () => {
      const menus = await Menu.find().populate({
        path: "productos",
        populate: { path: "categoria" },
      });
      return menus;
    },
    obtenerUsuarios: async () => {
      const usuarios = await Usuario.find();
      return usuarios;
    },
    obtenerProductosCarros: async () => {
      const productosCarros = await ProductoCarro.find({ path: "producto" });
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

    agregarProducto: async (_, { input }) => {
      const producto = new Producto(input);
      await producto.save();
      await Categoria.updateOne({ _id: input.categoria }, { $push: { productos: producto._id } });
      return producto;
    },
    actualizarProducto: async (_, { idProducto, input }) => {
      const producto = await Producto.findByIdAndUpdate(idProducto, { $set: input }, { new: true });
      return producto;
    },
    eliminarProducto: async (_, { idProducto }) => {
      const producto = await Producto.findById(idProducto);
      await Categoria.updateOne({ _id: producto.categoria }, { $pull: { productos: producto._id } });
      await Producto.deleteOne({ _id: idProducto });
      return { mensaje: "Producto Eliminado" };
    },

    agregarCategoria: async (_, { input }) => {
      const categoria = new Categoria(input);
      await categoria.save();
      return categoria;
    },
    actualizarCategoria: async (_, { idCategoria, input }) => {
      const categoria = await Categoria.findByIdAndUpdate(idCategoria, { $set: input }, { new: true });
      return categoria;
    },
    eliminarCategoria: async (_, { idCategoria }) => {
      const productos = await Producto.find({ categoria: idCategoria });
      await productos.forEach((producto) => {
        Producto.updateOne({ _id: producto._id }, { $pull: { categoria: idCategoria } });
      });
      await Categoria.deleteOne({ _id: idCategoria });
      return { mensaje: "Categoria Eliminada" };
    },

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

    generarCompra: async (_, { idUsuario }) => {
      const usuario = await Usuario.findById(idUsuario).populate({
        path: "carro",
        populate: [{ path: "producto", populate: { path: "categoria" } }],
      });

      const valor = await usuario.carro.reduce((aux, itemDelCarro) => aux + itemDelCarro.cantidad * itemDelCarro.precio, 0);
      const nueva_compra = await new Compra({
        usuario: usuario._id,
        valor: valor,
        items: usuario.carro,
      });
      
      await nueva_compra.save();
      await Usuario.updateOne({ _id: idUsuario }, { $push: { compras: nueva_compra._id } });
      await Usuario.updateOne({ _id: usuario._id }, { $set: { carro: [] } }, { multi: true });
      return nueva_compra;
    },
    generarPago: async (_, { input }) => {
      const pago = await new Pago(input);
      await pago.save();
      await Compra.updateOne({ _id: input.compra }, { $push: { pago: pago._id } });
      return pago;
    },

    agendarDespacho: async (_, { id_pago, destino }) => {
      const pago = await Pago.findById(id_pago);
      const direccion = `${destino.calle} ${destino.numero}, ${destino.comuna}, Región Metropolitana`;

      const despacho = await new Despacho({
        compra: pago.compra,
        destino: direccion,
      });

      await despacho.save();
      await Compra.updateOne({ _id: pago.compra }, { $push: { despacho: despacho._id } });

      return despacho;
    },

    cambiarEstadoDespacho: async (_, { id_despacho, nuevoestado }) => {
      const despacho = await Despacho.findByIdAndUpdate(id_despacho, { $set: { estado: nuevoestado } }, { new: true });
      return despacho;
    },

    crearMenu: async (_, { nombre }) => {
      const nuevoMenu = await new Menu({ nombre });
      await nuevoMenu.save();
      return nuevoMenu;
    },

    agregarProductoAlMenu: async (_, { id_menu, id_producto }) => {
      const menuActualizado = await Menu.findByIdAndUpdate(id_menu, { $push: { productos: id_producto } }, { new: true });
      await menuActualizado.populate("productos");
      return menuActualizado;
    },

    eliminarProductoDelMenu: async (_, { id_menu, id_producto }) => {
      await Menu.updateOne({ _id: id_menu }, { $pull: { productos: id_producto } });
      return { mensaje: "Producto eliminado del menu" };
    },
  },
};

module.exports = { resolvers };
