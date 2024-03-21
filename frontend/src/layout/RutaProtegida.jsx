import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../context/useAuth"

const RutaProtegida = () => {
    const { auth, cargando } = useAuth()
    if(cargando) return 'cargando...'

  return (
    <>
      <h1>Este es una Ruta protegida</h1>

      {auth?._id ? <Outlet /> : <Navigate to="/"/>}
    </>
  )
}

export default RutaProtegida
