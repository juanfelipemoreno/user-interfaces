import { useState } from 'react'
import {Button,Card,  InputGroup,Spinner } from 'react-bootstrap';

function ValidateQuestionsComp({form = [], data = []}) {
    const [showLoading, setShowLoading] = useState('none');
    const [buttonValidate, setButtonValidate] = useState('inline');

    const validateFrm = () =>{
        /*showLoading == 'inline-block' ? setShowLoading('none') : setShowLoading('inline-block')
        buttonValidate == 'inline' ? setButtonValidate('none') : setButtonValidate('inline')
*/
        setTimeout(() => validate(), 100);
           
        function validate(){
            setShowLoading('none')
            if (Array.isArray(form) && form.length == 0) {
                alert("Faltan preguntas por responder o incompletas.");
                return;
            }
    
            const respuestasValidas = form.filter(resp => resp !== undefined)
                                            .filter(resp => resp !== null);
    
            const esValido = respuestasValidas.every(resp => {
                console.log(resp)
                const pregunta = data.find(d => d.id === resp.idQuestion);
                
                if (!pregunta) return false;
                
                if (Array.isArray(resp.answer)) {
                    return resp.answer.length === pregunta.answer.length;
                }
                
                return resp.answer !== undefined && resp.answer !== null;
            });
        
            if (!esValido) {
                alert("Faltan preguntas por responder o incompletas.");
                return;
            }
    
            let correctas = [];
            let incorrectas = [];
            
            data.forEach(pregunta => {
                
                const respuesta = form.find(resp => resp ?.idQuestion === pregunta.id);
                if (!respuesta) {
                    incorrectas.push(pregunta.id);
                    return;
                }
    
                const correctAnswer = pregunta.answer;
    
                if (Array.isArray(correctAnswer)) {
                    const userAnswer = respuesta.answer;
    
                    if (!Array.isArray(userAnswer)) {
                        incorrectas.push(pregunta.id);
                        return;
                    }
    
                    const sortedUser = [...userAnswer].sort();
                    const sortedCorrect = [...correctAnswer].sort();
    
                    const isCorrect = sortedUser.length === sortedCorrect.length &&
                                    sortedUser.every((val, i) => val === sortedCorrect[i]);
    
                    isCorrect ? correctas.push(pregunta.id) : incorrectas.push(pregunta.id);
    
                } else {
                    console.log("respuesta : "+respuesta.answer + " correctAnswer: " + correctAnswer)
                    const isCorrect = respuesta.answer === correctAnswer;
                    isCorrect ? correctas.push(pregunta.id) : incorrectas.push(pregunta.id);
                }
            });
    
            const total = data.length;
            const porcentaje = (correctas.length / total) * 100;
            const nota = (50 * correctas.length / total).toFixed(2); // Nota sobre 10
    
            alert(`Resultado:\n✔️ Correctas: ${correctas.length}\n❌ Incorrectas: ${incorrectas.length}\n📊 Porcentaje: ${porcentaje.toFixed(2)}%\n🧮 Nota: ${nota}/50`);
    
        }
        
    }

  return (
    <Card style={{ minHeight : '400px'}}>
        <Card.Header className="fs-3" >Validar preguntas</Card.Header>
        <Card.Body className='container-questions d-flex align-items-center'>
            <InputGroup className="mb-3 d-block p-3 ">
                <Button 
                    style={{ display : buttonValidate }}
                    variant="outline-secondary m-2 active" 
                    size="lg"
                    onClick={validateFrm}
                >VALIDAD PREGUNTAS</Button> 
                <>
                <Spinner animation="border" style={{ display : showLoading }}/>
                </>   
            </InputGroup>
        </Card.Body>
    </Card>
  );
}

export default ValidateQuestionsComp;