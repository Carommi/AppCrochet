const productosCrochet = [
    "Amigurumi",
    "Bolso tejido",
    "Ramo tejido",
    "Marca paginas"
];

const matrizPrecios = [
    [45000, 65000, 85000],
    [85000, 105000, 130000],
    [65000, 90000, 120000],
    [25000, 35000, 45000]
];

const tamanos = ["Pequeno", "Mediano", "Grande"];
const extras = [
    { nombre: "Sin extra", precio: 0 },
    { nombre: "Inicial bordada", precio: 8000 },
    { nombre: "Empaque de regalo", precio: 12000 },
    { nombre: "Colores personalizados", precio: 15000 }
];

const productosCatalogo = [
    {
        id: 1,
        nombre: "Gorrito tejido de fresas",
        categoria: "accesorios",
        categoriaLabel: "Accesorios",
        precio: 65000,
        rating: 4.9,
        reseñas: 23,
        popularidad: 95,
        reciente: true,
        imagen: "https://i.pinimg.com/736x/58/34/ff/5834ff784430e385153635e5f56345d6.jpg",
        galeria: [
            "https://i.pinimg.com/736x/58/34/ff/5834ff784430e385153635e5f56345d6.jpg",
            "https://i.pinimg.com/736x/0a/ae/f6/0aaef686f9bcc8b382236074e2072e4d.jpg"
        ],
        descripcion: "Un accesorio adorable con textura suave y detalles de fresas para regalar o guardar.",
        variantes: ["Rosa", "Crema", "Lila"],
        colores: ["Rosa pastel", "Crema", "Lila"],
        tamaños: ["Pequeño", "Mediano"],
        stock: 6,
        reseñasData: [
            { usuario: "Sofía", puntuacion: 5, comentario: "Muy tierno y bien terminado.", fecha: "2026-07-10", verificada: true, fotos: ["https://i.pinimg.com/736x/58/34/ff/5834ff784430e385153635e5f56345d6.jpg"] },
            { usuario: "Ana", puntuacion: 4, comentario: "El color quedó perfecto para el regalo.", fecha: "2026-06-20", verificada: false, fotos: [] }
        ]
    },
    {
        id: 2,
        nombre: "Amigurumi delicado",
        categoria: "amigurumis",
        categoriaLabel: "Amigurumis",
        precio: 78000,
        rating: 4.8,
        reseñas: 19,
        popularidad: 90,
        reciente: false,
        imagen: "https://i.pinimg.com/736x/c1/d3/77/c1d377e44071f83be403e44bc3216c6d.jpg",
        galeria: [
            "https://i.pinimg.com/736x/c1/d3/77/c1d377e44071f83be403e44bc3216c6d.jpg",
            "https://i.pinimg.com/736x/3a/41/34/3a41340a43afaaffd98daf97c2639217.jpg"
        ],
        descripcion: "Una pieza hecha a mano con detalles suaves y un diseño tierno para decorar o acompañar.",
        variantes: ["Con bolsito", "Sin bolsito"],
        colores: ["Blanco", "Rosado"],
        tamaños: ["Pequeño", "Mediano", "Grande"],
        stock: 4,
        reseñasData: [
            { usuario: "Laura", puntuacion: 5, comentario: "Hermoso, muy suave y con buena terminación.", fecha: "2026-07-01", verificada: true, fotos: [] },
            { usuario: "Marta", puntuacion: 4, comentario: "Llegó a tiempo y se ve mucho mejor en persona.", fecha: "2026-05-25", verificada: true, fotos: [] }
        ]
    },
    {
        id: 3,
        nombre: "Amigurumi de elefante",
        categoria: "amigurumis",
        categoriaLabel: "Amigurumis",
        precio: 105000,
        rating: 5,
        reseñas: 31,
        popularidad: 97,
        reciente: true,
        imagen: "https://i.pinimg.com/736x/98/db/08/98db08284b157ee6181bc31bd20df6ee.jpg",
        galeria: [
            "https://i.pinimg.com/736x/98/db/08/98db08284b157ee6181bc31bd20df6ee.jpg",
            "https://i.pinimg.com/736x/24/c3/84/24c3846b1b86a6a588d907ac70347dc3.jpg"
        ],
        descripcion: "Un elefante alegre, abrazable y resistente para niños o coleccionistas.",
        variantes: ["Con lazo", "Sin lazo"],
        colores: ["Gris claro", "Rosa"],
        tamaños: ["Mediano", "Grande"],
        stock: 3,
        reseñasData: [
            { usuario: "Camila", puntuacion: 5, comentario: "Perfecto para regalar, está súper bonito.", fecha: "2026-07-18", verificada: true, fotos: ["https://i.pinimg.com/736x/98/db/08/98db08284b157ee6181bc31bd20df6ee.jpg"] }
        ]
    },
    {
        id: 4,
        nombre: "Marca páginas de flor",
        categoria: "accesorios",
        categoriaLabel: "Accesorios",
        precio: 25000,
        rating: 4.6,
        reseñas: 15,
        popularidad: 82,
        reciente: false,
        imagen: "https://i.pinimg.com/736x/61/e7/d5/61e7d50427668b179009f056b9c8f829.jpg",
        galeria: [
            "https://i.pinimg.com/736x/61/e7/d5/61e7d50427668b179009f056b9c8f829.jpg",
            "https://i.pinimg.com/736x/0b/fb/18/0bfb18c98267ba2dae37a08fcc997523.jpg"
        ],
        descripcion: "Un accesorio funcional y delicado que combina crochet con un toque de lectura.",
        variantes: ["Flor simple", "Flor doble"],
        colores: ["Rosa", "Blanco"],
        tamaños: ["Único"],
        stock: 8,
        reseñasData: [
            { usuario: "Diana", puntuacion: 5, comentario: "Muy práctico y bonito para el diario.", fecha: "2026-06-12", verificada: false, fotos: [] }
        ]
    },
    {
        id: 5,
        nombre: "Bolso de verano",
        categoria: "bolsos",
        categoriaLabel: "Bolsos",
        precio: 98000,
        rating: 4.7,
        reseñas: 28,
        popularidad: 88,
        reciente: true,
        imagen: "https://i.pinimg.com/736x/be/68/09/be68093c20e1df95900c7458e324ce70.jpg",
        galeria: [
            "https://i.pinimg.com/736x/be/68/09/be68093c20e1df95900c7458e324ce70.jpg",
            "https://i.pinimg.com/736x/f2/e7/a0/f2e7a0e7ee207a5c05036db2881d1471.jpg"
        ],
        descripcion: "Bolso artesanal con estructura ligera y colores suaves para el día a día.",
        variantes: ["Asa corta", "Asa larga"],
        colores: ["Rosa", "Crema"],
        tamaños: ["Mediano", "Grande"],
        stock: 2,
        reseñasData: [
            { usuario: "Nora", puntuacion: 5, comentario: "Se ve muy elegante y cómodo.", fecha: "2026-07-15", verificada: true, fotos: [] }
        ]
    },
    {
        id: 6,
        nombre: "Ramo tejido de flores",
        categoria: "ramos",
        categoriaLabel: "Ramos",
        precio: 65000,
        rating: 4.9,
        reseñas: 24,
        popularidad: 93,
        reciente: true,
        imagen: "https://i.pinimg.com/736x/f2/e7/a0/f2e7a0e7ee207a5c05036db2881d1471.jpg",
        galeria: [
            "https://i.pinimg.com/736x/f2/e7/a0/f2e7a0e7ee207a5c05036db2881d1471.jpg",
            "https://i.pinimg.com/736x/0b/fb/18/0bfb18c98267ba2dae37a08fcc997523.jpg"
        ],
        descripcion: "Ramo eterno y delicado, ideal para regalos o decoración de eventos.",
        variantes: ["Pequeño", "Grande"],
        colores: ["Rosa", "Blanco", "Amarillo"],
        tamaños: ["Pequeño", "Grande"],
        stock: 5,
        reseñasData: [
            { usuario: "Valeria", puntuacion: 5, comentario: "Fue el regalo perfecto para mi mamá.", fecha: "2026-06-29", verificada: true, fotos: [] }
        ]
    }
];

