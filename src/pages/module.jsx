import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react'
import questionsColorTeory from '../data/questionsColorTeory';
import questionsDieterRam from '../data/questionsDieterRam';
import questionsWireframes from '../data/questionsWireframes';
import questionsNielsenPrinciples from '../data/questionsNielsenPrinciples';
import questionsGestaltPrinciples from '../data/questionsGestaltPrinciples';
import questionsDataCollectionMethods from '../data/questionsDataCollectionMethods';

import ModuleComp from '../Components/ModuleComp';
import { useNavigate} from "react-router";

export default function Module()  {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {    
        if(id == 1){
            setData(questionsDieterRam)
        }else if(id == "2"){
            setData(questionsWireframes)
        }else if(id == "3"){
            setData(questionsNielsenPrinciples)
        }else if(id == "4"){
             setData(questionsColorTeory)
        }else if(id == "5"){
            setData(questionsGestaltPrinciples)
        }else if(id == "6"){
            setData(questionsDataCollectionMethods)
        }else {
            setData([]); 
        }
    }, [id])
    console.log(data.length)
    if (data.length == 0) return navigate('/Home');

    return <ModuleComp questions={data} />;
};