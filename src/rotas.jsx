import { BrowserRouter, Routes, Route } from "react-router-dom";


import Inicio from "./pages/pagInicial";
import Exec01 from "./pages/exec_01"
import Exec02 from "./pages/exec02";



export default function Nav() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/exec01' element={<Exec01 />} />
            <Route path='/exec02' element={<Exec02 />} />
        </Routes>
        </BrowserRouter>
    )
}