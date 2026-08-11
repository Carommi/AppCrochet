// login.js — logica de la pagina de registro/login/verificacion/recuperacion.
// TODO BACKEND: sustituir HLAuth (localStorage) por llamadas reales a una API
// de autenticacion, y el "envio" de correos por un servicio real de email.

document.addEventListener("DOMContentLoaded", () => {
    const vistaFormularios = document.getElementById("vistaFormularios");
    const vistaVerificacion = document.getElementById("vistaVerificacion");
    const vistaRecuperar = document.getElementById("vistaRecuperar");

    const tabLogin = document.getElementById("tabLogin");
    const tabRegistro = document.getElementById("tabRegistro");
    const formLogin = document.getElementById("formLogin");
    const formRegistro = document.getElementById("formRegistro");
    const errorGlobal = document.getElementById("errorGlobal");

    function mostrarError(msg) {
        errorGlobal.textContent = msg;
        errorGlobal.classList.add("visible");
    }
    function limpiarError() {
        errorGlobal.classList.remove("visible");
    }

    function cambiarTab(tab) {
        limpiarError();
        const esLogin = tab === "login";
        tabLogin.classList.toggle("active", esLogin);
        tabRegistro.classList.toggle("active", !esLogin);
        formLogin.classList.toggle("d-none", !esLogin);
        formRegistro.classList.toggle("d-none", esLogin);
    }
    tabLogin.addEventListener("click", () => cambiarTab("login"));
    tabRegistro.addEventListener("click", () => cambiarTab("registro"));

    // Mostrar/ocultar contrasena
    document.querySelectorAll(".hl-toggle-pass").forEach(btn => {
        btn.addEventListener("click", () => {
            const input = document.getElementById(btn.dataset.target);
            const icono = btn.querySelector("i");
            const esTexto = input.type === "text";
            input.type = esTexto ? "password" : "text";
            icono.className = esTexto ? "fas fa-eye" : "fas fa-eye-slash";
        });
    });

    function validarCorreo(correo) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    }
    function validarContrasena(pass) {
        return pass.length >= 8 && /[a-zA-Z]/.test(pass) && /\d/.test(pass);
    }

    const regPass = document.getElementById("regPass");
    const hintPass = document.getElementById("hintPass");
    regPass.addEventListener("input", () => {
        if (!regPass.value) {
            hintPass.className = "hl-hint";
            hintPass.textContent = "Debe tener minimo 8 caracteres, una letra y un numero.";
        } else if (validarContrasena(regPass.value)) {
            hintPass.className = "hl-hint ok";
            hintPass.textContent = "Contrasena valida.";
        } else {
            hintPass.className = "hl-hint error";
            hintPass.textContent = "Faltan requisitos: minimo 8 caracteres, una letra y un numero.";
        }
    });

    // REGISTRO
    formRegistro.addEventListener("submit", (e) => {
        e.preventDefault();
        limpiarError();
        const nombre = document.getElementById("regNombre").value.trim();
        const correo = document.getElementById("regCorreo").value.trim();
        const contrasena = regPass.value;

        if (!nombre) return mostrarError("Ingresa tu nombre completo.");
        if (!validarCorreo(correo)) return mostrarError("Ingresa un correo electronico valido.");
        if (!validarContrasena(contrasena)) return mostrarError("La contrasena no cumple los requisitos minimos.");

        const resultado = HLAuth.registrar({ nombre, correo, contrasena });
        if (!resultado.ok) return mostrarError(resultado.error);

        vistaFormularios.classList.add("d-none");
        vistaVerificacion.classList.remove("d-none");
        document.getElementById("correoVerificar").textContent = correo;
        vistaVerificacion.dataset.userId = resultado.usuario.id;
    });

    document.getElementById("btnSimularVerificacion").addEventListener("click", () => {
        const userId = vistaVerificacion.dataset.userId;
        HLAuth.verificarCorreo(userId);
        HLAuth.iniciarSesion({ correo: document.getElementById("correoVerificar").textContent, contrasena: null, recordarme: false });
        // El login de arriba fallara porque no guardamos la contrasena en texto plano;
        // en su lugar iniciamos sesion directamente con el id ya verificado.
        localStorage.setItem("hl_session", JSON.stringify({ userId, recordarme: false, iniciadaEl: new Date().toISOString() }));
        window.location.href = "cuenta.html";
    });

    // LOGIN
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        limpiarError();
        const correo = document.getElementById("loginCorreo").value.trim();
        const contrasena = document.getElementById("loginPass").value;
        const recordarme = document.getElementById("loginRecordarme").checked;

        const resultado = HLAuth.iniciarSesion({ correo, contrasena, recordarme });
        if (!resultado.ok) return mostrarError(resultado.error);
        window.location.href = "cuenta.html";
    });

    // Olvide mi contrasena
    document.getElementById("btnOlvide").addEventListener("click", () => {
        vistaFormularios.classList.add("d-none");
        vistaRecuperar.classList.remove("d-none");
    });
    document.getElementById("btnVolverLogin").addEventListener("click", () => {
        vistaRecuperar.classList.add("d-none");
        vistaFormularios.classList.remove("d-none");
        cambiarTab("login");
    });
    document.getElementById("btnEnviarRecuperacion").addEventListener("click", () => {
        const correo = document.getElementById("recuperarCorreo").value.trim();
        if (!validarCorreo(correo)) {
            hlToast("Ingresa un correo valido.", "error");
            return;
        }
        hlToast("Si el correo existe, se enviaria un enlace de recuperacion (demo).", "info");
    });

    // Si ya hay sesion activa, redirigir directo a la cuenta
    if (HLAuth.sesionActual()) {
        window.location.href = "cuenta.html";
    }
});