import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout.jsx';
import Login from './paginas/Login.jsx';
import Registrar from './paginas/Registrar.jsx';
import OlvidePassword from './paginas/OlvidePassword.jsx';
import ConfirmarCuenta from './paginas/ConfirmarCuenta.jsx';

function App() {
  // console.log(import.meta.env.VITE_BACKEND_URL)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />} >
            <Route index element={<Login />} />
            <Route path='registrar' element={<Registrar />}/>
            <Route path='olvide-password' element={<OlvidePassword />}/>
            <Route path='confirmar/:id' element={<ConfirmarCuenta />}/>
        </Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