const productoSelect = document.getElementById("productoCotizado");
const tamanoSelect = document.getElementById("tamanoCotizado");
const cantidadInput = document.getElementById("cantidadCotizada");
const extraSelect = document.getElementById("extraCotizado");
const totalCotizado = document.getElementById("totalCotizado");
const detalleCotizado = document.getElementById("detalleCotizado");
const productosGrid = document.getElementById("productosGrid");
const filtrosProductos = document.getElementById("filtrosProductos");
const ordenProductos = document.getElementById("ordenProductos");
const toggleFavoritos = document.getElementById("toggleFavoritos");
const detalleProductoContenido = document.getElementById("detalleProductoContenido");
const productDetailModal = document.getElementById("productDetailModal");
const carritoItemsContainer = document.getElementById("carritoItemsContainer");
const subtotalResumen = document.getElementById("subtotalResumen");
const descuentoResumen = document.getElementById("descuentoResumen");
const totalResumen = document.getElementById("totalResumen");
const codigoCupon = document.getElementById("codigoCupon");
const aplicarCupon = document.getElementById("aplicarCupon");
const mensajeCupon = document.getElementById("mensajeCupon");
const minicartBody = document.getElementById("minicartBody");
const carritoContador = document.getElementById("carritoContador");
const toastStack = document.getElementById("toastStack");
const checkoutNext = document.getElementById("checkoutNext");
const checkoutPrev = document.getElementById("checkoutPrev");
const checkoutAbono = document.getElementById("checkoutAbono");
const checkoutTotalConfirm = document.getElementById("checkoutTotalConfirm");
const checkoutAbonoConfirm = document.getElementById("checkoutAbonoConfirm");
const checkoutSaldoConfirm = document.getElementById("checkoutSaldoConfirm");
const contactForm = document.getElementById("contactForm");
const cotizadorCTA = document.getElementById("cotizadorCTA");

