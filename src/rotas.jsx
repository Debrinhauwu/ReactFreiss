import { BrowserRouter, Routes, Route } from "react-router-dom";


import Inicio from "./pages/pagInicial";
import Sobre from "./pages/paginaSobre"



export default function Nav() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/sobre' element={<Sobre />} />
        </Routes>
        </BrowserRouter>
    )
}