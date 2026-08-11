/* Hilitos de Luna - E-commerce frontend/local
 * Sin backend ni pasarela real: carrito, favoritos y configuración persisten en localStorage.
 * Las reseñas visibles están marcadas como datos mock de demostración.
 */

const productosCrochet = ["Amigurumi", "Bolso tejido", "Ramo tejido", "Marca paginas"];

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

const productos = [
    {
        id: "gorrito-fresas",
        nombre: "Gorrito tejido de fresas",
        categoria: "Otros",
        cotizador: "Marca paginas",
        precio: 65000,
        rating: 4.9,
        reviews: 23,
        popularidad: 88,
        fecha: "2026-08-08",
        imagenes: [
            "https://i.pinimg.com/736x/58/34/ff/5834ff784430e385153635e5f56345d6.jpg"
        ],
        descripcion:
            "Gorrito tejido en tonos pastel con detalles de fresas. Pieza artesanal y personalizable.",
        variantes: ["Rosa pastel", "Crema", "Rojo suave"],
        colores: ["Rosa pastel", "Crema", "Rojo suave"],
        stock: 6,
        tallas: ["Pequeño", "Mediano", "Grande"]
    },

    {
        id: "amigurumi-honguito",
        nombre: "Amigurumi delicado",
        categoria: "Amigurumis",
        cotizador: "Amigurumi",
        precio: 78000,
        rating: 4.9,
        reviews: 23,
        popularidad: 96,
        fecha: "2026-08-10",
        imagenes: [
            "https://i.pinimg.com/736x/c1/d3/77/c1d377e44071f83be403e44bc3216c6d.jpg"
        ],
        descripcion:
            "Amigurumi de honguito tierno con bolsito, pensado como compañero decorativo o regalo.",
        variantes: ["Con bolsito", "Sin bolsito"],
        colores: ["Natural", "Rosa", "Verde"],
        stock: 4,
        tallas: ["Pequeño", "Mediano", "Grande"]
    },

    {
        id: "elefante-amigurumi",
        nombre: "Amigurumi de elefante",
        categoria: "Amigurumis",
        cotizador: "Amigurumi",
        precio: 105000,
        rating: 4.8,
        reviews: 18,
        popularidad: 84,
        fecha: "2026-08-06",
        imagenes: [
            "https://i.pinimg.com/736x/98/db/08/98db08284b157ee6181bc31bd20df6ee.jpg"
        ],
        descripcion:
            "Elefante tejido de acabado suave, ideal para acompañar espacios infantiles o regalar.",
        variantes: ["Clásico", "Con accesorio"],
        colores: ["Gris", "Crema", "Rosa"],
        stock: 3,
        tallas: ["Pequeño", "Mediano", "Grande"]
    },

    {
        id: "marcapaginas-flor",
        nombre: "Marcapáginas de flor",
        categoria: "Accesorios",
        cotizador: "Marca paginas",
        precio: 25000,
        rating: 4.7,
        reviews: 12,
        popularidad: 72,
        fecha: "2026-08-04",
        imagenes: [
            "https://i.pinimg.com/736x/61/e7/d5/61e7d50427668b179009f056b9c8f829.jpg"
        ],
        descripcion:
            "Marcapáginas tejido con una pequeña flor para acompañar tus lecturas.",
        variantes: ["Flor simple", "Flor doble"],
        colores: ["Rosa", "Amarillo", "Lila"],
        stock: 10,
        tallas: ["Único"]
    },

    {
        id: "ramo-tejido",
        nombre: "Ramo tejido",
        categoria: "Ramos",
        cotizador: "Ramo tejido",
        precio: 65000,
        rating: 4.9,
        reviews: 31,
        popularidad: 99,
        fecha: "2026-08-09",
        imagenes: [
            "https://i.pinimg.com/736x/0b/fb/18/0bfb18c98267ba2dae37a08fcc997523.jpg"
        ],
        descripcion:
            "Ramo artesanal con flores tejidas que conserva su color y forma como recuerdo.",
        variantes: ["Ramo pequeño", "Ramo clásico", "Ramo especial"],
        colores: ["Rosa", "Pastel", "Mixto"],
        stock: 5,
        tallas: ["Pequeño", "Mediano", "Grande"]
    },

    {
        id: "bolso-rosa",
        nombre: "Bolso crochet rosa",
        categoria: "Bolsos",
        cotizador: "Bolso tejido",
        precio: 85000,
        rating: 4.8,
        reviews: 27,
        popularidad: 91,
        fecha: "2026-08-07",
        imagenes: [
            "https://i.pinimg.com/736x/be/68/09/be68093c20e1df95900c7458e324ce70.jpg"
        ],
        descripcion:
            "Bolso tejido para el día a día, con opciones de color y detalles personalizables.",
        variantes: ["Correa corta", "Correa larga"],
        colores: ["Rosa", "Crema", "Marrón"],
        stock: 4,
        tallas: ["Mediano", "Grande"]
    }
];


/* =========================================================
   RESEÑAS MOCK
   ========================================================= */

const mockReviews = {
    "amigurumi-honguito": [
        {
            rating: 5,
            comment: "Datos mock de demostración: acabado bonito.",
            user: "Cliente demo",
            date: "2026-07-12",
            verified: true,
            photo: ""
        },
        {
            rating: 4,
            comment: "Datos mock de demostración: buen detalle.",
            user: "Usuario demo",
            date: "2026-06-28",
            verified: false,
            photo: ""
        }
    ],

    "ramo-tejido": [
        {
            rating: 5,
            comment: "Datos mock de demostración: ejemplo de opinión.",
            user: "Cliente demo",
            date: "2026-07-04",
            verified: true,
            photo: ""
        }
    ]
};


/* =========================================================
   CUPONES
   ========================================================= */

const couponCatalog = [
    {
        code: "LUNA20",
        discount: 0.20,
        expires: "2026-12-31",
        min: 80000,
        category: null
    },

    {
        code: "AMIGURUMI10",
        discount: 0.10,
        expires: "2026-12-31",
        min: 45000,
        category: "Amigurumis"
    }
];


/* =========================================================
   ESTADO GLOBAL
   ========================================================= */