let filtroActual = "all";
let ordenActual = "recent";
let favoritos = [];
let carrito = [];
let cuponActivo = null;
let pasoCheckout = 1;
let carritoDrawer = null;
let productoDetalleActual = null;
let varianteSeleccionada = "";
let colorSeleccionado = "";
let tamanoSeleccionado = "";
let filtroResenas = "all";

function llenarSelect(select, opciones, obtenerTexto) {
    opciones.forEach((opcion, indice) => {
        const option = document.createElement("option");
        option.value = indice;
        option.textContent = obtenerTexto(opcion);
        select.appendChild(option);
    });
}

function formatearPesos(valor) {
    return valor.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });
}

function calcularCotizacion() {
    const productoIndice = Number(productoSelect.value);
    const tamanoIndice = Number(tamanoSelect.value);
    const extraIndice = Number(extraSelect.value);
    const cantidad = Math.max(1, Number(cantidadInput.value) || 1);
    const precioBase = matrizPrecios[productoIndice][tamanoIndice];
    const precioExtra = extras[extraIndice].precio;
    const total = (precioBase + precioExtra) * cantidad;

    totalCotizado.textContent = formatearPesos(total);
    detalleCotizado.textContent = `${cantidad} ${productosCrochet[productoIndice]} ${tamanos[tamanoIndice].toLowerCase()} con ${extras[extraIndice].nombre.toLowerCase()}.`;
}

function iniciarCotizador() {
    if (!productoSelect || !tamanoSelect || !extraSelect) {
        return;
    }

    llenarSelect(productoSelect, productosCrochet, producto => producto);
    llenarSelect(tamanoSelect, tamanos, tamano => tamano);
    llenarSelect(extraSelect, extras, extra => `${extra.nombre} + ${formatearPesos(extra.precio)}`);

    [productoSelect, tamanoSelect, cantidadInput, extraSelect].forEach(elemento => {
        if (elemento) {
            elemento.addEventListener("input", calcularCotizacion);
            elemento.addEventListener("change", calcularCotizacion);
        }
    });

    calcularCotizacion();
}

function filtrarYOrdenarProductos() {
    const productosFiltrados = [...productosCatalogo].filter(producto => {
        if (filtroActual === "all") {
            return true;
        }
        if (filtroActual === "otros") {
            return producto.categoria === "otros";
        }
        return producto.categoria === filtroActual;
    });

    const productosOrdenados = productosFiltrados.sort((a, b) => {
        switch (ordenActual) {
            case "popular":
                return b.popularidad - a.popularidad;
            case "price-asc":
                return a.precio - b.precio;
            case "price-desc":
                return b.precio - a.precio;
            default:
                return Number(b.reciente) - Number(a.reciente);
        }
    });

    renderizarProductos(productosOrdenados);
}

