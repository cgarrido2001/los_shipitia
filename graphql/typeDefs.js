//= MODULOS
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String
    obtenerUsuarios: [Usuario]
    buscarUsuario(id: ID!): Usuario

    revisarCarro(id: ID!): [ProductoCarro]

    revisarCompras(id: ID!): [Compra]

    verMenu: [Menu]

    obtenerProductos: [Producto]

    obtenerCategorias: [Categoria]
  }

  type Mutation {
    agregarUsuario(input: UsuarioInput): Usuario
    actualizarUsuario(id: ID!, input: UsuarioInput): Usuario
    eliminarUsuario(id: ID!): Alert

    agregarCliente(input: ClienteInput): Cliente
    eliminarCliente(id: ID!): Alert

    agregarProducto(input: ProductoInput): Producto
    eliminarProducto(id: ID!): Alert

    agregarCategoria(input: CategoriaInput): Categoria
    eliminarCategoria(id: ID!): Alert

    agregarProductoAlCarro(id: ID!, input: ProductoCarroInput): ProductoCarro
    modificarProductoDelCarro(id: ID!, cantidad: Int): ProductoCarro
    eliminarProductoDelCarro(id: ID!, productoCarro: ID!): Alert

    crearMenu(nombre: String!): Menu
    agregarProductoAlMenu(menu: ID!, producto: ID!): Menu
    eliminarProductoDelMenu(menu: ID!, producto: ID!): Alert

    hacerCompra(id: ID!): Compra
    borrarHistorialCompra(id: ID!): Alert

    generarPago(input: PagoInput!): Pago
    agendarDespacho(pagoid: ID!, destino: DestinoInput): Despacho
    cambiarEstadoDespacho(id: ID!, nuevoestado: String): Despacho
  }

  type Alert {
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
    sexo: String
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
  }

  input ProductoInput {
    nombre: String
    descripcion: String
    categoria: String
    precio: Int
    stock: Int
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
    tipo: String
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

  enum EstadoDespacho {
    PENDIENTE
    EN_PROCESO
    ENTREGADO
  }

  input DestinoInput {
    comuna: String
    calle: String
    numero: Int
    depto: String
  }
`;

module.exports = { typeDefs };