const state = {
    category: "Todos",
    sort: "recent",
    favoritesOnly: false,

    cart: JSON.parse(
        localStorage.getItem("hilitosCart") || "[]"
    ),

    favorites: JSON.parse(
        localStorage.getItem("hilitosFavorites") || "[]"
    ),

    coupon: null,
    checkoutStep: 1,
    currentProduct: null
};


/* =========================================================
   HELPERS
   ========================================================= */

const $ = (selector, root = document) =>
    root.querySelector(selector);

const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];


function formatearPesos(valor) {
    return Number(valor || 0).toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });
}


function guardarEstado() {
    localStorage.setItem(
        "hilitosCart",
        JSON.stringify(state.cart)
    );

    localStorage.setItem(
        "hilitosFavorites",
        JSON.stringify(state.favorites)
    );
}


function escapeHtml(value) {
    return String(value ?? "").replace(
        /[&<>"']/g,
        char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        }[char])
    );
}


/* =========================================================
   TOAST / NOTIFICACIONES
   ========================================================= */

function showToast(message, type = "success") {

    const region = $("#toastRegion");

    if (!region) return;

    const toast = document.createElement("div");

    toast.className = `app-toast ${type}`;

    toast.setAttribute("role", "status");

    toast.innerHTML = `
        <i class="fas ${
            type === "error"
                ? "fa-circle-exclamation"
                : "fa-circle-check"
        }"></i>

        <span>${escapeHtml(message)}</span>
    `;

    region.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 250);

    }, 3200);
}


/* =========================================================
   PRODUCTOS
   ========================================================= */

function getProduct(id) {
    return productos.find(
        producto => producto.id === id
    );
}


/* =========================================================
   CARRITO
   ========================================================= */

function cartQuantity() {

    return state.cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );
}


function cartSubtotal() {

    return state.cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );
}


function calculateDiscount() {

    if (!state.coupon) return 0;

    const subtotal = cartSubtotal();

    const applicable = state.cart.filter(item => {

        const product =
            getProduct(item.productId);

        return (
            !state.coupon.category ||
            product?.categoria ===
                state.coupon.category
        );
    });

    const base = applicable.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    return Math.round(
        base * state.coupon.discount
    );
}


function updateCartCount() {

    const count = $("#cartCount");

    if (count) {
        count.textContent = cartQuantity();
    }
}


/* =========================================================
   FAVORITOS
   ========================================================= */

function isFavorite(id) {

    return state.favorites.includes(id);
}


function toggleFavorite(id) {

    if (isFavorite(id)) {

        state.favorites =
            state.favorites.filter(
                item => item !== id
            );

        showToast(
            "Producto eliminado de favoritos."
        );

    } else {

        state.favorites.push(id);

        showToast(
            "Producto guardado en favoritos."
        );
    }

    guardarEstado();

    renderProducts();

    if (state.currentProduct === id) {
        renderProductDetail(id);
    }
}


/* =========================================================
   AGREGAR PRODUCTO AL CARRITO
   ========================================================= */

function addToCart(
    productId,
    options = {},
    quantity = 1
) {

    const product = getProduct(productId);

    if (!product) return;

    const qty = Math.max(
        1,
        Math.min(
            Number(quantity) || 1,
            product.stock ?? 99
        )
    );

    const variantKey =
        `${options.variant || ""}|` +
        `${options.color || ""}|` +
        `${options.size || ""}`;

    const existing = state.cart.find(
        item =>
            item.productId === productId &&
            item.variantKey === variantKey
    );

    if (existing) {

        existing.quantity = Math.min(
            existing.quantity + qty,
            product.stock ?? 99
        );

    } else {

        state.cart.push({

            productId,

            variant: options.variant || "",

            color: options.color || "",

            size: options.size || "",

            variantKey,

            quantity: qty,

            price: product.price
        });
    }

    guardarEstado();

    updateCartCount();

    renderMiniCart();

    renderCartView();

    showToast(
        "Producto agregado al carrito."
    );

    openMiniCart();
}


/* =========================================================
   ELIMINAR PRODUCTO
   ========================================================= */

function removeCartItem(index) {

    state.cart.splice(index, 1);

    if (!state.cart.length) {
        state.coupon = null;
    }

    guardarEstado();

    updateCartCount();

    renderMiniCart();

    renderCartView();

    showToast(
        "Producto eliminado."
    );
}


/* =========================================================
   MODIFICAR CANTIDAD
   ========================================================= */

function changeCartQuantity(index, delta) {

    const item = state.cart[index];

    if (!item) return;

    const product =
        getProduct(item.productId);

    const max =
        product?.stock ?? 99;

    item.quantity = Math.max(
        1,
        Math.min(
            max,
            item.quantity + delta
        )
    );

    guardarEstado();

    updateCartCount();

    renderMiniCart();

    renderCartView();
}


/* =========================================================
   ESTRELLAS
   ========================================================= */

