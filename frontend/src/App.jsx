import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout.jsx';
import Login from './paginas/Login.jsx';
import Registrar from './paginas/Registrar.jsx';
import OlvidePassword from './paginas/OlvidePassword.jsx';
import ConfirmarCuenta from './paginas/ConfirmarCuenta.jsx';
import NuevoPassword from './paginas/NuevoPassword.jsx';

import { AuthProvider } from './context/AuthProvider';

function App() {
  // console.log(import.meta.env.VITE_BACKEND_URL)
  return (
    <BrowserRouter>
      <AuthProvider>        
          <Routes>
              <Route path="/" element={<AuthLayout />} >
                  <Route index element={<Login />} />
                  <Route path='registrar' element={<Registrar />}/>
                  <Route path='olvide-password' element={<OlvidePassword />}/>
                  <Route path='olvide-password/:token' element={<NuevoPassword />}/>
                  <Route path='confirmar/:id' element={<ConfirmarCuenta />}/>
              </Route>
          </Routes>
      </AuthProvider>
    </BrowserRouter> 
  )
}

export default App
