import { googleSignIn } from "./js/botongoogle.js";
import { iniciaSesión, terminaSesión } from "./js/ctrlSesion.js";
import { agregarSilla, buscarSillaPorId, eliminarSillaPorId, obtenerTodasLasSillas } from "./js/ctrlSillas.js";
import { initializeApp } from "./js/init.js";
import { tieneRol, cargaRoles } from "./js/seguridad.js";
import * as MiNav from "./cmp/mi-nav.js";
import * as MiFooter from "./cmp/mi-footer.js";
import * as MiProgreso from "./cmp/mi-progreso.js";
import * as ctrlSesion from "./js/CtrlSesion.js";
// Ejemplo de uso de la clase MiNav
const miNav = new MiNav.MiNav();
document.body.appendChild(miNav);



// Ejemplo de uso de la clase MiProgreso
const miProgreso = new MiProgreso.MiProgreso();
document.body.appendChild(miProgreso);
