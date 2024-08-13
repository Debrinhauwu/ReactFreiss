import { BrowserRouter, Routes, Route } from "react-router-dom";


import Inicio from "./pages/pagInicial";



export default function Nav() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio />} />
        </Routes>
        </BrowserRouter>
    )
}