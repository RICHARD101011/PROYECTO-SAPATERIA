/* =========================================================
   CALZADO SHAMA - Lógica compartida (header, menú, carrito)
   Es un prototipo: los datos se guardan en el navegador
   (localStorage). Más adelante esto se conecta al backend.
   ========================================================= */

const Store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem("shama_" + key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem("shama_" + key, JSON.stringify(value)); } catch (e) {}
  },
};

const getMenu = () => Store.get("menu", MENU_DEFAULT);
const getProductos = () => Store.get("productos", PRODUCTOS_DEFAULT);
const getCarrito = () => Store.get("carrito", []);
const setCarrito = (c) => { Store.set("carrito", c); actualizarContador(); };

const Q = (n) => "Q" + Number(n).toLocaleString("es-GT", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const qs = (s, el = document) => el.querySelector(s);
const param = (k) => new URLSearchParams(location.search).get(k);

/* Si una foto no carga (sin internet), se muestra un respaldo */
const IMG_FALLBACK = (function () {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='#f2eeea'/><path d='M90 190c40 0 70-30 110-30s60 10 90 20 30 30 0 30H100c-20 0-30-20-10-20z' fill='#d9cfc6'/><text x='200' y='250' text-anchor='middle' font-family='sans-serif' font-size='16' fill='#a89a8e'>Shama</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
})();
document.addEventListener("error", (e) => {
  const t = e.target;
  if (t.tagName === "IMG" && t.src !== IMG_FALLBACK) t.src = IMG_FALLBACK;
}, true);

/* ---------- Rutas relativas (para que funcione dentro de /admin) ---------- */
const BASE = document.body.dataset.base || "";

/* ---------- Header + menú lateral + footer ---------- */
function renderLayout() {
  const menu = getMenu();
  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <div class="topbar">¡Envío a Q35.00 a todo el país! · Pago contra entrega y Visacuotas disponibles</div>
      <div class="header-main">
        <div class="wrap header-row">
          <button class="icon-btn menu-toggle" aria-label="Abrir menú" id="btnMenu">
            <svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg><span>Menú</span>
          </button>
          <a href="${BASE}index.html" class="logo"><img src="${BASE}assets/img/logo-rojo.png" alt="Calzado Shama"></a>
          <form class="search" action="${BASE}categoria.html">
            <input name="q" type="search" placeholder="Buscar zapatos, tallas, colores…" aria-label="Buscar">
            <button aria-label="Buscar"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></button>
          </form>
          <div class="header-icons">
            <a class="icon-btn" href="${BASE}admin/index.html" title="Panel administrador"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg></a>
            <a class="icon-btn cart-btn" href="${BASE}carrito.html" title="Carrito"><svg viewBox="0 0 24 24"><path d="M5 8h14l-1.5 12h-11z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg><span class="cart-count" id="cartCount">0</span></a>
          </div>
        </div>
        <nav class="wrap quicknav">
          ${menu.map(m => `<a href="${BASE}categoria.html?c=${m.id}" class="${m.id === "descuentos" ? "hot" : ""}">${m.nombre}</a>`).join("")}
        </nav>
      </div>
      <div class="drawer-back" id="drawerBack"></div>
      <aside class="drawer" id="drawer" aria-label="Menú">
        <button class="drawer-close" id="drawerClose">✕ Cerrar</button>
        <div class="drawer-cols">
          <ul class="drawer-main">
            ${menu.map((m, i) => `<li><button data-i="${i}" class="${i === 0 ? "active" : ""}">${m.nombre}<span>›</span></button></li>`).join("")}
            <li><a href="${BASE}index.html#nosotros">Nosotros y servicios <span>⌂</span></a></li><li><a href="${NEGOCIO.mapa}" target="_blank" rel="noopener">Cómo llegar <span>↗</span></a></li>
          </ul>
          <div class="drawer-sub" id="drawerSub"></div>
        </div>
      </aside>`;

    const drawer = qs("#drawer"), back = qs("#drawerBack");
    const open = () => { drawer.classList.add("open"); back.classList.add("open"); };
    const close = () => { drawer.classList.remove("open"); back.classList.remove("open"); };
    qs("#btnMenu").onclick = open; qs("#drawerClose").onclick = close; back.onclick = close;

    const showSub = (i) => {
      const m = menu[i];
      qs("#drawerSub").innerHTML =
        `<a class="sub-all" href="${BASE}categoria.html?c=${m.id}">Ver todo ${m.nombre}</a>` +
        m.sub.map(s => `<a href="${BASE}categoria.html?c=${m.id}&s=${encodeURIComponent(s)}">${s}</a>`).join("");
      drawer.querySelectorAll(".drawer-main button").forEach(b => b.classList.toggle("active", +b.dataset.i === i));
    };
    drawer.querySelectorAll(".drawer-main button").forEach(b => {
      b.addEventListener("mouseenter", () => showSub(+b.dataset.i));
      b.addEventListener("click", () => showSub(+b.dataset.i));
    });
    if (menu.length) showSub(0);
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="footer-top">
        <div class="wrap footer-grid">
          <div>
            <img src="${BASE}assets/img/logo-blanco.png" alt="Shama" class="footer-logo">
            <p>Desde ${NEGOCIO.fundacion}, calzado hecho a mano de forma artesanal en la Ciudad de Guatemala, con diseños modernos.</p><p style="margin-top:10px">★ ${NEGOCIO.google.nota} en Google · ${NEGOCIO.google.opiniones} opiniones</p>
          </div>
          <div><h4>Comprar</h4>${menu.map(m => `<a href="${BASE}categoria.html?c=${m.id}">${m.nombre}</a>`).join("")}</div>
          <div><h4>Servicios</h4><a href="${BASE}categoria.html?c=diabetico">Zapato para pie diabético</a><a href="${BASE}categoria.html?c=hombre&s=Formales">Zapato de oficina</a><a href="${BASE}index.html#nosotros">Cinchos de cuero</a><a href="${BASE}index.html#nosotros">Reparación de zapatos</a></div>
          <div id="tiendas"><h4>Visítanos</h4><p>${NEGOCIO.direccion}<br>${NEGOCIO.horario}</p><a href="tel:${NEGOCIO.telLink}">Tel. ${NEGOCIO.telefono}</a><a href="${NEGOCIO.mapa}" target="_blank" rel="noopener">Cómo llegar ↗</a><a href="${NEGOCIO.facebook}" target="_blank" rel="noopener">Facebook: shama.gt ↗</a></div>
        </div>
      </div>
      <div class="footer-bottom wrap">
        <span>© 2026 Calzado Shama · Hecho a mano en Guatemala desde ${NEGOCIO.fundacion}.</span>
        <span class="pay-icons"><b>VISA</b><b>Mastercard</b><b>Visacuotas</b><b>Transferencia</b></span>
      </div>
      <a class="whatsapp" href="${NEGOCIO.whatsapp}" target="_blank" rel="noopener" title="WhatsApp" aria-label="WhatsApp"><svg viewBox="0 0 32 32"><path fill="#fff" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7a10.7 10.7 0 0 1-5.5-1.5l-.4-.2-3.9 1 1-3.8-.2-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7a.6.6 0 0 0 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.6 3.6 0 0 0-1.1 2.7 6.3 6.3 0 0 0 1.3 3.3 14.4 14.4 0 0 0 5.5 4.9c2 .9 2.8.9 3.8.8a3.3 3.3 0 0 0 2.2-1.5 2.7 2.7 0 0 0 .2-1.5c-.1-.2-.3-.3-.6-.4z"/></svg></a>`;
  }
  actualizarContador();
}

