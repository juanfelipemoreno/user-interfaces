import { useContext, React} from 'react';
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from '../pages/home';
import Module from '../pages/module';
import WelcomeComp from '../Components/WelcomeComp';


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomeComp text = 'BIENVENIDOS'/>} />
                <Route path="/Home" element={<Home/>}  />
                <Route path="/Module/:id" element={<Module />}  />
            </Routes>
        </BrowserRouter>
    )
}