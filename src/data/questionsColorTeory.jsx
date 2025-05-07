const questionsColorTeory = [
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
      { "index": 0, 
        "text": <>
                  Rojo <span className="d-inline-block mx-2" style={{ width: '30px', height: '30px', backgroundColor: 'red', borderRadius: '50%' }}></span> + 
                  Naranja <span className="d-inline-block mx-2" style={{ width: '30px', height: '30px', backgroundColor: 'orange', borderRadius: '50%' }}></span>
                </>
      },
      { "index": 1, 
        "text": <>
                  Azul <span className="d-inline-block mx-2" style={{ width: '30px', height: '30px', backgroundColor: 'blue', borderRadius: '50%' }}></span> + 
                  Verde <span className="d-inline-block mx-2" style={{ width: '30px', height: '30px', backgroundColor: 'green', borderRadius: '50%' }}></span>
                </> 
      },
      { "index": 2, 
        "text": <>
                  Rojo <span className="d-inline-block mx-2" style={{ width: '30px', height: '30px', backgroundColor: 'red', borderRadius: '50%' }}></span> + 
                  Verde <span className="d-inline-block mx-2" style={{ width: '30px', height: '30px', backgroundColor: 'green', borderRadius: '50%' }}></span>
                </>
      },
      { "index": 3, 
        "text": <>
                  Amarillo <span className="d-inline-block mx-2" style={{ width: '30px', height: '30px', backgroundColor: 'yellow', borderRadius: '50%' }}></span> + 
                  Blanco <span className="d-inline-block mx-2" style={{ width: '30px', height: '30px', backgroundColor: 'white', borderRadius: '50%' }}></span>
                </> 
      }
    ],
    "answer": 2
  },
  {
    "id": 3,
    "type" : 1,
    "question": "¿Qué tipo de colores se obtienen al mezclar un color primario con uno secundario?",
    "options": [
      { "index": 0, 
        "text": <>
                Colores cálidos: 
                <span className="mx-2">
                  Rojo <span style={{
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    margin: '0 5px',
                    verticalAlign: 'middle'
                  }}></span> 
                  + Amarillo <span style={{
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'yellow',
                    borderRadius: '50%',
                    margin: '0 5px',
                    verticalAlign: 'middle'
                  }}></span>
                </span>
              </>
      },
      { "index": 1, 
        "text": <>
                Colores complementarios: 
                <span className="mx-2">
                  Azul <span style={{
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'blue',
                    borderRadius: '50%',
                    margin: '0 5px',
                    verticalAlign: 'middle'
                  }}></span> 
                  + Naranja <span style={{
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'orange',
                    borderRadius: '50%',
                    margin: '0 5px',
                    verticalAlign: 'middle'
                  }}></span>
                </span>
              </>
      },
      { "index": 2, 
        "text": <>
                Colores terciarios:
                <span className="mx-2">
                  Rojo-anaranjado <span style={{
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#ff4500', // rojo-anaranjado
                    borderRadius: '50%',
                    margin: '0 5px',
                    verticalAlign: 'middle'
                  }}></span>
                  + Amarillo-verde <span style={{
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#9acd32', // amarillo-verde
                    borderRadius: '50%',
                    margin: '0 5px',
                    verticalAlign: 'middle'
                  }}></span>
                </span>
              </>
      },
      { "index": 3, 
        "text": <>
                  Colores fríos: 
                  <span className="mx-2">
                    Verde <span style={{
                      display: 'inline-block',
                      width: '20px',
                      height: '20px',
                      backgroundColor: 'green',
                      borderRadius: '50%',
                      margin: '0 5px',
                      verticalAlign: 'middle'
                    }}></span> 
                    + Azul <span style={{
                      display: 'inline-block',
                      width: '20px',
                      height: '20px',
                      backgroundColor: 'blue',
                      borderRadius: '50%',
                      margin: '0 5px',
                      verticalAlign: 'middle'
                    }}></span>
                  </span>
                </>
      }
    ],
    "answer": 2
  },
  {
    "id": 4,
    "type" : 1,
    "question": "¿Cuál es el efecto de usar una paleta monocromática en una interfaz?",
    "options": [
      { "index": 0, "text": "Aumenta el contraste y la confusión" },
      { "index": 1, "text": "Genera armonía visual y simplicidad" },
      { "index": 2, "text": "Produce vibraciones de color" },
      { "index": 3, "text": "Crea un diseño saturado y recargado" }
    ],
    "answer": 1
  },
  {
    "id": 5,
    "type" : 1,
    "question": "¿Qué colores se consideran fríos en la teoría del color?",
    "options": [
      { "index": 0, "text": "Rojo, naranja, amarillo" },
      { "index": 1, "text": "Azul, verde, violeta" },
      { "index": 2, "text": "Negro, gris, blanco" },
      { "index": 3, "text": "Marrón, beige, crema" }
    ],
    "answer": 1
  }
];

export default questionsColorTeory;