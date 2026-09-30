/* =========================================================
   CALZADO SHAMA - Datos de demostración
   ---------------------------------------------------------
   Todo lo que ves en la tienda sale de este archivo.
   Para cambiar una foto: reemplaza la URL de "img" por la
   ruta de tu foto, por ejemplo "assets/img/productos/zapato1.jpg"
   ========================================================= */

const U = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

/* ---------- Datos del negocio (se usan en toda la página) ---------- */
const NEGOCIO = {
  nombre: "Calzado Shama",
  fundacion: 1998,
  direccion: "18 Calle 11-12, Ciudad de Guatemala 01001",
  telefono: "3788 9695",
  telLink: "+50237889695",
  whatsapp: "https://wa.me/50237889695",
  facebook: "https://www.facebook.com/shama.gt/",
  mapa: "https://www.google.com/maps/search/?api=1&query=Calzado+Shama+18+Calle+11-12+Ciudad+de+Guatemala",
  horario: "Abrimos a las 9:00 a.m.",
  google: { nota: "4.9", opiniones: 98 },
};

/* ---------- Menú principal (editable desde el panel) ---------- */
const MENU_DEFAULT = [
  { id: "mujer", nombre: "Mujer",
    sub: ["Tacones", "Sandalias", "Balerinas", "Cuñas", "Botines", "Mocasines"] },
  { id: "hombre", nombre: "Hombre",
    sub: ["Formales", "Mocasines", "Botas", "Casuales"] },
  { id: "ninos", nombre: "Niñas y niños",
    sub: ["Escolares", "Casuales", "Tennis"] },
  { id: "ortopedico", nombre: "Ortopédicos",
    sub: ["Plantilla anatómica", "Soporte de arco", "Uso diario"] },
  { id: "diabetico", nombre: "Pie diabético",
    sub: ["Hombre", "Mujer", "Sandalias terapéuticas"] },
  { id: "descuentos", nombre: "Descuentos", sub: [] },
];

/* ---------- Carrusel principal ---------- */
const HERO = [
  { img: U("1477517787936-70ba786643fd", 1800), kicker: "Hecho a mano desde 1998",
    titulo: "Pasos con\nhistoria", texto: "Calzado artesanal con diseños modernos, fabricado en la Ciudad de Guatemala.",
    boton: "Ver colección", link: "categoria.html?c=mujer" },
  { img: U("1614253429340-98120bd6d753", 1800), kicker: "Cuero genuino",
    titulo: "Hechos para\ndurar", texto: "Zapato formal de cuero para el día a día.",
    boton: "Ver hombre", link: "categoria.html?c=hombre" },
  { img: U("1768508236664-3f294aaf7d41", 1800), kicker: "Nuevo en Shama",
    titulo: "Línea\nortopédica", texto: "Soporte de arco, plantilla anatómica y horma amplia.",
    boton: "Conocer más", link: "categoria.html?c=ortopedico" },
  { img: U("1638378853112-d084cc3628e2", 1800), kicker: "Temporada 2026",
    titulo: "Lo nuevo\nya llegó", texto: "Diseños que renovamos cada 3 a 6 meses.",
    boton: "Ver novedades", link: "categoria.html?c=mujer" },
];

/* ---------- Tarjetas de categoría de la portada ---------- */
const CATEGORIAS_HOME = [
  { nombre: "Mujer", img: U("1553545985-1e0d8781d5db", 700), link: "categoria.html?c=mujer" },
  { nombre: "Hombre", img: U("1556004583-d2aaffbba592", 700), link: "categoria.html?c=hombre" },
  { nombre: "Niña", img: U("1707013537977-90e0a6cfa484", 700), link: "categoria.html?c=ninos" },
  { nombre: "Niño", img: U("1636130748629-655be0c60041", 700), link: "categoria.html?c=ninos" },
  { nombre: "Ortopédico", img: U("1545463913-5083aa7359a6", 700), link: "categoria.html?c=ortopedico" },
  { nombre: "Pie diabético", img: U("1675159364615-38e1f6b62282", 700), link: "categoria.html?c=diabetico" },
];

/* ---------- "Lo novedoso de Shama" (reemplaza a las marcas) ---------- */
const DESTACADOS = [
  { nombre: "Línea Ortopédica", img: U("1668069226492-508742b03147", 700), tono: "negro", link: "categoria.html?c=ortopedico" },
  { nombre: "Pie Diabético", img: U("1663010968803-09f5e2dcfc61", 700), tono: "rojo", link: "categoria.html?c=diabetico" },
  { nombre: "Cuero Artesanal", img: U("1519396710158-99d7ed65c7dc", 700), tono: "crema", link: "categoria.html?c=hombre" },
  { nombre: "Colección Escolar", img: U("1678192568478-9488ee55def6", 700), tono: "negro", link: "categoria.html?c=ninos" },
];

