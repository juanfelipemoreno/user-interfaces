import { Button, Carousel, Form} from 'react-bootstrap';
import { Link} from "react-router-dom"


export default function Home() {
    return(
    <>
    <div class="container py-5 mt-4" style={{width : '50rem', height : '100vh'}}>
        <div class="row justify-content-center m-auto">
          <div class="col-6 col-md-4 categoria-wrapper">
            <div class="categoria-card fondo-lenguaje">
                <div class="categoria-texto"><Link to="/module/1" style={{ all: 'unset', cursor: 'pointer' }} >DIETER RAM</Link></div>
            </div>
          </div>
    
          <div class="col-6 col-md-4 categoria-wrapper">
            <div class="categoria-card fondo-matematicas">
            <div class="categoria-texto"><Link to="/module/2" style={{ all: 'unset', cursor: 'pointer' }} >WIREFRAMES</Link></div>
            </div>
          </div>
      
          <div class="col-6 col-md-4 categoria-wrapper">
            <div class="categoria-card fondo-ingles">
                <div class="categoria-texto"><Link to="/module/3" style={{ all: 'unset', cursor: 'pointer' }} >PRINCIPIOS DE J.NIELSEN</Link></div>
            </div>
          </div>
      
          <div class="col-6 col-md-4 categoria-wrapper">
            <div class="categoria-card fondo-diversion">
                <div class="categoria-texto"><Link to="/module/4" style={{ all: 'unset', cursor: 'pointer' }} >T.PSICOLOGIA DEL COLOR</Link></div>
            </div>
          </div>
      
          <div class="col-6 col-md-4 categoria-wrapper">
            <div class="categoria-card fondo-libreria">
                <div class="categoria-texto"><Link to="/module/5" style={{ all: 'unset', cursor: 'pointer' }} >GESTALT</Link></div>
            </div>
          </div>
      
          <div class="col-6 col-md-4 categoria-wrapper">
            <div class="categoria-card fondo-canciones">
                <div class="categoria-texto"><Link to="/module/6" style={{ all: 'unset', cursor: 'pointer' }} >METODO RECOLECCION DE DATOS</Link></div>
            </div>
          </div>
        </div>
        </div>
    </>
    )   
};