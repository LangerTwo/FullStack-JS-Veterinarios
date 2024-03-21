import { Outlet, Navigate } from "react-router-dom"
import Header from '../components/Headers'
import Footer from "../components/Footer"
import useAuth from "../context/useAuth"

const RutaProtegida = () => {
    const { auth, cargando } = useAuth()
    if(cargando) return 'cargando...'

  return (
    <>
      <Header />
        {auth?._id ? (
            <main className="container mx-auto mt-20">
                <Outlet /> 
            </main>
             ): <Navigate to="/"/>}
      <Footer />
    </>
  )
}

export default RutaProtegida