function renderizarProductos(productos) {
    if (!productosGrid) {
        return;
    }

    productosGrid.innerHTML = productos.map(producto => {
        const favorito = favoritos.includes(producto.id);
        return `
            <div class="col-md-6 col-lg-4">
                <article class="product-card">
                    <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
                    <div class="product-card-body">
                        <div class="product-card-meta">
                            <span class="product-category">${producto.categoriaLabel}</span>
                            <button class="wishlist-btn ${favorito ? "is-favorite" : ""}" type="button" data-product-id="${producto.id}" aria-label="Agregar a favoritos">
                                ${favorito ? "♥" : "♡"}
                            </button>
                        </div>
                        <h3>${producto.nombre}</h3>
                        <div class="product-rating">
                            <span>★★★★★</span>
                            <span class="rating-text">${producto.rating.toFixed(1)} · ${producto.reseñas} reseñas</span>
                        </div>
                        <div class="product-price">
                            <span>Precio</span>
                            <strong>${formatearPesos(producto.precio)}</strong>
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-shop btn-sm" type="button" data-add-cart="${producto.id}">Agregar al carrito</button>
                            <button class="btn btn-outline-dark btn-sm" type="button" data-detail="${producto.id}">Detalle</button>
                        </div>
                    </div>
                </article>
            </div>`;
    }).join("");
}

