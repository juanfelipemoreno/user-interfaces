import { useState } from 'react'
import { Button, } from "react-bootstrap";
import { Link} from "react-router-dom"


function WelcomeComp({ text = 'prueba'}) {

  return (
    <>
    <div className='w-100 h-100 d-flex justify-content-center align-items-center flex-column'>
        <div>
            <div className="container text-center">
                <div className="contanier-welcome">
                    <div className="waviy">
                        {text.split('').map((data, index) => (
                            (
                                <span key={index} 
                                style={{'--i': index + 1}} >{data}</span>
                            )
                        ))}
                    </div>
                </div>
            </div>
            <Button variant="outline-secondary"><Link to="/Home" style={{ all: 'unset', cursor: 'pointer' }} >Iniciar</Link></Button>
        </div>
    </div>
    </>
  )
}

export default WelcomeComp;

