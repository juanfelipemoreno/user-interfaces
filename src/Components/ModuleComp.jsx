import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeComp from './WelcomeComp'
import MultipleSelectionComp from './TypeQuestions/MultipleSelectionComp'
import SimpleSelectionComp from './TypeQuestions/SimpleSelectionComp'
import {DragSelectionComp} from './TypeQuestions/DragSelection/DragSelectionComp'
import ValidateQuestionsComp from './ValidateQuestionsComp'
import ProgressBarComp from './ProgressBarComp'
import { Button, Carousel, Form} from 'react-bootstrap';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function ModuleComp({questions}) {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [controls, setControls] = useState(false)
  const [indicators, setIndicators] = useState(false)
  const [cantQuestion, setCantQuestion] = useState(0)
  const [percentage, setPercentage] = useState(0)

  const [respuestas, setRespuestas] = useState([]);

  const changePage = (type) =>{
    console.log("page: "+ page + " type:" + type)
    page > 0 ? 
      type === '+' ? setPage(page + 1) : setPage(page - 1)
      : page == 1 ?
          type === '+' ? setPage(page + 1) : setPage(page - 1) 
          : page == 0 ? 
                type === '+' ? setPage(page + 1) : null : null; 
  }

  useEffect(() => {    
    setCantQuestion(questions.length)  
  }, [])

  useEffect(() => {
    console.log(page)
    console.log(questions.length)
    setPercentage(100 / questions.length * (page))
  }, [page]);

  return (
    <>
    <DndProvider backend={HTML5Backend}>
        <div className='carousel-wrapper d-flex flex-column justify-content-center align-items-center'>
            <div className='overflow-auto w-100'>
                <Form className='w-100'>
                    <Carousel 
                    controls={controls} 
                    indicators={indicators} 
                    activeIndex={page}
                    >
                    {questions.map((q, index) => (
                        q.type == 1 ? (
                        <Carousel.Item key={index + 1}>
                            <SimpleSelectionComp 
                                data ={q} 
                                index = {index} 
                                respuestas={respuestas}
                                setRespuestas={setRespuestas}
                            />
                        </Carousel.Item>
                        ) : q.type == 2 ? (
                        <Carousel.Item key={index + 1}>
                            <MultipleSelectionComp 
                                data ={q} 
                                index = {index} 
                                respuestas={respuestas}
                                setRespuestas={setRespuestas}
                            />
                        </Carousel.Item>
                        ) : q.type == 3 ? (
                        <Carousel.Item key={index + 1}>
                            <DragSelectionComp 
                                data ={q} 
                                index = {index} 
                                respuestas={respuestas}
                                setRespuestas={setRespuestas}
                            />
                        </Carousel.Item>
                        ): null
                    ))}
                    <Carousel.Item key={cantQuestion + 1}>
                        <ValidateQuestionsComp form={respuestas} data={questions}/>
                    </Carousel.Item>
                    </Carousel>
                </Form>
            </div>
            <div className='w-100'>
                        <ProgressBarComp percentage = {percentage}/>
                        <Button variant="outline-secondary m-2" size="lg" onClick={() => changePage('-')}>Anterior</Button>
                        {page <= cantQuestion &&(
                            <Button variant="outline-secondary m-2" size="lg" onClick={() => changePage('+')}>Siguiente</Button>
                        )}
            </div>
        </div>
    </DndProvider>      
    </>
  )
};

export default ModuleComp;