function renderizarDetalleProducto() {
    if (!productoDetalleActual || !detalleProductoContenido) {
        return;
    }

    const producto = productoDetalleActual;
    const reseñasFiltradas = filtroResenas === "all"
        ? producto.reseñasData
        : producto.reseñasData.filter(review => review.puntuacion === Number(filtroResenas));

    detalleProductoContenido.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-gallery">
                ${producto.galeria.map(imagen => `<img src="${imagen}" alt="${producto.nombre}" loading="lazy">`).join("")}
            </div>
            <div class="product-info">
                <div>
                    <span class="section-label">${producto.categoriaLabel}</span>
                    <h2 class="section-title">${producto.nombre}</h2>
                    <div class="product-detail-meta">
                        <span>★★★★★ ${producto.rating.toFixed(1)}</span>
                        <span>${producto.reseñas} reseñas</span>
                        <span>Stock ${producto.stock}</span>
                    </div>
                    <p class="text-muted">Datos de demostración para la experiencia de compra.</p>
                </div>
                <div class="product-price">
                    <span>Precio</span>
                    <strong>${formatearPesos(producto.precio)}</strong>
                </div>
                <p class="text-muted">${producto.descripcion}</p>
                <div>
                    <h3>Variantes</h3>
                    <div class="attribute-row">
                        ${producto.variantes.map(vari => `<button type="button" class="attribute-pill ${vari === varianteSeleccionada ? "active" : ""}" data-select-variant="${vari}">${vari}</button>`).join("")}
                    </div>
                </div>
                <div>
                    <h3>Color</h3>
                    <div class="attribute-row">
                        ${producto.colores.map(color => `<button type="button" class="attribute-pill ${color === colorSeleccionado ? "active" : ""}" data-select-color="${color}">${color}</button>`).join("")}
                    </div>
                </div>
                <div>
                    <h3>Tamaño</h3>
                    <div class="attribute-row">
                        ${producto.tamaños.map(tam => `<button type="button" class="attribute-pill ${tam === tamanoSeleccionado ? "active" : ""}" data-select-size="${tam}">${tam}</button>`).join("")}
                    </div>
                </div>
                <div class="quantity-selector">
                    <button type="button" data-quantity-minus="${producto.id}">−</button>
                    <span id="detalleCantidad">1</span>
                    <button type="button" data-quantity-plus="${producto.id}">+</button>
                </div>
                <div class="product-actions">
                    <button class="btn btn-shop" type="button" data-add-cart-detail="${producto.id}">Agregar al carrito</button>
                </div>
                <div>
                    <h3>Opiniones</h3>
                    <label class="form-label" for="filtroResenas">Filtrar por puntuación</label>
                    <select class="form-select form-select-sm" id="filtroResenas">
                        <option value="all">Todas</option>
                        <option value="5">5 estrellas</option>
                        <option value="4">4 estrellas</option>
                        <option value="3">3 estrellas</option>
                    </select>
                    <div class="review-list mt-3">
                        ${reseñasFiltradas.map(review => `
                            <article class="review-card">
                                <div class="review-header">
                                    <strong>${review.usuario}</strong>
                                    <span class="review-badge">${review.verificada ? "Compra verificada" : "Opinión"}</span>
                                </div>
                                <p class="mb-1">${"★".repeat(review.puntuacion)}${"☆".repeat(5 - review.puntuacion)}</p>
                                <p class="text-muted mb-1">${review.comentario}</p>
                                <small>${review.fecha}</small>
                                ${review.fotos.length ? `<div class="review-images">${review.fotos.map(foto => `<img src="${foto}" alt="foto de reseña">`).join("")}</div>` : ""}
                            </article>
                        `).join("")}
                    </div>
                </div>
            </div>
        </div>
    `;

    const modal = bootstrap.Modal.getOrCreateInstance(productDetailModal);
    modal.show();
}

function mostrarProducto(productoId) {
    const producto = productosCatalogo.find(item => item.id === Number(productoId));
    if (!producto || !detalleProductoContenido) {
        return;
    }

    productoDetalleActual = producto;
    varianteSeleccionada = producto.variantes[0] || "";
    colorSeleccionado = producto.colores[0] || "";
    tamanoSeleccionado = producto.tamaños[0] || "";
    filtroResenas = "all";
    renderizarDetalleProducto();
}

function agregarAlCarrito(productoId, cantidad = 1, opciones = {}) {
    const producto = productosCatalogo.find(item => item.id === Number(productoId));
    if (!producto) {
        return;
    }

    const existente = carrito.find(item => item.id === Number(productoId));
    if (existente) {
        existente.cantidad += cantidad;
        existente.opciones = { ...existente.opciones, ...opciones };
    } else {
        carrito.push({ ...producto, cantidad, opciones });
    }

    actualizarCarrito();
    mostrarToast("Producto agregado al carrito.", "success");
    if (carritoDrawer) {
        carritoDrawer.show();
    }
}

function actualizarCarrito() {
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    if (carritoContador) {
        carritoContador.textContent = totalItems;
    }

    if (carritoItemsContainer) {
        if (!carrito.length) {
            carritoItemsContainer.innerHTML = '<div class="cart-empty">Tu carrito está esperando algo bonito 💗</div>';
        } else {
            carritoItemsContainer.innerHTML = carrito.map(item => `
                <div class="cart-item">
                    <img src="${item.imagen}" alt="${item.nombre}">
                    <div>
                        <strong>${item.nombre}</strong>
                        <div class="text-muted">${formatearPesos(item.precio)} c/u</div>
                        ${item.opciones?.variante ? `<div class="text-muted">${item.opciones.variante}</div>` : ""}
                        <div class="cart-item-actions">
                            <button type="button" data-cart-decrease="${item.id}">−</button>
                            <span>${item.cantidad}</span>
                            <button type="button" data-cart-increase="${item.id}">+</button>
                        </div>
                    </div>
                    <div>
                        <strong>${formatearPesos(item.precio * item.cantidad)}</strong>
                        <div><button class="btn btn-outline-dark btn-sm mt-2" type="button" data-cart-remove="${item.id}">Eliminar</button></div>
                    </div>
                </div>
            `).join("");
        }
    }

    actualizarResumen();
    actualizarMinicart();
}

function actualizarResumen() {
    const subtotal = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    const descuento = cuponActivo ? calcularDescuento(subtotal, cuponActivo) : 0;
    const total = Math.max(0, subtotal - descuento);

    if (subtotalResumen) subtotalResumen.textContent = formatearPesos(subtotal);
    if (descuentoResumen) descuentoResumen.textContent = `-${formatearPesos(descuento)}`;
    if (totalResumen) totalResumen.textContent = formatearPesos(total);
    if (checkoutTotalConfirm) checkoutTotalConfirm.textContent = formatearPesos(total);
    if (checkoutAbonoConfirm) checkoutAbonoConfirm.textContent = formatearPesos(total * 0.5);
    if (checkoutSaldoConfirm) checkoutSaldoConfirm.textContent = formatearPesos(total * 0.5);
}

function actualizarMinicart() {
    if (!minicartBody) {
        return;
    }

    if (!carrito.length) {
        minicartBody.innerHTML = '<p class="cart-empty">Tu carrito está vacío.</p>';
        return;
    }

    minicartBody.innerHTML = `
        <div>
            ${carrito.map(item => `
                <div class="minicart-item">
                    <img src="${item.imagen}" alt="${item.nombre}">
                    <div>
                        <strong>${item.nombre}</strong>
                        <div class="text-muted">${item.cantidad} × ${formatearPesos(item.precio)}</div>
                    </div>
                    <strong>${formatearPesos(item.precio * item.cantidad)}</strong>
                </div>
            `).join("")}
        </div>
        <div class="summary-row mt-3"><span>Subtotal</span><strong>${formatearPesos(carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0))}</strong></div>
        <div class="product-actions mt-3">
            <a href="#carrito" class="btn btn-outline-dark btn-sm">Ver carrito</a>
            <a href="#checkout" class="btn btn-shop btn-sm">Finalizar compra</a>
        </div>
    `;
}

function mostrarToast(mensaje, tipo = "success") {
    if (!toastStack) {
        return;
    }

    const toast = document.createElement("div");
    toast.className = `toast-item ${tipo}`;
    toast.textContent = mensaje;
    toastStack.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2500);
}

function cambiarFavorito(productoId) {
    const id = Number(productoId);
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(item => item !== id);
        mostrarToast("Producto eliminado.", "error");
    } else {
        favoritos.push(id);
        mostrarToast("Producto agregado a favoritos.", "success");
    }
    filtrarYOrdenarProductos();
}

function calcularDescuento(subtotal, cupon) {
    const fechaActual = new Date();
    if (cupon.expira && new Date(cupon.expira) < fechaActual) {
        return 0;
    }
    if (subtotal < cupon.minimo) {
        return 0;
    }
    if (cupon.categoria && cupon.categoria !== "todos") {
        return 0;
    }
    return cupon.descuento;
}

function aplicarCodigoCupon() {
    const codigo = (codigoCupon?.value || "").trim().toUpperCase();
    const cupones = [
        { codigo: "LUNA10", descuento: 20000, minimo: 100000, categoria: "todos", expira: "2026-12-31" },
        { codigo: "HILITOS20", descuento: 30000, minimo: 150000, categoria: "todos", expira: "2026-12-31" }
    ];

    const cuponValido = cupones.find(cupon => cupon.codigo === codigo);
    if (!cuponValido) {
        cuponActivo = null;
        mensajeCupon.textContent = "El cupón no es válido para este pedido.";
        mostrarToast("El cupón no es válido.", "error");
        actualizarResumen();
        return;
    }

    const subtotal = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    if (subtotal < cuponValido.minimo) {
        cuponActivo = null;
        mensajeCupon.textContent = "El monto mínimo no alcanza para aplicar el cupón.";
        mostrarToast("El cupón no es válido.", "error");
        actualizarResumen();
        return;
    }

    cuponActivo = cuponValido;
    mensajeCupon.textContent = `Cupón aplicado: ${cuponValido.codigo}`;
    mostrarToast("El cupón fue aplicado.", "success");
    actualizarResumen();
}

function cambiarCantidadCart(productoId, delta) {
    const item = carrito.find(entry => entry.id === Number(productoId));
    if (!item) {
        return;
    }
    item.cantidad = Math.max(1, item.cantidad + delta);
    actualizarCarrito();
}

function eliminarProductoCarrito(productoId) {
    carrito = carrito.filter(item => item.id !== Number(productoId));
    actualizarCarrito();
    mostrarToast("Producto eliminado.", "error");
}

function irPasoCheckout(delta) {
    const maxStep = 4;
    const minStep = 1;
    pasoCheckout = Math.max(minStep, Math.min(maxStep, pasoCheckout + delta));
    document.querySelectorAll(".step-pill").forEach(pill => {
        pill.classList.toggle("active", Number(pill.dataset.step) === pasoCheckout);
    });
    document.querySelectorAll(".step-panel").forEach(panel => {
        panel.classList.toggle("active", Number(panel.dataset.step) === pasoCheckout);
    });
    if (checkoutNext) {
        checkoutNext.textContent = pasoCheckout === maxStep ? "Confirmar pedido" : "Siguiente";
    }
}

function validarContacto() {
    const campos = [
        { id: "contactNombre", mensaje: "El nombre es obligatorio." },
        { id: "contactEmail", mensaje: "Ingresa un correo válido." },
        { id: "contactTipo", mensaje: "Selecciona un tipo de producto." },
        { id: "contactDescripcion", mensaje: "Describe tu idea para continuar." }
    ];

    let valido = true;
    campos.forEach(campo => {
        const input = document.getElementById(campo.id);
        const feedback = document.querySelector(`[data-error-for="${campo.id}"]`);
        if (!input) {
            return;
        }
        const valor = input.value.trim();
        const isEmail = campo.id === "contactEmail";
        const cumple = isEmail ? /^.+@.+\..+$/.test(valor) : Boolean(valor);
        if (!cumple) {
            input.classList.add("is-invalid");
            if (feedback) {
                feedback.textContent = campo.mensaje;
            }
            valido = false;
        } else {
            input.classList.remove("is-invalid");
            if (feedback) {
                feedback.textContent = "";
            }
        }
    });

    if (!valido) {
        mostrarToast("Revisa los campos obligatorios.", "error");
    }
    return valido;
}

function inicializarEventos() {
    if (filtrosProductos) {
        filtrosProductos.addEventListener("click", event => {
            const button = event.target.closest("button[data-category]");
            if (!button) {
                return;
            }
            filtroActual = button.dataset.category;
            filtrosProductos.querySelectorAll(".filter-pill").forEach(pill => {
                const active = pill.dataset.category === filtroActual;
                pill.classList.toggle("active", active);
                pill.setAttribute("aria-pressed", active ? "true" : "false");
            });
            filtrarYOrdenarProductos();
        });
    }

    if (ordenProductos) {
        ordenProductos.addEventListener("change", event => {
            ordenActual = event.target.value;
            filtrarYOrdenarProductos();
        });
    }

    if (toggleFavoritos) {
        toggleFavoritos.addEventListener("click", () => {
            filtroActual = favoritos.length ? "favoritos" : "all";
            const productosVisibles = favoritos.length ? productosCatalogo.filter(item => favoritos.includes(item.id)) : productosCatalogo;
            renderizarProductos(productosVisibles);
        });
    }

    if (productosGrid) {
        productosGrid.addEventListener("click", event => {
            const favoriteButton = event.target.closest(".wishlist-btn");
            if (favoriteButton) {
                event.preventDefault();
                cambiarFavorito(favoriteButton.dataset.productId);
                return;
            }

            const addButton = event.target.closest("[data-add-cart]");
            if (addButton) {
                agregarAlCarrito(addButton.dataset.addCart);
                return;
            }

            const detailButton = event.target.closest("[data-detail]");
            if (detailButton) {
                mostrarProducto(detailButton.dataset.detail);
            }
        });
    }

    if (detalleProductoContenido) {
        detalleProductoContenido.addEventListener("click", event => {
            const variantButton = event.target.closest("[data-select-variant]");
            if (variantButton) {
                varianteSeleccionada = variantButton.dataset.selectVariant;
                renderizarDetalleProducto();
                return;
            }

            const colorButton = event.target.closest("[data-select-color]");
            if (colorButton) {
                colorSeleccionado = colorButton.dataset.selectColor;
                renderizarDetalleProducto();
                return;
            }

            const sizeButton = event.target.closest("[data-select-size]");
            if (sizeButton) {
                tamanoSeleccionado = sizeButton.dataset.selectSize;
                renderizarDetalleProducto();
                return;
            }

            const plus = event.target.closest("[data-quantity-plus]");
            if (plus) {
                const cantidadElement = document.getElementById("detalleCantidad");
                if (cantidadElement) {
                    const current = Number(cantidadElement.textContent) || 1;
                    cantidadElement.textContent = current + 1;
                }
                return;
            }

            const minus = event.target.closest("[data-quantity-minus]");
            if (minus) {
                const cantidadElement = document.getElementById("detalleCantidad");
                if (cantidadElement) {
                    const current = Number(cantidadElement.textContent) || 1;
                    cantidadElement.textContent = Math.max(1, current - 1);
                }
                return;
            }

            const addDetailButton = event.target.closest("[data-add-cart-detail]");
            if (addDetailButton) {
                const cantidadElement = document.getElementById("detalleCantidad");
                const cantidad = Number(cantidadElement?.textContent || 1);
                agregarAlCarrito(addDetailButton.dataset.addCartDetail, cantidad, {
                    variante: varianteSeleccionada,
                    color: colorSeleccionado,
                    tamano: tamanoSeleccionado
                });
                const modal = bootstrap.Modal.getInstance(productDetailModal);
                modal?.hide();
            }

            const resenaSelect = event.target.closest("#filtroResenas");
            if (resenaSelect) {
                filtroResenas = resenaSelect.value;
                renderizarDetalleProducto();
            }
        });
    }

    if (carritoItemsContainer) {
        carritoItemsContainer.addEventListener("click", event => {
            const inc = event.target.closest("[data-cart-increase]");
            if (inc) {
                cambiarCantidadCart(inc.dataset.cartIncrease, 1);
                return;
            }
            const dec = event.target.closest("[data-cart-decrease]");
            if (dec) {
                cambiarCantidadCart(dec.dataset.cartDecrease, -1);
                return;
            }
            const remove = event.target.closest("[data-cart-remove]");
            if (remove) {
                eliminarProductoCarrito(remove.dataset.cartRemove);
            }
        });
    }

    if (aplicarCupon) {
        aplicarCupon.addEventListener("click", aplicarCodigoCupon);
    }

    if (checkoutNext) {
        checkoutNext.addEventListener("click", () => {
            if (pasoCheckout === 4) {
                mostrarToast("Tu solicitud fue enviada.", "success");
                return;
            }
            irPasoCheckout(1);
        });
    }

    if (checkoutPrev) {
        checkoutPrev.addEventListener("click", () => {
            irPasoCheckout(-1);
        });
    }

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();
            if (!validarContacto()) {
                return;
            }
            mostrarToast("Tu solicitud fue enviada.", "success");
            contactForm.reset();
        });
    }

    if (cotizadorCTA) {
        cotizadorCTA.addEventListener("click", () => {
            mostrarToast("Tu solicitud fue enviada.", "success");
        });
    }

    const carritoLink = document.querySelector('.navbar-icons .icon-btn[aria-label*="Carrito"]');
    if (carritoLink) {
        carritoLink.addEventListener("click", event => {
            event.preventDefault();
            if (carritoDrawer) {
                carritoDrawer.show();
            }
        });
    }
}

function inicializarDrawer() {
    const drawerElement = document.getElementById("cartDrawer");
    if (drawerElement) {
        carritoDrawer = new bootstrap.Offcanvas(drawerElement);
    }
}

function abrirCarritoDrawer() {
    if (carritoDrawer) {
        carritoDrawer.show();
    }
}

const blogModalBackdrop = document.getElementById("blogModalBackdrop");
const blogModalTitle = document.getElementById("blogModalTitle");
const blogModalDate = document.getElementById("blogModalDate");
const blogModalImage = document.getElementById("blogModalImage");
const blogModalSummary = document.getElementById("blogModalSummary");
const blogModalBody = document.getElementById("blogModalBody");
const blogModalClose = document.querySelector(".blog-modal-close");

function abrirArticulo(blogLink) {
    if (!blogModalBackdrop || !blogModalTitle || !blogModalDate || !blogModalImage || !blogModalSummary || !blogModalBody) {
        return;
    }

    const titulo = blogLink.dataset.title || "Artículo";
    const fecha = blogLink.dataset.date || "";
    const imagen = blogLink.dataset.image || "";
    const resumen = blogLink.dataset.summary || "";
    const contenido = (blogLink.dataset.content || "").split("||").filter(Boolean);

    blogModalTitle.textContent = titulo;
    blogModalDate.textContent = fecha;
    blogModalImage.src = imagen;
    blogModalImage.alt = titulo;
    blogModalSummary.textContent = resumen;
    blogModalBody.innerHTML = contenido.map(parrafo => `<p>${parrafo}</p>`).join("");

    blogModalBackdrop.classList.add("is-open");
    blogModalBackdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function cerrarArticulo() {
    if (!blogModalBackdrop) {
        return;
    }

    blogModalBackdrop.classList.remove("is-open");
    blogModalBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

document.querySelectorAll(".read-more").forEach(enlace => {
    enlace.addEventListener("click", event => {
        event.preventDefault();
        abrirArticulo(enlace);
    });
});

if (blogModalClose) {
    blogModalClose.addEventListener("click", cerrarArticulo);
}

if (blogModalBackdrop) {
    blogModalBackdrop.addEventListener("click", event => {
        if (event.target === blogModalBackdrop) {
            cerrarArticulo();
        }
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && blogModalBackdrop && blogModalBackdrop.classList.contains("is-open")) {
        cerrarArticulo();
    }
});

iniciarCotizador();
filtrarYOrdenarProductos();
actualizarCarrito();
inicializarEventos();
inicializarDrawer();
