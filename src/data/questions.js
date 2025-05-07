const questions = [
  {
    "id": 1,
    "type" : 1,
    "question": "¿Qué emoción suele transmitir el color azul en el diseño?",
    "options": [
      { "index": 0, "text": "Energía" },
      { "index": 1, "text": "Tristeza" },
      { "index": 2, "text": "Calma" },
      { "index": 3, "text": "Peligro" }
    ],
    "answer": 2
  },
  {
    "id": 2,
    "type" : 1,
    "question": "¿Cuál de las siguientes combinaciones representa colores complementarios?",
    "options": [
      { "index": 0, "text": "Rojo y naranja" },
      { "index": 1, "text": "Azul y verde" },
      { "index": 2, "text": "Rojo y verde" },
      { "index": 3, "text": "Amarillo y blanco" }
    ],
    "answer": 2
  },
  {
    "id": 3,
    "type" : 1,
    "question": "¿Qué tipo de colores se obtienen al mezclar un color primario con uno secundario?",
    "options": [
      { "index": 0, "text": "Colores cálidos" },
      { "index": 1, "text": "Colores complementarios" },
      { "index": 2, "text": "Colores terciarios" },
      { "index": 3, "text": "Colores fríos" }
    ],
    "answer": 2
  },
  {
    "id": 4,
    "type" : 1,
    "question": "¿En qué situaciones se puede usar el hook `useEffect`?",
    "options": [
      { "index": 0, "text": "Cuando el componente se monta" },
      { "index": 1, "text": "Cuando cambian ciertas props o estados" },
      { "index": 2, "text": "Para modificar el DOM directamente después de renderizar" },
      { "index": 3, "text": "Para declarar variables locales" }
    ],
    "answer": [0, 1, 2]
  },
  {
    "id": 5,
    "type" : 3,
    "question": "¿Qué hace JSX en React?",
    "options": [
      { "index": 0, "text": "Agrega estilos a los componentes" },
      { "index": 1, "text": "Permite escribir HTML dentro de JavaScript" },
      { "index": 2, "text": "Define rutas en la aplicación" },
      { "index": 3, "text": "Conecta con bases de datos" }
    ],
    "answer": 1
  }
];

export default questions;