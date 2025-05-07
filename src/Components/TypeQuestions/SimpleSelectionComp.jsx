import { useState } from 'react'
import {Button,Card, Form, InputGroup} from 'react-bootstrap';

function SimpleSelectionComp({ data = [], index = 0, respuestas, setRespuestas}) {
    const [questions, setQuestions] = useState(data.options)
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (option) => {
        setSelectedOption(option.index);
        console.log(data)
        const nuevasRespuestas = [...respuestas];
        while (nuevasRespuestas.length <= index) {
            nuevasRespuestas.push(null);
        }

        nuevasRespuestas[index] = {
            idQuestion: data.id,
            answer: option.index,
        };
        setRespuestas(nuevasRespuestas);
    };

    return (
        
        <Card >
            <Card.Header className="fs-3">Pregunta {index + 1}</Card.Header>
            <Card.Body className='container-questions'>
                <Card.Title className="fs-4">{data.question}</Card.Title>
                <br/>
                <InputGroup className="mb-3 d-block ">
                    {questions.map((options)=>(
                        options != null && (
                            <InputGroup key={options.index} className={`mb-3 ${selectedOption === options.index ? 'select' : ''}`}>
                            <div className={`d-grid w-100 input-label `} >
                                <div className="w-100 d-inline-flex">
                                    <InputGroup.Radio 
                                        className='p-2'
                                        name={data.id}
                                        id={`option-${data.id}-${options.index}`}
                                        onChange={() => handleChange(options)}
                                        />
                                    <Form.Label 
                                        className="p-2 m-0 w-100 text-start d-flex align-items-center"
                                        htmlFor={`option-${data.id}-${options.index}`}
                                        disabled>
                                        {options.index + 1}. {options.text}
                                    </Form.Label>
                                    
                                </div>
                            </div>
                            </InputGroup>
                        )
                    ))}
                </InputGroup>
          </Card.Body>
        </Card>
      );
}

export default SimpleSelectionComp;