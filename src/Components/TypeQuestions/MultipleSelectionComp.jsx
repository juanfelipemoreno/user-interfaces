import { useState } from 'react'
import {Button,Card, Form, InputGroup} from 'react-bootstrap';

function MultipleSelectionComp({ data = [], index = 0, respuestas, setRespuestas}) {
    const [questions, setQuestions] = useState(data.options)
    const [selectedOption, setSelectedOption] = useState([]);

    const handleCheckboxChange = (index) => {
        setSelectedOption(options => 
            options.includes(index) 
            ? options.filter(i => i !== index)
            : [...options, index]               
        );
    };

    const handleChange = (option) => {
        const nuevaSeleccion = 
            selectedOption.includes(option.index)
            ? selectedOption.filter(i => i !== option.index)
            : [...selectedOption, option.index];

        setSelectedOption(nuevaSeleccion)
        console.log(nuevaSeleccion)
        const nuevasRespuestas = [...respuestas];
            nuevasRespuestas[index] = {
                idQuestion: data.id,
                answer: nuevaSeleccion,
            };
        setRespuestas(nuevasRespuestas);
    };

    return (
        
        <Card >
            <Card.Header className="fs-3">Pregunta {index + 1}</Card.Header>
            <Card.Body className='container-questions'>
                <Card.Title className="fs-2">{data.question}. Seleccione {data.answer.length}</Card.Title>
                <br/>
                <div className="mb-3 d-block">
                    {questions.map((options)=>(
                        options != null && (
                            <InputGroup key={options.index} className={`mb-3 ${selectedOption.includes(options.index) ? 'select' : ''}`}>
                            <div className={`d-grid w-100 input-label `} key={options.index}>
                                <div className="w-100 d-inline-flex">
                                    <InputGroup.Checkbox 
                                        className='p-2'
                                        name={data.id}
                                        id={`option-${data.id}-${options.index}`}
                                        onChange={() => handleChange(options)}
                                        />
                                    <Form.Label 
                                        className="p-2 m-0 d-block w-100 text-start"
                                        htmlFor={`option-${data.id}-${options.index}`}
                                        disabled>
                                        {options.index + 1}. {options.text}
                                    </Form.Label>
                                </div>
                            </div>
                            </InputGroup>
                        )
                    ))}
                </div>
          </Card.Body>
        </Card>
      );
}

export default MultipleSelectionComp;