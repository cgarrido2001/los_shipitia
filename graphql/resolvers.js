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
    obtenerUsuarios: async () => {
      const usuarios = await Usuario.find();
      return usuarios;
    },
    buscarUsuario: async (_, { id_usuario }) => {
      const usuario = await Usuario.findById(id_usuario);
      return usuario;
    },
    revisarCarro: async (_, { id_usuario }) => {
      const usuario = await Usuario.findById(id_usuario).populate({
        path: "carro",
        populate: [{ path: "producto", populate: { path: "categoria" } }],
      });
      return usuario.carro;
    },
    revisarCompras: async (_, { id_usuario }) => {
      const usuario = await Usuario.findById(id_usuario).populate({
        path: "compras",
        populate: [
          { path: "items", populate: { path: "producto" } },
          { path: "pago" },
          { path: "despacho" },
        ],
      });
      return usuario.compras;
    },
    verMenus: async () => {
      const menus = await Menu.find().populate({
        path: "productos",
        populate: { path: "categoria" },
      });
      return menus;
    },
    observarMenu: async (_, { id_menu }) => {
      const menu = await Menu.findById(id_menu).populate({
        path: "productos",
        populate: { path: "categoria" },
      });
      return menu;
    },
    obtenerProductos: async () => {
      const productos = await Producto.find().populate({ path: "categoria" });
      return productos;
    },
    obtenerCategorias: async () => {
      const categorias = await Categoria.find().populate({ path: "productos" });
      return categorias;
    },
  },
  Mutation: {
    agregarUsuario: async (_, { input }) => {
      const usuario = new Usuario(input);
      await usuario.save();
      return usuario;
    },

    actualizarUsuario: async (_, { id_usuario, input }) => {
      const usuario = await Usuario.findByIdAndUpdate(
        id_usuario,
        { $set: input },
        { new: true }
      );
      return usuario;
    },

    eliminarUsuario: async (_, { id_usuario }) => {
      await Usuario.deleteOne({ _id: id_usuario });
      return { mensaje: "Usuario eliminado" };
    },

    agregarCliente: async (_, { input }) => {
      const cliente = new Cliente(input);
      await cliente.save();
      return cliente;
    },

    eliminarCliente: async (_, { id_cliente }) => {
      await Cliente.deleteOne({ _id: id_cliente });
      return { mensaje: "Cliente eliminado" };
    },

    agregarProducto: async (_, { input }) => {
      const producto = new Producto(input);
      await producto.save();
      await Categoria.updateOne(
        { _id: input.categoria },
        { $push: { productos: producto._id } }
      );
      return producto;
    },

    actualizarProducto: async (_, { id_producto, input }) => {
      const producto = await Producto.findByIdAndUpdate(
        id_producto,
        { $set: input },
        { new: true }
      );
      return producto;
    },

    eliminarProducto: async (_, { id_producto }) => {
      const producto = await Producto.findById(id_producto);
      await Categoria.updateOne(
        { _id: producto.categoria },
        { $pull: { productos: producto._id } }
      );
      await Producto.deleteOne({ _id: id_producto });
      return { mensaje: "Producto Eliminado" };
    },

    agregarCategoria: async (_, { input }) => {
      const categoria = new Categoria(input);
      await categoria.save();
      return categoria;
    },

    actualizarCategoria: async (_, { id_categoria, input }) => {
      const categoria = await Categoria.findByIdAndUpdate(
        id_categoria,
        { $set: input },
        { new: true }
      );
      return categoria;
    },

    eliminarCategoria: async (_, { id_categoria }) => {
      await Categoria.deleteOne({ _id: id_categoria });
      return { mensaje: "Categoria Eliminada" };
    },

    agregarProductoAlCarro: async (_, { id_usuario, input }) => {
      const nuevo_productoCarro = await new ProductoCarro(input);
      await nuevo_productoCarro.save();
      await Usuario.updateOne(
        { _id: id_usuario },
        { $push: { carro: nuevo_productoCarro._id } }
      );
      await nuevo_productoCarro.populate({
        path: "producto",
        populate: { path: "categoria" },
      });
      return nuevo_productoCarro;
    },

    modificarProductoDelCarro: async (_, { id_ProductoCarro, cantidad }) => {
      const productoCarro = await ProductoCarro.findByIdAndUpdate(
        id_ProductoCarro,
        { $set: { cantidad: cantidad } },
        { new: true }
      );
      await productoCarro.populate({
        path: "producto",
        populate: { path: "categoria" },
      });
      return productoCarro;
    },

    eliminarProductoDelCarro: async (_, { id_usuario, id_ProductoCarro }) => {
      await Usuario.updateOne(
        { _id: id_usuario },
        { $pull: { carro: id_ProductoCarro } }
      );
      await ProductoCarro.deleteOne({ _id: id_ProductoCarro });
      return { mensaje: "Producto eliminado del Carro" };
    },

    hacerCompra: async (_, { id_usuario }) => {
      const usuario = await Usuario.findById(id_usuario).populate({
        path: "carro",
        populate: [{ path: "producto", populate: { path: "categoria" } }],
      });

      let valor = null;

      for await (const item of usuario.carro) {
        valor += item.cantidad * item.producto.precio;
      }

      const nueva_compra = await new Compra({
        usuario: usuario._id,
        valor: valor,
        items: usuario.carro,
      });

      await nueva_compra.save();
      await Usuario.updateOne(
        { _id: id_usuario },
        { $push: { compras: nueva_compra._id } }
      );
      await Usuario.updateOne(
        { _id: usuario._id },
        { $set: { carro: [] } },
        { multi: true }
      );
      return nueva_compra;
    },

    borrarHistorialCompra: async (_, { id_usuario }) => {
      await Compra.deleteMany({ usuario: id_usuario });
      await Usuario.updateOne(
        { _id: id_usuario },
        { $set: { compras: [] } },
        { multi: true }
      );
      return { mensaje: "Borrado las compras" };
    },

    generarPago: async (_, { input }) => {
      const pago = await new Pago(input);
      await pago.save();
      await Compra.updateOne(
        { _id: input.compra },
        { $push: { pago: pago._id } }
      );
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
      await Compra.updateOne(
        { _id: pago.compra },
        { $push: { despacho: despacho._id } }
      );

      return despacho;
    },

    cambiarEstadoDespacho: async (_, { id_despacho, nuevoestado }) => {
      const despacho = await Despacho.findByIdAndUpdate(
        id_despacho,
        { $set: { estado: nuevoestado } },
        { new: true }
      );
      return despacho;
    },

    crearMenu: async (_, { nombre }) => {
      const nuevoMenu = await new Menu({ nombre });
      await nuevoMenu.save();
      return nuevoMenu;
    },

    agregarProductoAlMenu: async (_, { id_menu, id_producto }) => {
      const menuActualizado = await Menu.findByIdAndUpdate(
        id_menu,
        { $push: { productos: id_producto } },
        { new: true }
      );
      await menuActualizado.populate("productos");
      return menuActualizado;
    },

    eliminarProductoDelMenu: async (_, { id_menu, id_producto }) => {
      await Menu.updateOne(
        { _id: id_menu },
        { $pull: { productos: id_producto } }
      );
      return { mensaje: "Producto eliminado del menu" };
    },
  },
};

module.exports = { resolvers };
