// Vector con los productos disponibles para cotizar.
const productosCrochet = [
    "Amigurumi",
    "Bolso tejido",
    "Ramo tejido",
    "Marca paginas"
];

// Matriz de precios: cada fila pertenece a un producto y cada columna a un tamano.
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

const productoSelect = document.getElementById("productoCotizado");
const tamanoSelect = document.getElementById("tamanoCotizado");
const cantidadInput = document.getElementById("cantidadCotizada");
const extraSelect = document.getElementById("extraCotizado");
const totalCotizado = document.getElementById("totalCotizado");
const detalleCotizado = document.getElementById("detalleCotizado");

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
    llenarSelect(productoSelect, productosCrochet, producto => producto);
    llenarSelect(tamanoSelect, tamanos, tamano => tamano);
    llenarSelect(extraSelect, extras, extra => `${extra.nombre} + ${formatearPesos(extra.precio)}`);

    [productoSelect, tamanoSelect, cantidadInput, extraSelect].forEach(elemento => {
        elemento.addEventListener("input", calcularCotizacion);
    });

    calcularCotizacion();
}

iniciarCotizador();
