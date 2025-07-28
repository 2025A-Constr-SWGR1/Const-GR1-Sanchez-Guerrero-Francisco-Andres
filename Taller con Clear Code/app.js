/**
 * Generador de Excusas Aleatorias
 * Aplicación que muestra excusas aleatorias con arquitectura limpia
 */

/* ========================================
   CONSTANTS AND DATA
   ======================================== */

/**
 * Lista de excusas disponibles
 * @type {string[]}
 */
const EXCUSE_LIST = [
  "Mi gato borró mi tarea mientras dormía",
  "Se me acabó la batería del cerebro",
  "Estaba ocupado salvando el mundo de los aliens invisibles",
  "Mi horóscopo decía que no era un buen día para eso",
  "Se me olvidó porque estaba recordando otras cosas más importantes",
  "Mi wifi emocional no tenía conexión",
  "Estaba en una reunión muy importante con mi almohada",
  "Se me cayó el teléfono en una dimensión paralela",
  "Mi reloj se adelantó al futuro sin avisarme",
  "Estaba practicando para ser ninja invisible",
  "Se me descompuso el traductor de responsabilidades",
  "Mi perro me comió la motivación",
  "Estaba en modo avión mental",
  "Se me acabó el combustible de productividad",
  "Mi GPS de la vida me llevó por el camino equivocado",
  "Estaba ocupado siendo una persona misteriosa",
  "Se me rompió el botón de 'ganas de hacer cosas'",
  "Mi cerebro estaba en mantenimiento programado",
  "Estaba esperando la confirmación de mi yo del futuro",
  "Se me acabó la memoria RAM emocional"
];

/**
 * Elementos del DOM
 */
const DOM_ELEMENTS = {
  excuseText: null,
  newExcuseButton: null
};

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

/**
 * Genera un índice aleatorio basado en la longitud del array
 * @param {number} arrayLength - Longitud del array
 * @returns {number} Índice aleatorio
 */
function generateRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

/**
 * Obtiene una excusa aleatoria de la lista
 * @returns {string} Excusa aleatoria
 */
function getRandomExcuse() {
  const randomIndex = generateRandomIndex(EXCUSE_LIST.length);
  return EXCUSE_LIST[randomIndex];
}

/* ========================================
   DOM MANIPULATION FUNCTIONS
   ======================================== */

/**
 * Actualiza el texto de la excusa en el DOM
 * @param {string} excuse - Texto de la excusa a mostrar
 */
function displayExcuse(excuse) {
  if (DOM_ELEMENTS.excuseText) {
    DOM_ELEMENTS.excuseText.textContent = excuse;
  }
}

/**
 * Genera y muestra una nueva excusa
 */
function generateNewExcuse() {
  const newExcuse = getRandomExcuse();
  displayExcuse(newExcuse);
}

/* ========================================
   EVENT HANDLERS
   ======================================== */

/**
 * Maneja el evento de clic en el botón de nueva excusa
 * @param {Event} event - Evento de clic
 */
function handleNewExcuseClick(event) {
  event.preventDefault();
  generateNewExcuse();
}

/* ========================================
   INITIALIZATION FUNCTIONS
   ======================================== */

/**
 * Obtiene las referencias a los elementos del DOM
 */
function getDOMElements() {
  DOM_ELEMENTS.excuseText = document.getElementById('excuseText');
  DOM_ELEMENTS.newExcuseButton = document.getElementById('newExcuseBtn');
}

/**
 * Configura los event listeners
 */
function setupEventListeners() {
  if (DOM_ELEMENTS.newExcuseButton) {
    DOM_ELEMENTS.newExcuseButton.addEventListener('click', handleNewExcuseClick);
  }
}

/**
 * Inicializa la aplicación mostrando una excusa inicial
 */
function initializeApp() {
  generateNewExcuse();
}

/**
 * Función principal que ejecuta toda la configuración inicial
 */
function init() {
  getDOMElements();
  setupEventListeners();
  initializeApp();
}

/* ========================================
   APP STARTUP
   ======================================== */

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);
