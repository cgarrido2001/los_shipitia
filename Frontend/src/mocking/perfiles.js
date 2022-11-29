let data = {
  data: {
    getUsuarios: [
      { id: 1, email: "a@gmail.com", password: "hola1234", nombre: "edgar", apellido: "perez", rut: "12.136.658-6", telefono: "+569 95660 2135", sexo: "m", fecha_nacimiento: "15-06-1999", carro: [], compras: [1, 2], login: false },
      { id: 2, email: "b@gmail.com", password: "hola1234", nombre: "rodrigo", apellido: "perez", rut: "13.566.672-8", telefono: "+569 95646 2739", sexo: "m", fecha_nacimiento: "14-10-1990", carro: [], compras: [], login: false },
    ],

    getProductos: [
      { id: 1, nombre: "coca-cola", descripcion: "rica cola", categoria: "Jugos y bebidas", precio: 800, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739512/cocacola_xbfn6n.webp" },
      { id: 2, nombre: "coca-cola zero", descripcion: "rica cola", categoria: "Jugos y bebidas", precio: 800, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739512/cocacolazero_gslyon.webp" },
      { id: 3, nombre: "coca-cola light", descripcion: "rica cola", categoria: "Jugos y bebidas", precio: 800, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739512/cocacolalight_c2tn2b.webp" },
      { id: 4, nombre: "pepsi", descripcion: "rica pepsi", categoria: "Jugos y bebidas", precio: 800, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739515/pepsi_j2df5a.webp" },
      { id: 5, nombre: "gohan", descripcion: "rico gohan", categoria: "Varios", precio: 3000, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739514/gohan_rctcjy.jpg" },
      { id: 6, nombre: "fanta", descripcion: "rica fanta", categoria: "Jugos y bebidas", precio: 800, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739513/fanta_pzkmdg.webp" },
      { id: 7, nombre: "sprite", descripcion: "rica pepsi", categoria: "Jugos y bebidas", precio: 800, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739516/sprite_fhlvah.webp" },
      { id: 8, nombre: "tori", descripcion: "rico tori", categoria: "Encuentra tu roll", precio: 1000, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739510/tori_lp1hgq.jpg" },
      { id: 9, nombre: "sushi", descripcion: "rico sushi", categoria: "Especiales", precio: 1500, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739516/sushijpg_eydxnh.jpg" },
      { id: 10, nombre: "ensalada", descripcion: "rica ensalada", categoria: "Postres", precio: 3000, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739513/ensalada_yzdxwy.jpg" },
      { id: 11, nombre: "Pollo apanado", descripcion: "rico pollo", categoria: "Para picar", precio: 2500, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739515/polloApanado_jvv2d4.jpg" },
      { id: 12, nombre: "Camarones apanados", descripcion: "rico camaron", categoria: "Para picar", precio: 2000, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739511/camaronesApanados_vlhc7k.jpg" },
      { id: 13, nombre: "Wantan", descripcion: "rico wantan", categoria: "Para picar", precio: 2300, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739511/wantan_t7pxyl.jpg" },
      { id: 14, nombre: "Empanadas", descripcion: "ricas empanadas", categoria: "Para picar", precio: 1500, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739513/empanadas_qz9jnh.jpg" },
      { id: 15, nombre: "Tempura roll", descripcion: "rico tempura roll", categoria: "Tempura", precio: 5000, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739516/tempura-rolls_2_rlued1.jpg" },
      { id: 16, nombre: "Tori panko", descripcion: "rico panko", categoria: "Panko rolls", precio: 5000, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739510/TORI_PANKO_caoipx.jpg" },
      { id: 17, nombre: "Crab ahumado", descripcion: "rico crab", categoria: "Special Rolls", precio: 5500, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739513/Crab_Ahumadooo_vvugcs.png" },
      { id: 18, nombre: "Teriyaki Roll", descripcion: "rico Teriyaki", categoria: "Special Rolls", precio: 5600, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739510/Teriyaki_Roll-4-Editar_tzcmfo.jpg" },
      { id: 19, nombre: "Tori Roll", descripcion: "rico tori roll", categoria: "Special Rolls", precio: 5200, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739510/tori-rolljpg-238_eswbvi.jpg" },
      { id: 20, nombre: "Tempura tuna nikkei", descripcion: "rico tempura tuna nikkei", categoria: "Tempura", precio: 4000, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739510/tempura-tuna-nikkei_ujjgja.jpg" },
      { id: 21, nombre: "Crab ahumado tempura", descripcion: "rico teriyaki roll", categoria: "Tempura", precio: 4800, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739515/Crab_Ahumado_Tempura_czcuup.png" },
      { id: 22, nombre: "Samurai tempura", descripcion: "rico samurai tempura", categoria: "Tempura", precio: 4800, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739515/Samurai-Tempura_g4pdeo.png" },
      { id: 23, nombre: "California ahumado", descripcion: "rico california ahumado", categoria: "California Rolls", precio: 5500, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739510/California_Ahumado_ksgak6.png" },
      { id: 24, nombre: "California furai", descripcion: "rico california furai", categoria: "California Rolls", precio: 5000, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739510/California_Furai-24-Nuevo_sdkznp.jpg" },
      { id: 25, nombre: "California new", descripcion: "rico california new", categoria: "California Rolls", precio: 4500, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739510/California_New_fsqozc.png" },
      { id: 26, nombre: "Nikkei rolls", descripcion: "rico nikkei rolls", categoria: "Nikkei rolls", precio: 4500, stock: 100, visibilidad: true, imagen: "https://res.cloudinary.com/dywcwaf57/image/upload/v1669739514/nikkei-rolls_2_jmys5g.jpg" },
    ],

    getCliente: [
      { id: 1, nombre: "rodrigo", apellido: "perez", rut: "15.634.978-8", password: "hola1234" },
      { id: 2, nombre: "edgar", apellido: "perez", rut: "15.456.258-8", password: "hola1234" },
      { id: 3, nombre: "cristobal", apellido: "perez", rut: "20.346.158-9", password: "hola1234" },
    ],

    getCompras: [
      { id: 1, usuario: 1, fecha: "15-06-2022", pago: [], despacho: [], item: [], monto: 10000 },
      { id: 2, usuario: 1, fecha: "14-06-2022", pago: [], despacho: [], item: [], monto: 15000 },
      { id: 3, usuario: 2, fecha: "20-09-2022", pago: [], despacho: [], item: [], monto: 18000 },
    ],

    getPagos: [
      { id: 1, compra: 1, monto: 10000, tipo: "webpay", estado: true, fecha: "15-06-2022" },
      { id: 2, compra: 1, monto: 10000, tipo: "transbank", estado: false, fecha: "15-06-2022" },
      { id: 3, compra: 1, monto: 10000, tipo: "transferencia", estado: false, fecha: "15-06-2022" },
      { id: 4, compra: 2, monto: 20000, tipo: "webpay", estado: true, fecha: "14-06-2022" },
      { id: 5, compra: 3, monto: 15000, tipo: "transbank", estado: true, fecha: "20-09-2022" },
    ],

    getDespacho: [
      { id: 1, fecha: "15-06-2022", estado: "Entregado", compra: 1, destino: { comuna: "providencia", calle: "antonio varas", numero: "880" } },
      { id: 2, fecha: "14-06-2022", estado: "Entregado", compra: 2, destino: { comuna: "providencia", calle: "antonio varas", numero: "1080", depto: "25" } },
      { id: 3, fecha: "20-09-2022", estado: "Entregado", compra: 3, destino: { comuna: "santiago", calle: "agustinas", numero: "100", casa: "3" } },
    ],

    getMenu: [
      { id: 1, nombre: "martes", productos: [1] },
      { id: 2, nombre: "lunes", productos: [1, 2] },
      { id: 3, nombre: "miercoles", productos: [1, 2, 3] },
    ],

    getCarroProducto: [
      { id: 1, id_producto: 1, cantidad: 3 },
      { id: 2, id_producto: 2, cantidad: 4 },
      { id: 3, id_producto: 2, cantidad: 8 },
      { id: 4, id_producto: 3, cantidad: 1 },
    ],

    getCategoria: [
      { id_categoria: 1, nombre: "Special Rolls", productos: [20, 21, 22], ref: "#Special Rolls" },
      { id_categoria: 2, nombre: "Para picar", productos: [], ref: "#Para picar" },
      { id_categoria: 3, nombre: "Tempura", productos: [], ref: "#Tempura" },
      { id_categoria: 4, nombre: "Panko rolls", productos: [], ref: "#Panko rolls" },
      { id_categoria: 5, nombre: "California Rolls", productos: [], ref: "#California Rolls" },
      { id_categoria: 6, nombre: "Nikkei rolls", productos: [], ref: "#Nikkei rolls" },
      { id_categoria: 7, nombre: "Varios", productos: [], ref: "#Varios" },
      { id_categoria: 8, nombre: "Jugos y bebidas", productos: [], ref: "#Jugos y bebidas" },
      { id_categoria: 9, nombre: "Postres", productos: [], ref: "#Postres" },
    ],
  },
};

export default data;