/* ---------- Productos ---------- */
const TALLAS_ADULTO = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
const TALLAS_NINO = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34];

const PRODUCTOS_DEFAULT = [
  // MUJER
  { id: 1, nombre: "Tacón Valeria", cat: "mujer", sub: "Tacones", precio: 409.99, antes: null, color: "Café", img: U("1535043934128-cf0b28d52f95"), tallas: [35,36,37,38,39], stock: 24, nuevo: true },
  { id: 2, nombre: "Tacón Florencia estampado", cat: "mujer", sub: "Tacones", precio: 449.99, antes: null, color: "Azul / Rosa", img: U("1543163521-1bf539c55dd2"), tallas: [35,36,37,38], stock: 12, nuevo: true },
  { id: 3, nombre: "Stiletto Alba", cat: "mujer", sub: "Tacones", precio: 389.99, antes: 459.99, color: "Blanco", img: U("1562687848-c1664eff566d"), tallas: [35,36,37,38,39,40], stock: 18, nuevo: false },
  { id: 4, nombre: "Plataforma Luna", cat: "mujer", sub: "Tacones", precio: 499.99, antes: null, color: "Plateado", img: U("1524553879936-2ff074ae5816"), tallas: [36,37,38,39], stock: 7, nuevo: true },
  { id: 5, nombre: "Peep toe Camila", cat: "mujer", sub: "Tacones", precio: 379.99, antes: null, color: "Café", img: U("1591884807537-0bce39888fe0"), tallas: [35,36,37,38,39], stock: 15, nuevo: false },
  { id: 6, nombre: "Cuña Martina", cat: "mujer", sub: "Cuñas", precio: 359.99, antes: 419.99, color: "Vino", img: U("1562273138-f46be4ebdf33"), tallas: [35,36,37,38,39], stock: 10, nuevo: false },
  { id: 7, nombre: "Sandalia Antigua", cat: "mujer", sub: "Sandalias", precio: 289.99, antes: null, color: "Negro", img: U("1596523027665-9da35ced2388"), tallas: [35,36,37,38,39,40], stock: 30, nuevo: true },
  { id: 8, nombre: "Sandalia Atitlán", cat: "mujer", sub: "Sandalias", precio: 299.99, antes: null, color: "Café / Blanco", img: U("1627388484741-74dcc56ec343"), tallas: [35,36,37,38,39], stock: 4, nuevo: true },
  { id: 9, nombre: "Botín Sofía", cat: "mujer", sub: "Botines", precio: 529.99, antes: null, color: "Café", img: U("1534233650908-b471f2350922"), tallas: [36,37,38,39,40], stock: 9, nuevo: false },
  { id: 10, nombre: "Mocasín Isabela", cat: "mujer", sub: "Mocasines", precio: 419.99, antes: null, color: "Camel", img: U("1676121270762-47c8d3a7b9d5"), tallas: [35,36,37,38,39], stock: 14, nuevo: true },
  { id: 11, nombre: "Balerina Nerea", cat: "mujer", sub: "Balerinas", precio: 319.99, antes: 349.99, color: "Varios", img: U("1769981654964-e65981aecd75"), tallas: [35,36,37,38,39,40], stock: 22, nuevo: true },

  // HOMBRE
  { id: 20, nombre: "Oxford Ejecutivo", cat: "hombre", sub: "Formales", precio: 549.99, antes: null, color: "Café", img: U("1614252235316-8c857d38b5f4"), tallas: [39,40,41,42,43,44], stock: 20, nuevo: true },
  { id: 21, nombre: "Derby Clásico", cat: "hombre", sub: "Formales", precio: 499.99, antes: 579.99, color: "Café", img: U("1625357165350-bdbcb6d7d524"), tallas: [39,40,41,42,43], stock: 16, nuevo: false },
  { id: 22, nombre: "Brogue Quetzal", cat: "hombre", sub: "Formales", precio: 589.99, antes: null, color: "Cognac", img: U("1549290127-7f758fdadff7"), tallas: [40,41,42,43,44], stock: 6, nuevo: true },
  { id: 23, nombre: "Mocasín Tikal", cat: "hombre", sub: "Mocasines", precio: 459.99, antes: null, color: "Café", img: U("1616406432452-07bc5938759d"), tallas: [39,40,41,42,43], stock: 11, nuevo: true },
  { id: 24, nombre: "Penny Loafer Gamuza", cat: "hombre", sub: "Mocasines", precio: 479.99, antes: null, color: "Café claro", img: U("1576792741377-eb0f4f6d1a47"), tallas: [39,40,41,42,43,44], stock: 13, nuevo: false },
  { id: 25, nombre: "Bota Volcán", cat: "hombre", sub: "Botas", precio: 649.99, antes: null, color: "Café", img: U("1608256246200-53e635b5b65f"), tallas: [40,41,42,43,44], stock: 8, nuevo: true },
  { id: 26, nombre: "Bota Montaña", cat: "hombre", sub: "Botas", precio: 629.99, antes: 699.99, color: "Café", img: U("1605812860427-4024433a70fd"), tallas: [39,40,41,42,43], stock: 5, nuevo: false },
  { id: 27, nombre: "Casual Cobán", cat: "hombre", sub: "Casuales", precio: 429.99, antes: null, color: "Café", img: U("1550998358-08b4f83dc345"), tallas: [39,40,41,42,43,44], stock: 19, nuevo: false },

  // NIÑOS
  { id: 40, nombre: "Tennis Escolar Pepe", cat: "ninos", sub: "Escolares", precio: 262.49, antes: 349.99, color: "Azul", img: U("1678192568478-9488ee55def6"), tallas: TALLAS_NINO, stock: 26, nuevo: true },
  { id: 41, nombre: "Casual Mateo", cat: "ninos", sub: "Casuales", precio: 239.99, antes: null, color: "Beige", img: U("1552912276-56ef47874741"), tallas: TALLAS_NINO, stock: 17, nuevo: false },
  { id: 42, nombre: "Tennis Mariposa", cat: "ninos", sub: "Tennis", precio: 249.99, antes: null, color: "Rosado", img: U("1707013537977-90e0a6cfa484"), tallas: TALLAS_NINO, stock: 12, nuevo: true },
  { id: 43, nombre: "Tennis Andrés", cat: "ninos", sub: "Tennis", precio: 259.99, antes: null, color: "Negro / Blanco", img: U("1636130748629-655be0c60041"), tallas: TALLAS_NINO, stock: 3, nuevo: false },

  // ORTOPÉDICO
  { id: 60, nombre: "Confort Arco Plus", cat: "ortopedico", sub: "Soporte de arco", precio: 589.99, antes: null, color: "Negro", img: U("1668069226492-508742b03147"), tallas: TALLAS_ADULTO, stock: 14, nuevo: true },
  { id: 61, nombre: "Anatómico Pasos", cat: "ortopedico", sub: "Plantilla anatómica", precio: 549.99, antes: null, color: "Café", img: U("1664505504065-31f8937d2261"), tallas: TALLAS_ADULTO, stock: 10, nuevo: true },
  { id: 62, nombre: "Ortopédico Diario", cat: "ortopedico", sub: "Uso diario", precio: 519.99, antes: 569.99, color: "Café / Blanco", img: U("1654945419086-bcb1c1e1b875"), tallas: TALLAS_ADULTO, stock: 9, nuevo: false },
  { id: 63, nombre: "Slip-on Descanso", cat: "ortopedico", sub: "Uso diario", precio: 479.99, antes: null, color: "Negro", img: U("1615979474401-8a6a344de5bd"), tallas: TALLAS_ADULTO, stock: 16, nuevo: true },

  // PIE DIABÉTICO
  { id: 80, nombre: "Diabético Cuidado Total", cat: "diabetico", sub: "Hombre", precio: 649.99, antes: null, color: "Café", img: U("1663010968803-09f5e2dcfc61"), tallas: TALLAS_ADULTO, stock: 8, nuevo: true },
  { id: 81, nombre: "Diabético Suave", cat: "diabetico", sub: "Mujer", precio: 629.99, antes: null, color: "Café", img: U("1662541089338-c7d53b88be70"), tallas: TALLAS_ADULTO, stock: 11, nuevo: true },
  { id: 82, nombre: "Sandalia Terapéutica", cat: "diabetico", sub: "Sandalias terapéuticas", precio: 449.99, antes: null, color: "Café / Gris", img: U("1603487742131-4160ec999306"), tallas: TALLAS_ADULTO, stock: 13, nuevo: false },
  { id: 83, nombre: "Diabético Ejecutivo", cat: "diabetico", sub: "Hombre", precio: 679.99, antes: 729.99, color: "Negro", img: U("1760616172899-0681b97a2de3"), tallas: TALLAS_ADULTO, stock: 6, nuevo: false },
];

/* Banners intermedios de la portada */
const BANNER_MEDIO = {
  img: U("1633464129147-777bdcc97c1d", 1600),
  titulo: "Visítanos en tienda",
  texto: "Estamos en la 18 Calle 11-12, Ciudad de Guatemala. Te medimos el pie y te asesoramos para encontrar tu horma ideal, especialmente en calzado para pie diabético.",
};

const BANNERS_CATEGORIA = {
  mujer: U("1553545985-1e0d8781d5db", 1600),
  hombre: U("1614253429340-98120bd6d753", 1600),
  ninos: U("1636130748629-655be0c60041", 1600),
  ortopedico: U("1768508236664-3f294aaf7d41", 1600),
  diabetico: U("1545463913-5083aa7359a6", 1600),
  descuentos: U("1528734056081-a1149a9a0856", 1600),
};
