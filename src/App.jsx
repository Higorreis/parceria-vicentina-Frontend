import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'


//Configuração de Rotas
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                
            </Routes>
        </BrowserRouter>

    )

}

export default App