function renderStars(rating) {

    return `
        <span
            class="stars"
            aria-label="${rating} de 5 estrellas"
        >
            ${
                [1, 2, 3, 4, 5]
                    .map(
                        i =>
                            `<i class="fa${
                                i <= Math.round(rating)
                                    ? "s"
                                    : "r"
                            } fa-star"></i>`
                    )
                    .join("")
            }
        </span>
    `;
}


/* =========================================================
   CATÁLOGO
   ========================================================= */

function renderProducts() {

    const grid = $("#productGrid");

    if (!grid) return;

    let list = productos.filter(
        product =>
            state.category === "Todos" ||
            product.categoria ===
                state.category
    );

    if (state.favoritesOnly) {

        list = list.filter(
            product =>
                isFavorite(product.id)
        );
    }


    const favoritesButton =
        $("#favoritesOnly");

    if (favoritesButton) {

        favoritesButton.classList.toggle(
            "active",
            state.favoritesOnly
        );

        favoritesButton.setAttribute(
            "aria-pressed",
            state.favoritesOnly
        );

        favoritesButton.innerHTML = `
            <i class="fa${
                state.favoritesOnly
                    ? "s"
                    : "r"
            } fa-heart"></i>

            Favoritos
        `;
    }


    if (state.sort === "recent") {

        list.sort(
            (a, b) =>
                new Date(b.fecha) -
                new Date(a.fecha)
        );
    }


    if (state.sort === "popular") {

        list.sort(
            (a, b) =>
                b.popularidad -
                a.popularidad
        );
    }


    if (state.sort === "priceAsc") {

        list.sort(
            (a, b) =>
                a.precio -
                b.precio
        );
    }


    if (state.sort === "priceDesc") {

        list.sort(
            (a, b) =>
                b.precio -
                a.precio
        );
    }


    const resultCount =
        $("#productResultCount");

    if (resultCount) {

        resultCount.textContent =
            `${list.length} producto${
                list.length === 1
                    ? ""
                    : "s"
            }`;
    }


    grid.innerHTML = list.map(
        product => `
            <div class="col-sm-6 col-lg-4 col-xl-3">

                <article
                    class="product-card ecommerce-product-card"
                >

                    <div class="product-image-wrap">

                        <img
                            src="${product.imagenes[0]}"
                            alt="${escapeHtml(product.nombre)}"
                            loading="lazy"
                        >

                        <button
                            class="favorite-button ${
                                isFavorite(product.id)
                                    ? "is-favorite"
                                    : ""
                            }"
                            type="button"
                            data-favorite="${product.id}"
                            aria-label="${
                                isFavorite(product.id)
                                    ? "Quitar de favoritos"
                                    : "Agregar a favoritos"
                            }"
                            aria-pressed="${
                                isFavorite(product.id)
                            }"
                        >

                            <i class="fa${
                                isFavorite(product.id)
                                    ? "s"
                                    : "r"
                            } fa-heart"></i>

                        </button>


                        <button
                            class="product-detail-link"
                            type="button"
                            data-detail="${product.id}"
                        >
                            Ver detalle
                        </button>

                    </div>


                    <div
                        class="product-body ecommerce-product-body"
                    >

                        <span>
                            ${escapeHtml(
                                product.categoria
                            )}
                        </span>


                        <h3>
                            ${escapeHtml(
                                product.nombre
                            )}
                        </h3>


                        <div class="product-rating">

                            ${renderStars(
                                product.rating
                            )}

                            <strong>
                                ${product.rating.toFixed(1)}
                            </strong>

                            <small>
                                ${product.reviews} reseñas
                            </small>

                        </div>


                        <div class="product-footer">

                            <strong
                                class="product-price"
                            >
                                ${formatearPesos(
                                    product.precio
                                )}
                            </strong>


                            <button
                                class="btn btn-shop btn-sm"
                                type="button"
                                data-add="${product.id}"
                            >
                                Agregar al carrito
                            </button>

                        </div>

                    </div>

                </article>

            </div>
        `
    ).join("");
}


/* =========================================================
   DETALLE DEL PRODUCTO
   ========================================================= */

function renderProductDetail(id) {

    const product =
        getProduct(id);

    const content =
        $("#productDetailContent");

    if (!product || !content) return;

    state.currentProduct = id;

    const variants =
        product.variantes || [];

    const colors =
        product.colores || [];

    const sizes =
        product.tallas || ["Único"];


    content.innerHTML = `

        <div class="row g-4 g-xl-5">

            <div class="col-lg-6">

                <div class="detail-gallery-main">

                    <img
                        id="detailMainImage"
                        src="${product.imagenes[0]}"
                        alt="${escapeHtml(
                            product.nombre
                        )}"
                    >

                </div>


                <div class="detail-thumbs">

                    ${product.imagenes
                        .map(
                            (img, i) => `
                                <button
                                    type="button"
                                    class="${
                                        i === 0
                                            ? "active"
                                            : ""
                                    }"
                                    data-detail-image="${img}"
                                    aria-label="Ver imagen ${
                                        i + 1
                                    }"
                                >

                                    <img
                                        src="${img}"
                                        alt=""
                                    >

                                </button>
                            `
                        )
                        .join("")}

                </div>

            </div>


            <div class="col-lg-6">

                <span class="product-category">
                    ${escapeHtml(
                        product.categoria
                    )}
                </span>


                <h2 class="detail-title">
                    ${escapeHtml(
                        product.nombre
                    )}
                </h2>


                <div class="detail-rating">

                    ${renderStars(
                        product.rating
                    )}

                    <strong>
                        ${product.rating.toFixed(1)}
                    </strong>

                    <span>
                        ${product.reviews} reseñas
                    </span>

                </div>


                <strong class="detail-price">
                    ${formatearPesos(
                        product.precio
                    )}
                </strong>


                <p class="text-muted">
                    ${escapeHtml(
                        product.descripcion
                    )}
                </p>


                <div class="detail-stock">

                    ${
                        product.stock != null
                            ? `${product.stock} disponibles`
                            : "Stock por confirmar"
                    }

                </div>


                ${
                    variants.length
                        ? `
                            <div class="detail-field">

                                <label
                                    for="detailVariant"
                                >
                                    Variante
                                </label>

                                <select
                                    id="detailVariant"
                                    class="form-select"
                                >

                                    ${variants
                                        .map(
                                            v =>
                                                `<option>${escapeHtml(
                                                    v
                                                )}</option>`
                                        )
                                        .join("")}

                                </select>

                            </div>
                        `
                        : ""
                }


                ${
                    colors.length
                        ? `
                            <div class="detail-field">

                                <label
                                    for="detailColor"
                                >
                                    Color
                                </label>

                                <select
                                    id="detailColor"
                                    class="form-select"
                                >

                                    ${colors
                                        .map(
                                            v =>
                                                `<option>${escapeHtml(
                                                    v
                                                )}</option>`
                                        )
                                        .join("")}

                                </select>

                            </div>
                        `
                        : ""
                }


                <div class="detail-field">

                    <label
                        for="detailSize"
                    >
                        Tamaño
                    </label>

                    <select
                        id="detailSize"
                        class="form-select"
                    >

                        ${sizes
                            .map(
                                v =>
                                    `<option>${escapeHtml(
                                        v
                                    )}</option>`
                            )
                            .join("")}

                    </select>

                </div>


                <div class="detail-field">

                    <label
                        for="detailQuantity"
                    >
                        Cantidad
                    </label>


                    <div class="quantity-control">

                        <button
                            type="button"
                            data-detail-qty="-1"
                            aria-label="Disminuir cantidad"
                        >
                            −
                        </button>


                        <input
                            id="detailQuantity"
                            type="number"
                            min="1"
                            max="${
                                product.stock ?? 99
                            }"
                            value="1"
                            aria-label="Cantidad"
                        >


                        <button
                            type="button"
                            data-detail-qty="1"
                            aria-label="Aumentar cantidad"
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    class="btn btn-shop btn-lg w-100 mt-3"
                    type="button"
                    id="detailAddButton"
                >
                    Agregar al carrito
                </button>

            </div>

        </div>


        <div
            class="reviews-section mt-5 pt-4 border-top"
        >

            <div
                class="d-flex flex-wrap justify-content-between align-items-end gap-3"
            >

                <div>

                    <span class="section-label">
                        Opiniones
                    </span>

                    <h3>
                        Lo que dicen de esta pieza
                    </h3>

                    <small class="mock-label">
                        Las opiniones mostradas aquí
                        son datos MOCK de demostración,
                        no reseñas reales.
                    </small>

                </div>


                <select
                    id="reviewFilter"
                    class="form-select review-filter"
                    aria-label="Filtrar reseñas por puntuación"
                >

                    <option value="all">
                        Todas las puntuaciones
                    </option>

                    <option value="5">
                        5 estrellas
                    </option>

                    <option value="4">
                        4 estrellas
                    </option>

                    <option value="3">
                        3 estrellas
                    </option>

                    <option value="2">
                        2 estrellas
                    </option>

                    <option value="1">
                        1 estrella
                    </option>

                </select>

            </div>


            <div
                id="reviewList"
                class="review-list mt-4"
            ></div>


            <div
                class="review-gate mt-4"
            >

                <i class="fas fa-lock"></i>

                <span>
                    La publicación de reseñas se habilitará
                    únicamente para compras verificadas
                    cuando exista autenticación/persistencia
                    de pedidos en backend.
                </span>

            </div>

        </div>
    `;


    $("#detailAddButton").addEventListener(
        "click",
        () => {

            const quantity =
                Number(
                    $("#detailQuantity").value
                ) || 1;


            addToCart(
                product.id,
                {
                    variant:
                        $("#detailVariant")?.value,

                    color:
                        $("#detailColor")?.value,

                    size:
                        $("#detailSize")?.value
                },
                quantity
            );
        }
    );


    renderReviews(product.id);
}


/* =========================================================
   RESEÑAS
   ========================================================= */

function renderReviews(productId) {

    const list =
        $("#reviewList");

    if (!list) return;

    const filter =
        $("#reviewFilter")?.value ||
        "all";

    const reviews =
        (
            mockReviews[productId] ||
            []
        ).filter(
            review =>
                filter === "all" ||
                String(review.rating) === filter
        );


    list.innerHTML =
        reviews.length
            ? reviews
                  .map(
                      review => `
                        <article class="review-item">

                            <div class="review-avatar">
                                <i class="fas fa-user"></i>
                            </div>


                            <div class="flex-grow-1">

                                <div
                                    class="d-flex flex-wrap justify-content-between gap-2"
                                >

                                    <strong>
                                        ${escapeHtml(
                                            review.user
                                        )}
                                    </strong>


                                    <time
                                        datetime="${review.date}"
                                    >
                                        ${
                                            new Date(
                                                review.date +
                                                    "T12:00:00"
                                            ).toLocaleDateString(
                                                "es-CO"
                                            )
                                        }
                                    </time>

                                </div>


                                <div>

                                    ${renderStars(
                                        review.rating
                                    )}


                                    ${
                                        review.verified
                                            ? `
                                                <span
                                                    class="verified-badge"
                                                >
                                                    <i
                                                        class="fas fa-circle-check"
                                                    ></i>

                                                    Compra verificada
                                                </span>
                                            `
                                            : ""
                                    }

                                </div>


                                <p>
                                    ${escapeHtml(
                                        review.comment
                                    )}
                                </p>


                                ${
                                    review.photo
                                        ? `
                                            <img
                                                class="review-photo"
                                                src="${review.photo}"
                                                alt="Fotografía de la reseña"
                                            >
                                        `
                                        : ""
                                }

                            </div>

                        </article>
                      `
                  )
                  .join("")
            : `
                <p class="text-muted mb-0">
                    No hay datos mock para esta puntuación.
                </p>
            `;
}


/* =========================================================
   MINICART
   ========================================================= */

function renderMiniCart() {

    const container =
        $("#miniCartItems");

    if (!container) return;


    if (!state.cart.length) {

        container.innerHTML = `

            <div class="empty-cart">

                <i class="fas fa-bag-shopping"></i>

                <p>
                    Tu carrito está esperando algo bonito 💗
                </p>

                <button
                    class="btn btn-shop"
                    type="button"
                    data-close-cart
                >
                    Ir a la tienda
                </button>

            </div>
        `;


        $("#miniCartSubtotal").textContent =
            formatearPesos(0);

        return;
    }


    container.innerHTML =
        state.cart
            .map(
                item => {

                    const product =
                        getProduct(
                            item.productId
                        );

                    return `
                        <article
                            class="mini-cart-item"
                        >

                            <img
                                src="${product.imagenes[0]}"
                                alt=""
                            >


                            <div class="flex-grow-1">

                                <strong>
                                    ${escapeHtml(
                                        product.nombre
                                    )}
                                </strong>

                                <small>
                                    ${
                                        item.quantity
                                    }
                                    ×
                                    ${formatearPesos(
                                        item.price
                                    )}
                                </small>

                            </div>


                            <strong>
                                ${formatearPesos(
                                    item.price *
                                        item.quantity
                                )}
                            </strong>

                        </article>
                    `;
                }
            )
            .join("");


    $("#miniCartSubtotal").textContent =
        formatearPesos(
            cartSubtotal()
        );
}


/* =========================================================
   VISTA DEL CARRITO
   ========================================================= */

function renderCartView() {

    const content =
        $("#cartViewContent");

    if (!content) return;


    if (!state.cart.length) {

        content.innerHTML = `

            <div class="empty-cart large">

                <i class="fas fa-bag-shopping"></i>

                <h3>
                    Tu carrito está esperando algo bonito 💗
                </h3>

                <p class="text-muted">
                    Agrega una pieza desde la tienda
                    para comenzar.
                </p>

                <button
                    class="btn btn-shop"
                    type="button"
                    data-close-cart
                >
                    Ir a la tienda
                </button>

            </div>
        `;

        return;
    }


    const discount =
        calculateDiscount();


    content.innerHTML = `

        <div class="cart-items-list">

            ${
                state.cart
                    .map(
                        (item, index) => {

                            const product =
                                getProduct(
                                    item.productId
                                );

                            return `
                                <article
                                    class="cart-line"
                                >

                                    <img
                                        src="${product.imagenes[0]}"
                                        alt="${escapeHtml(
                                            product.nombre
                                        )}"
                                    >


                                    <div
                                        class="cart-line-main"
                                    >

                                        <strong>
                                            ${escapeHtml(
                                                product.nombre
                                            )}
                                        </strong>


                                        <small>
                                            ${
                                                [
                                                    item.variant,
                                                    item.color,
                                                    item.size
                                                ]
                                                    .filter(
                                                        Boolean
                                                    )
                                                    .join(
                                                        " · "
                                                    )
                                            }
                                        </small>


                                        <span>
                                            ${formatearPesos(
                                                item.price
                                            )}
                                            unidad
                                        </span>

                                    </div>


                                    <div
                                        class="quantity-control"
                                    >

                                        <button
                                            type="button"
                                            data-cart-minus="${index}"
                                            aria-label="Disminuir cantidad"
                                        >
                                            −
                                        </button>


                                        <span>
                                            ${item.quantity}
                                        </span>


                                        <button
                                            type="button"
                                            data-cart-plus="${index}"
                                            aria-label="Aumentar cantidad"
                                        >
                                            +
                                        </button>

                                    </div>


                                    <strong
                                        class="cart-line-subtotal"
                                    >
                                        ${formatearPesos(
                                            item.price *
                                                item.quantity
                                        )}
                                    </strong>


                                    <button
                                        class="icon-button danger"
                                        type="button"
                                        data-remove-cart="${index}"
                                        aria-label="Eliminar ${escapeHtml(
                                            product.nombre
                                        )}"
                                    >

                                        <i
                                            class="fas fa-trash"
                                        ></i>

                                    </button>

                                </article>
                            `;
                        }
                    )
                    .join("")
            }

        </div>


        <div class="coupon-box">

            <label for="couponInput">
                ¿Tienes un código promocional?
            </label>


            <div class="d-flex gap-2">

                <input
                    id="couponInput"
                    class="form-control"
                    placeholder="Código"
                >


                <button
                    id="applyCoupon"
                    class="btn btn-outline-dark"
                    type="button"
                >
                    Aplicar
                </button>

            </div>


            <small
                id="couponMessage"
                class="${
                    state.coupon
                        ? "text-success"
                        : ""
                }"
            >
                ${
                    state.coupon
                        ? `Cupón ${state.coupon.code} aplicado.`
                        : ""
                }
            </small>

        </div>


        <div class="cart-summary">

            <div>
                <span>
                    Subtotal
                </span>

                <strong>
                    ${formatearPesos(
                        cartSubtotal()
                    )}
                </strong>
            </div>


            <div>
                <span>
                    Descuento
                </span>

                <strong class="discount-text">
                    -${formatearPesos(
                        discount
                    )}
                </strong>
            </div>


            <div class="cart-total">

                <span>
                    Total
                </span>

                <strong>
                    ${formatearPesos(
                        cartSubtotal() -
                            discount
                    )}
                </strong>

            </div>

        </div>


        <button
            class="btn btn-shop btn-lg w-100"
            type="button"
            data-open-checkout
        >
            Finalizar compra
        </button>
    `;
}


/* =========================================================
   VALIDAR CUPÓN
   ========================================================= */

function validateCoupon(code) {

    const coupon =
        couponCatalog.find(
            coupon =>
                coupon.code ===
                code.toUpperCase()
        );


    if (!coupon) {

        return {
            ok: false,
            message: "El cupón no es válido."
        };
    }


    if (
        new Date(
            coupon.expires +
                "T23:59:59"
        ) < new Date()
    ) {

        return {
            ok: false,
            message:
                "El cupón ya no está vigente."
        };
    }


    if (
        cartSubtotal() <
        coupon.min
    ) {

        return {
            ok: false,
            message:
                `El monto mínimo es ${formatearPesos(
                    coupon.min
                )}.`
        };
    }


    if (
        coupon.category &&
        !state.cart.some(
            item =>
                getProduct(
                    item.productId
                )?.categoria ===
                coupon.category
        )
    ) {

        return {
            ok: false,
            message:
                "El cupón no aplica a los productos actuales."
        };
    }


    return {
        ok: true,
        coupon
    };
}


/* =========================================================
   CHECKOUT
   ========================================================= */

function renderCheckout() {

    const container =
        $("#checkoutContent");

    if (!container) return;


    const total =
        cartSubtotal() -
        calculateDiscount();

    const half =
        Math.round(total / 2);


    $$(".checkout-step").forEach(
        element => {

            element.classList.toggle(
                "active",
                Number(
                    element.dataset
                        .stepIndicator
                ) ===
                    state.checkoutStep
            );
        }
    );


    /* PASO 1 */

    if (state.checkoutStep === 1) {

        container.innerHTML = `

            <div class="checkout-panel">

                <h3>
                    PASO 1 — Datos de envío
                </h3>


                <div class="row g-3">

                    <div class="col-md-6">

                        <label
                            class="form-label"
                            for="checkoutName"
                        >
                            Nombre completo
                        </label>

                        <input
                            id="checkoutName"
                            class="form-control"
                            required
                        >

                    </div>


                    <div class="col-md-6">

                        <label
                            class="form-label"
                            for="checkoutEmail"
                        >
                            Correo
                        </label>

                        <input
                            id="checkoutEmail"
                            class="form-control"
                            type="email"
                            required
                        >

                    </div>


                    <div class="col-md-8">

                        <label
                            class="form-label"
                            for="checkoutAddress"
                        >
                            Dirección
                        </label>

                        <input
                            id="checkoutAddress"
                            class="form-control"
                            required
                        >

                    </div>


                    <div class="col-md-4">

                        <label
                            class="form-label"
                            for="checkoutCity"
                        >
                            Ciudad
                        </label>

                        <input
                            id="checkoutCity"
                            class="form-control"
                            required
                        >

                    </div>

                </div>


                <button
                    class="btn btn-shop mt-4"
                    data-checkout-next
                    type="button"
                >
                    Continuar
                </button>

            </div>
        `;
    }


    /* PASO 2 */

    else if (
        state.checkoutStep === 2
    ) {

        container.innerHTML = `

            <div class="checkout-panel">

                <h3>
                    PASO 2 — Método de entrega
                </h3>


                <div class="payment-options">

                    <label>

                        <input
                            type="radio"
                            name="delivery"
                            value="domicilio"
                            checked
                        >

                        <span>

                            <strong>
                                Envío a domicilio
                            </strong>

                            <small>
                                Costo y cobertura por confirmar.
                            </small>

                        </span>

                    </label>


                    <label>

                        <input
                            type="radio"
                            name="delivery"
                            value="acuerdo"
                        >

                        <span>

                            <strong>
                                Coordinar entrega
                            </strong>

                            <small>
                                Disponible para acordar con la tienda.
                            </small>

                        </span>

                    </label>

                </div>


                <div class="checkout-nav">

                    <button
                        class="btn btn-outline-dark"
                        data-checkout-back
                        type="button"
                    >
                        Atrás
                    </button>


                    <button
                        class="btn btn-shop"
                        data-checkout-next
                        type="button"
                    >
                        Continuar
                    </button>

                </div>

            </div>
        `;
    }


    /* PASO 3 */

    else if (
        state.checkoutStep === 3
    ) {

        container.innerHTML = `

            <div class="checkout-panel">

                <h3>
                    PASO 3 — Método de pago
                </h3>


                <div class="payment-options">

                    <label>

                        <input
                            type="radio"
                            name="payment"
                            value="tarjeta"
                            checked
                        >

                        <span>

                            <strong>
                                Tarjeta
                            </strong>

                            <small>
                                Interfaz preparada para pasarela futura.
                            </small>

                        </span>

                    </label>


                    <label>

                        <input
                            type="radio"
                            name="payment"
                            value="pse"
                        >

                        <span>

                            <strong>
                                PSE
                            </strong>

                            <small>
                                Integración real pendiente de backend/pasarela.
                            </small>

                        </span>

                    </label>


                    <label>

                        <input
                            type="radio"
                            name="payment"
                            value="transferencia"
                        >

                        <span>

                            <strong>
                                Transferencia
                            </strong>

                            <small>
                                Los datos bancarios deberán venir
                                del backend/configuración real.
                            </small>

                        </span>

                    </label>

                </div>


                <div class="deposit-box">

                    <strong>
                        ¿Es un pedido personalizado?
                    </strong>


                    <label>

                        <input
                            type="radio"
                            name="deposit"
                            value="100"
                            checked
                        >

                        Pagar 100% —
                        ${formatearPesos(total)}

                    </label>


                    <label>

                        <input
                            type="radio"
                            name="deposit"
                            value="50"
                        >

                        Abono 50% —
                        ${formatearPesos(half)}

                        <small>
                            Saldo restante:
                            ${formatearPesos(
                                total - half
                            )}
                        </small>

                    </label>

                </div>


                <div class="checkout-nav">

                    <button
                        class="btn btn-outline-dark"
                        data-checkout-back
                        type="button"
                    >
                        Atrás
                    </button>


                    <button
                        class="btn btn-shop"
                        data-checkout-next
                        type="button"
                    >
                        Continuar
                    </button>

                </div>

            </div>
        `;
    }


    /* PASO 4 */

    else {

        container.innerHTML = `

            <div class="checkout-panel">

                <h3>
                    PASO 4 — Confirmación
                </h3>


                <div class="coupon-box mb-4">

                    <label
                        for="checkoutCouponInput"
                    >
                        ¿Tienes un código promocional?
                    </label>


                    <div class="d-flex gap-2">

                        <input
                            id="checkoutCouponInput"
                            class="form-control"
                            placeholder="Código"
                            value="${
                                state.coupon?.code || ""
                            }"
                        >


                        <button
                            id="applyCheckoutCoupon"
                            class="btn btn-outline-dark"
                            type="button"
                        >
                            Aplicar
                        </button>

                    </div>


                    <small>

                        ${
                            state.coupon
                                ? `Cupón ${escapeHtml(
                                      state.coupon.code
                                  )} aplicado.`
                                : ""
                        }

                    </small>

                </div>


                <div class="checkout-confirm">

                    <div>

                        <span>
                            Total
                        </span>

                        <strong>
                            ${formatearPesos(
                                total
                            )}
                        </strong>

                    </div>


                    <p>
                        El checkout es una interfaz frontend.
                        No se realizará ningún cobro real
                        hasta conectar una pasarela y un backend.
                    </p>


                    <button
                        class="btn btn-shop btn-lg w-100"
                        id="confirmOrder"
                        type="button"
                    >
                        Confirmar solicitud de compra
                    </button>


                    <button
                        class="btn btn-link w-100 mt-2"
                        data-checkout-back
                        type="button"
                    >
                        Volver
                    </button>

                </div>

            </div>
        `;
    }
}


/* =========================================================
   MINICART
   ========================================================= */

function openMiniCart() {

    const panel =
        $("#miniCart");

    const backdrop =
        $("#cartBackdrop");

    if (!panel) return;

    panel.classList.add("open");

    backdrop?.classList.add(
        "show"
    );

    panel.setAttribute(
        "aria-hidden",
        "false"
    );
}


function closeMiniCart() {

    $("#miniCart")?.classList.remove(
        "open"
    );

    $("#cartBackdrop")?.classList.remove(
        "show"
    );

    $("#miniCart")?.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* =========================================================
   BOOTSTRAP MODALS
   ========================================================= */

function openBootstrapModal(id) {

    const element =
        document.getElementById(id);

    if (
        !element ||
        !window.bootstrap
    ) {
        return null;
    }

    return bootstrap.Modal.getOrCreateInstance(
        element
    );
}


function openCartModal() {

    closeMiniCart();

    renderCartView();

    openBootstrapModal(
        "cartModal"
    )?.show();
}


function openCheckout() {

    if (!state.cart.length) {

        showToast(
            "Agrega al menos un producto antes de finalizar.",
            "error"
        );

        return;
    }


    closeMiniCart();

    state.checkoutStep = 1;

    renderCheckout();

    openBootstrapModal(
        "checkoutModal"
    )?.show();
}


/* =========================================================
   VALIDAR CHECKOUT
   ========================================================= */

function validateCheckoutStep() {

    if (
        state.checkoutStep !== 1
    ) {
        return true;
    }


    const required = [
        "#checkoutName",
        "#checkoutEmail",
        "#checkoutAddress",
        "#checkoutCity"
    ];


    let valid = true;


    required.forEach(
        selector => {

            const input =
                $(selector);

            if (!input) return;


            const value =
                input.value.trim();


            const ok =
                value &&
                (
                    input.type !==
                        "email" ||
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                        value
                    )
                );


            input.classList.toggle(
                "is-invalid",
                !ok
            );


            valid =
                valid &&
                Boolean(ok);
        }
    );


    if (!valid) {

        showToast(
            "Revisa los campos obligatorios.",
            "error"
        );
    }


    return valid;
}


/* =========================================================
   COTIZADOR
   ========================================================= */

function iniciarCotizador() {

    const productoSelect =
        $("#productoCotizado");

    const tamanoSelect =
        $("#tamanoCotizado");

    const cantidadInput =
        $("#cantidadCotizada");

    const extraSelect =
        $("#extraCotizado");

    const totalCotizado =
        $("#totalCotizado");

    const detalleCotizado =
        $("#detalleCotizado");


    if (!productoSelect) {
        return;
    }


    function llenarSelect(
        select,
        opciones,
        obtenerTexto
    ) {

        select.innerHTML = "";


        opciones.forEach(
            (opcion, indice) => {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    indice;

                option.textContent =
                    obtenerTexto(opcion);

                select.appendChild(
                    option
                );
            }
        );
    }


    function calcularCotizacion() {

        const pi =
            Number(
                productoSelect.value
            );

        const ti =
            Number(
                tamanoSelect.value
            );

        const ei =
            Number(
                extraSelect.value
            );


        const cantidad =
            Math.max(
                1,
                Math.min(
                    12,
                    Number(
                        cantidadInput.value
                    ) || 1
                )
            );


        cantidadInput.value =
            cantidad;


        const precioBase =
            matrizPrecios[pi][ti];

        const precioExtra =
            extras[ei].precio;


        const total =
            (
                precioBase +
                precioExtra
            ) * cantidad;


        totalCotizado.textContent =
            formatearPesos(total);


        detalleCotizado.textContent =
            `${cantidad} ${
                productosCrochet[pi]
            } ${
                tamanos[ti].toLowerCase()
            } con ${
                extras[ei].nombre.toLowerCase()
            }.`;


        const summary = {

            "#quoteProductoResumen":
                productosCrochet[pi],

            "#quoteTamanoResumen":
                tamanos[ti],

            "#quoteCantidadResumen":
                cantidad,

            "#quoteExtraResumen":
                extras[ei].nombre
        };


        Object.entries(
            summary
        ).forEach(
            ([selector, value]) => {

                if ($(selector)) {

                    $(selector)
                        .textContent =
                        value;
                }
            }
        );
    }


    llenarSelect(
        productoSelect,
        productosCrochet,
        product => product
    );


    llenarSelect(
        tamanoSelect,
        tamanos,
        tamano => tamano
    );


    llenarSelect(
        extraSelect,
        extras,
        extra =>
            `${extra.nombre} + ${formatearPesos(
                extra.precio
            )}`
    );


    [
        productoSelect,
        tamanoSelect,
        cantidadInput,
        extraSelect
    ].forEach(
        elemento => {

            elemento.addEventListener(
                "input",
                calcularCotizacion
            );
        }
    );


    calcularCotizacion();


    $("#quoteRequestBtn")?.addEventListener(
        "click",
        () => {

            const product =
                productoSelect
                    .options[
                        productoSelect
                            .selectedIndex
                    ]
                    .textContent;


            const detail =
                `${cantidadInput.value} ${
                    product
                } ${
                    tamanoSelect
                        .options[
                            tamanoSelect
                                .selectedIndex
                        ]
                        .textContent
                        .toLowerCase()
                } con ${
                    extraSelect
                        .options[
                            extraSelect
                                .selectedIndex
                        ]
                        .textContent
                        .split(" + ")[0]
                        .toLowerCase()
                }`;


            const description =
                $("#contactDescription");


            if (description) {

                description.value =
                    `Solicitud desde cotizador: ${detail}. ${
                        description.value
                    }`.trim();
            }


            document
                .getElementById("contacto")
                ?.scrollIntoView({
                    behavior: "smooth"
                });


            showToast(
                "Configuración cargada en el encargo."
            );
        }
    );
}


/* =========================================================
   FORMULARIO DE CONTACTO
   ========================================================= */

function iniciarContacto() {

    const form =
        $("#contactForm");

    if (!form) return;


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                $("#contactName");

            const email =
                $("#contactEmail");

            const product =
                $("#contactProduct");

            const description =
                $("#contactDescription");


            const fields = [
                name,
                email,
                product,
                description
            ];


            let valid = true;


            fields.forEach(
                input => {

                    if (!input) return;


                    const value =
                        input.value.trim();


                    const ok =
                        value &&
                        (
                            input.type !==
                                "email" ||
                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                                value
                            )
                        );


                    input.classList.toggle(
                        "is-invalid",
                        !ok
                    );


                    valid =
                        valid &&
                        Boolean(ok);
                }
            );


            if (!valid) {

                showToast(
                    "Revisa los campos obligatorios.",
                    "error"
                );

                return;
            }


            form.reset();


            fields.forEach(
                input => {

                    if (input) {

                        input.classList.remove(
                            "is-invalid"
                        );
                    }
                }
            );


            showToast(
                "Tu solicitud fue enviada."
            );
        }
    );
}


/* =========================================================
   EVENTOS
   ========================================================= */

function iniciarEventos() {

    /* FILTROS */

    $("#productFilters")
        ?.addEventListener(
            "click",
            event => {

                const button =
                    event.target.closest(
                        "[data-category]"
                    );


                if (!button) return;


                state.category =
                    button.dataset.category;


                $$(".filter-chip")
                    .forEach(
                        b => {

                            const active =
                                b === button;


                            b.classList.toggle(
                                "active",
                                active
                            );


                            b.setAttribute(
                                "aria-pressed",
                                active
                            );
                        }
                    );


                renderProducts();
            }
        );


    /* ORDENAMIENTO */

    $("#productSort")
        ?.addEventListener(
            "change",
            event => {

                state.sort =
                    event.target.value;

                renderProducts();
            }
        );


    /* FAVORITOS */

    $("#favoritesOnly")
        ?.addEventListener(
            "click",
            () => {

                state.favoritesOnly =
                    !state.favoritesOnly;

                renderProducts();
            }
        );


    /* PRODUCTOS */

    $("#productGrid")
        ?.addEventListener(
            "click",
            event => {

                const fav =
                    event.target.closest(
                        "[data-favorite]"
                    );

                const add =
                    event.target.closest(
                        "[data-add]"
                    );

                const detail =
                    event.target.closest(
                        "[data-detail]"
                    );


                if (fav) {

                    toggleFavorite(
                        fav.dataset.favorite
                    );
                }


                if (add) {

                    addToCart(
                        add.dataset.add
                    );
                }


                if (detail) {

                    renderProductDetail(
                        detail.dataset.detail
                    );


                    openBootstrapModal(
                        "productDetailModal"
                    )?.show();
                }
            }
        );


    /* EVENTOS GENERALES */

    document.addEventListener(
        "click",
        event => {

            /* Imagen del detalle */

            const img =
                event.target.closest(
                    "[data-detail-image]"
                );


            if (
                img &&
                $("#detailMainImage")
            ) {

                $("#detailMainImage")
                    .src =
                    img.dataset.detailImage;
            }


            /* Cantidad detalle */

            const qty =
                event.target.closest(
                    "[data-detail-qty]"
                );


            if (qty) {

                const input =
                    $("#detailQuantity");


                if (input) {

                    input.value =
                        Math.max(
                            1,
                            Math.min(
                                Number(
                                    input.max
                                ) || 99,
                                (
                                    Number(
                                        input.value
                                    ) || 1
                                ) +
                                    Number(
                                        qty.dataset
                                            .detailQty
                                    )
                            )
                        );
                }
            }


            /* Eliminar carrito */

            const remove =
                event.target.closest(
                    "[data-remove-cart]"
                );


            if (remove) {

                removeCartItem(
                    Number(
                        remove.dataset
                            .removeCart
                    )
                );
            }


            /* + carrito */

            const plus =
                event.target.closest(
                    "[data-cart-plus]"
                );


            if (plus) {

                changeCartQuantity(
                    Number(
                        plus.dataset
                            .cartPlus
                    ),
                    1
                );
            }


            /* - carrito */

            const minus =
                event.target.closest(
                    "[data-cart-minus]"
                );


            if (minus) {

                changeCartQuantity(
                    Number(
                        minus.dataset
                            .cartMinus
                    ),
                    -1
                );
            }


            /* Abrir minicart */

            if (
                event.target.closest(
                    "[data-open-cart]"
                )
            ) {

                openMiniCart();
            }


            /* Cerrar minicart */

            if (
                event.target.closest(
                    "[data-close-cart]"
                )
            ) {

                closeMiniCart();
            }


            /* Abrir carrito */

            if (
                event.target.closest(
                    "[data-open-cart-view]"
                )
            ) {

                openCartModal();
            }


            /* Checkout */

            if (
                event.target.closest(
                    "[data-open-checkout]"
                )
            ) {

                openCheckout();
            }


            /* Siguiente paso */

            const next =
                event.target.closest(
                    "[data-checkout-next]"
                );


            if (
                next &&
                validateCheckoutStep()
            ) {

                state.checkoutStep =
                    Math.min(
                        4,
                        state.checkoutStep + 1
                    );

                renderCheckout();
            }


            /* Paso anterior */

            const back =
                event.target.closest(
                    "[data-checkout-back]"
                );


            if (back) {

                state.checkoutStep =
                    Math.max(
                        1,
                        state.checkoutStep - 1
                    );

                renderCheckout();
            }


            /* Confirmar compra */

            if (
                event.target.closest(
                    "#confirmOrder"
                )
            ) {

                showToast(
                    "Solicitud de compra preparada. Falta conectar el backend/pasarela para cobrar."
                );


                state.cart = [];

                state.coupon = null;


                guardarEstado();


                updateCartCount();

                renderMiniCart();

                renderCartView();


                openBootstrapModal(
                    "checkoutModal"
                )?.hide();
            }


            /* Cupón checkout */

            if (
                event.target.closest(
                    "#applyCheckoutCoupon"
                )
            ) {

                const result =
                    validateCoupon(
                        $(
                            "#checkoutCouponInput"
                        )?.value.trim() ||
                            ""
                    );


                if (!result.ok) {

                    state.coupon =
                        null;

                    showToast(
                        result.message,
                        "error"
                    );

                } else {

                    state.coupon =
                        result.coupon;

                    showToast(
                        "El cupón fue aplicado."
                    );
                }


                renderCheckout();
            }


            /* Cupón carrito */

            if (
                event.target.closest(
                    "#applyCoupon"
                )
            ) {

                const result =
                    validateCoupon(
                        $(
                            "#couponInput"
                        )?.value.trim() ||
                            ""
                    );


                if (!result.ok) {

                    state.coupon =
                        null;

                    showToast(
                        result.message,
                        "error"
                    );

                } else {

                    state.coupon =
                        result.coupon;

                    showToast(
                        "El cupón fue aplicado."
                    );
                }


                renderCartView();
            }
        }
    );


    /* FILTRO DE RESEÑAS */

    $("#productDetailContent")
        ?.addEventListener(
            "change",
            event => {

                if (
                    event.target.id ===
                    "reviewFilter"
                ) {

                    renderReviews(
                        state.currentProduct
                    );
                }
            }
        );
}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProducts();

        updateCartCount();

        renderMiniCart();

        renderCartView();

        iniciarCotizador();

        iniciarContacto();

        iniciarEventos();
    }
);