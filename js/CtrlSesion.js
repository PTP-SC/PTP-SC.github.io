import {
    getAuth
  } from "../lib/fabrica.js";
  import {
    muestraError
  } from "../lib/util.js";
  import {
    iniciaSesión,
    terminaSesión
  } from "./seguridad.js";
  
  /** @type {HTMLFormElement} */
  const forma = document["forma"];
  /** @type {HTMLImageElement} */
  const avatar = document.
    querySelector("#avatar");
  
  /* Escucha cambios de usuario.
   * El primer parámetro es una
   * función que se invoca cada que
   * hay un cambio de usuario y
   * recibe los datos del usuario.
   * El segundo parámetro es una
   * función que se invoca cuando se
   * presenta un error en un cambio
   * de usuario y recibe un Error.
   */
  getAuth().onAuthStateChanged(
    muestraSesión, muestraError);
  
  /** Muestra los datos del usuario
   * o manda a iniciar sesión en
   * caso de que no haya empezado.
   * @param {import(
      "../lib/tiposFire").
      User} usuario modelo con las
   *    características del usuario
   *    o null si no ha iniciado
   *    sesión. */
  async function
    muestraSesión(usuario) {
    if (usuario && usuario.email) {
      // Usuario aceptado.
      forma.email.value =
        usuario.email || "";
      forma.nombre.value =
        usuario.displayName || "";
      avatar.src =
        usuario.photoURL || "";
      forma.terminarSesión.
        addEventListener(
          "click", terminaSesión);
    } else {
      // No ha iniciado sesión.
      iniciaSesión();
    }
  }
  // Obtén los valores de los campos de correo electrónico y contraseña
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

// Utiliza el método signInWithEmailAndPassword para iniciar sesión
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // El inicio de sesión fue exitoso
    const user = userCredential.user;
    console.log('Usuario ha iniciado sesión:', user);
    // Realiza las acciones adicionales que desees después del inicio de sesión exitoso
  })
  .catch((error) => {
    // Ocurrió un error durante el inicio de sesión
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Error en el inicio de sesión:', errorCode, errorMessage);
    // Maneja el error o muestra un mensaje de error al usuario
  });