function actualizarContador() {
  const el = document.getElementById("cartCount");
  if (el) {
    const n = getCarrito().reduce((a, i) => a + i.cant, 0);
    el.textContent = n;
    el.style.display = n ? "grid" : "none";
  }
}

/* ---------- Tarjeta de producto ---------- */
function cardProducto(p) {
  const desc = p.antes ? Math.round((1 - p.precio / p.antes) * 100) : 0;
  return `
  <article class="card">
    <a href="${BASE}producto.html?id=${p.id}" class="card-img">
      <img src="${p.img}" alt="${p.nombre}" loading="lazy">
      ${p.nuevo ? `<span class="tag">Nuevo</span>` : ""}
      ${desc ? `<span class="tag tag-sale">-${desc}%</span>` : ""}
    </a>
    <div class="card-body">
      <a href="${BASE}producto.html?id=${p.id}" class="card-title">${p.nombre} · ${p.color}</a>
      <div class="price">${p.antes ? `<s>${Q(p.antes)}</s>` : ""}<span>${Q(p.precio)}</span></div>
      <button class="btn btn-dark btn-block" onclick="agregarRapido(${p.id})">Comprar ahora</button>
    </div>
  </article>`;
}

function agregarAlCarrito(id, talla, cant = 1) {
  const c = getCarrito();
  const ex = c.find(i => i.id === id && i.talla === talla);
  if (ex) ex.cant += cant; else c.push({ id, talla, cant });
  setCarrito(c);
  toast("Agregado al carrito ✓");
}

function agregarRapido(id) {
  const p = getProductos().find(x => x.id === id);
  agregarAlCarrito(id, p.tallas[Math.floor(p.tallas.length / 2)]);
}

function toast(msg) {
  let t = document.getElementById("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 1800);
}

/* Mezcla aleatoria: la sección "Lo nuevo" cambia sola en cada visita */
const mezclar = (arr) => arr.map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(v => v[1]);

/* Carrusel horizontal con flechas */
function activarCarrusel(root) {
  const track = root.querySelector(".rail");
  root.querySelector(".rail-prev").onclick = () => track.scrollBy({ left: -track.clientWidth * 0.8, behavior: "smooth" });
  root.querySelector(".rail-next").onclick = () => track.scrollBy({ left: track.clientWidth * 0.8, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", renderLayout);
