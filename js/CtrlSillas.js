import { getFirestore } from "../lib/fabrica.js";
import { muestraError } from "../lib/util.js";

const db = getFirestore();

// Función para agregar una silla a la colección "sillas" en Firestore
async function agregarSilla(silla) {
  try {
    const sillasRef = db.collection('sillas');
    const docRef = await sillasRef.add(silla);
    const id = docRef.id;
    console.log('Silla agregada exitosamente. ID:', id);
    return id;
  } catch (error) {
    muestraError(error);
    return null;
  }
}

// Obtener referencia al formulario
const formularioSilla = document.getElementById('formularioSilla');

// Agregar evento de submit al formulario
formularioSilla.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Obtener valores del formulario
  const modelo = document.getElementById('modelo').value;
  const color = document.getElementById('color').value;
  const material = document.getElementById('material').value;
  const precio = parseFloat(document.getElementById('precio').value);

  // Crear objeto de silla con los valores obtenidos
  const silla = {
    modelo,
    color,
    material,
    precio
  };

  // Agregar la silla a la colección "sillas" en Firestore
  await agregarSilla(silla);

  // Limpiar el formulario
  formularioSilla.reset();
});
