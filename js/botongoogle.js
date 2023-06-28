function googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
  firebase.auth().getRedirectResult()
  .then((result) => {
    // Se obtuvo el resultado del inicio de sesión redirigido
    const user = result.user;
    console.log('Usuario ha iniciado sesión:', user);
    // Realiza las acciones adicionales que desees después del inicio de sesión exitoso
  })
  .catch((error) => {
    // Ocurrió un error durante el inicio de sesión redirigido
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Error en el inicio de sesión redirigido:', errorCode, errorMessage);
    // Maneja el error o muestra un mensaje de error al usuario
  });
