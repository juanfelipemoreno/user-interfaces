import update from 'immutability-helper'
import { useState, useCallback, memo } from 'react'
import {Button,Card,Form, InputGroup} from 'react-bootstrap';
import {Box} from './Box';
import {DragArea} from './DragArea';
import { ItemTypes } from '../../ItemTypes'

export const DragSelectionComp = memo(function DragSelectionComp({ data = [], index = 0, respuestas, setRespuestas}) {
    const [questions, setQuestions] = useState(data.options)
    const [selectedOption, setSelectedOption] = useState([]);
    const [droppedBoxNames, setDroppedBoxNames] = useState([])

    const [dustbins, setDustbins] = useState([
        { accepts: [ItemTypes.BOX], lastDroppedItem: null }
    ])

    function isDropped(boxName) {
        return droppedBoxNames.indexOf(boxName) > -1
    }

    const handleDrop = useCallback(
        (questionIndex, item) => {
            const { index: optionIndex, name  } = item;

            setDroppedBoxNames(name ? [name] : [])
            setDustbins(
                update(dustbins, {
                [0]: {
                    lastDroppedItem: {
                    $set: item,
                    },
                },
                }),
            );
            const nuevasRespuestas = [...respuestas];
            while (nuevasRespuestas.length <= index) {
                nuevasRespuestas.push(null);
            }
            console.log(data)
            nuevasRespuestas[questionIndex] = {
                idQuestion: data.id,
                answer: optionIndex,
            };
            setRespuestas(nuevasRespuestas);
        },
        [droppedBoxNames, dustbins,respuestas, data.id, index, setRespuestas],
    )
    return (
        
        <Card >
            <Card.Header className="fs-3">Pregunta {index + 1}</Card.Header>
            <Card.Body className='container-questions'>
                <Card.Title className="fs-2">{data.question}.</Card.Title>
                <br/>
                				
                    <div className='d-flex w-100 container-aswer'>
                        <div className="mb-3 d-block p-3 "
                            style={{ overflow: 'hidden', clear: 'both' }} >
                            {questions.map((options)=>(
                                options != null && (
                                    <InputGroup key={options.index} className={`mb-3`}>
                                        <div className={`d-grid w-100 input-label `} key={options.index}>
                                            <div className="w-100 d-inline-flex">
                                                <Box 
                                                    option={options}
                                                    id={options.index}
                                                    name={`${options.index + 1}. ${options.text}`}
                                                    isDropped={isDropped(`${options.index + 1}. ${options.text}`)}
                                                    key={options.index}
                                                />
                                            </div>
                                        </div>
                                    </InputGroup>
                                )
                            ))}
                        </div>
                        <div className="mb-3 d-block p-3 ">
                            <DragArea
                                accept={ItemTypes.BOX}
                                lastDroppedItem={dustbins[0]?.lastDroppedItem}
                                onDrop={(item) => handleDrop(index, item)}
                                key={index}
                            />
                        </div>
                    </div>
          </Card.Body>
        </Card>
      );
})
