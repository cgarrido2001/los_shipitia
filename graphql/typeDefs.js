//= MODULOS
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String
   
    buscarUsuario(correo: String!): Usuario
    buscarPago(idPago: ID!): Pago
    buscarCompra(idCompra: ID!): Compra
    buscarMenu(idMenu: ID!): Menu

    revisarProductosCarro(idUsuario: ID!): [ProductoCarro]
    revisarCompras(idUsuario: ID!): [Compra]

    obtenerMenus: [Menu]
    obtenerUsuarios: [Usuario]
    obtenerProductosCarros: [ProductoCarro]
    obtenerProductos: [Producto]
    obtenerCategorias: [Categoria]
    obtenerPagos: [Pago]
  }

  type Mutation {
    agregarUsuario(input: UsuarioInput!): Usuario
    actualizarUsuario(idUsuario: ID!, input: UsuarioInput!): Usuario
    eliminarUsuario(idUsuario: ID!): Alerta

    agregarCliente(input: ClienteInput!): Cliente
    actualizarCliente(idCliente: ID!, input: ClienteInput!): Cliente
    eliminarCliente(idCliente: ID!): Alerta

    agregarProducto(input: ProductoInput!): Producto
    actualizarProducto(idProducto: ID!, input: ProductoInput!): Producto
    eliminarProducto(idProducto: ID!): Alerta

    agregarCategoria(input: CategoriaInput!): Categoria
    actualizarCategoria(idCategoria: ID!, input: CategoriaInput!): Categoria
    eliminarCategoria(idCategoria: ID!): Alerta

    agregarProductoAlCarro(idUsuario: ID!, input: ProductoCarroInput!): ProductoCarro
    actualizarProductoDelCarro(idProductoCarro: ID!, cantidad: Int!): ProductoCarro
    eliminarProductoDelCarro(idUsuario: ID!, idProductoCarro: ID!): Alerta

    generarCompra(idUsuario: ID!): Compra
    generarPago(input: PagoInput!): Pago
    
    borrarHistorialCompra(idUsuario: ID!): Alerta

    agendarDespacho(id_pago: ID!, destino: DestinoInput!): Despacho
    cambiarEstadoDespacho(id_despacho: ID!, nuevoestado: DESPACHO_TYPE!): Despacho

    crearMenu(nombre: String!): Menu
    agregarProductoAlMenu(idMenu: ID!, idProducto: ID!): Menu
    eliminarProductoDelMenu(idMenu: ID!, idProducto: ID!): Alerta
  }

  """
  //= ENUM TYPES
  """
  enum SEXO_TYPE {
    HOMBRE
    MUJER
  }

  enum DESPACHO_TYPE {
    PENDIENTE
    EN_PROCESO
    REAGENDADO
    ENTREGADO
  }

  enum PAGO_TYPE {
    WEBPAY
    TRANSBANK
    FPAY
    MERCADOPAGO
  }

  enum DOMICILIO_TYPE {
    CASA
    VILLA
    DEPTO
  }

  type Alerta {
    mensaje: String
  }

  """
  //= CLIENTE
  """
  type Cliente {
    id: ID!
    nombre: String!
    apellido: String!
    rut: String!
    email: String!
    password: String!
  }

  input ClienteInput {
    nombre: String
    apellido: String
    rut: String
    email: String
    password: String
  }

  """
  //= USUARIO
  """
  type Usuario {
    id: ID!
    email: String!
    password: String!
    nombre: String!
    apellido: String!
    rut: String!
    telefono: String!
    sexo: String!
    fechaNacimiento: String!
    compras: [Compra]
    carro: [ProductoCarro]
  }

  input UsuarioInput {
    email: String
    password: String
    nombre: String
    apellido: String
    rut: String
    telefono: String
    sexo: SEXO_TYPE
    fechaNacimiento: String
  }

  """
  //= PRODUCTO
  """
  type Producto {
    id: ID!
    nombre: String!
    descripcion: String!
    categoria: Categoria!
    precio: Int!
    stock: Int!
    visibilidad: Boolean!
    urlImagen: String!
  }

  input ProductoInput {
    nombre: String
    descripcion: String
    categoria: String
    precio: Int
    stock: Int
    urlImagen: String
  }

  """
  //= CATEGORIA
  """
  type Categoria {
    id: ID!
    nombre: String!
    productos: [Producto]
  }

  input CategoriaInput {
    nombre: String
  }

  """
  //= COMPRA
  """
  type Compra {
    id: ID!
    usuario: Usuario!
    fecha: String!
    valor: Int!
    pago: [Pago]
    despacho: [Despacho]
    items: [ProductoCarro!]!
  }

  """
  //= PAGO
  """
  type Pago {
    id: ID!
    compra: Compra!
    monto: Int!
    tipo: String!
    estado: Boolean
    fecha: String
  }

  input PagoInput {
    compra: String
    monto: Int
    tipo: PAGO_TYPE
    estado: Boolean
  }

  """
  //= PRODUCTO CARRO
  """
  type ProductoCarro {
    id: ID!
    producto: Producto!
    cantidad: Int!
  }

  input ProductoCarroInput {
    producto: String
    cantidad: Int
  }

  """
  //= MENU
  """
  type Menu {
    id: ID!
    nombre: String!
    productos: [Producto]
  }

  """
  //= DESPACHO
  """
  type Despacho {
    id: ID!
    compra: Compra!
    estado: String!
    destino: String!
    fechaSalida: String
  }

  input DestinoInput {
    comuna: String
    calle: String
    numero: Int
    depto: String
  }
`;

module.exports = { typeDefs };
