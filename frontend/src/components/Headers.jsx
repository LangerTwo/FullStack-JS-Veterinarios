import { Link } from "react-router-dom"
import useAuth from "../context/useAuth"

const Headers = () => {
    const { cerrarSesion } = useAuth()
  return (
    <header className="py-10 px-4 bg-indigo-600">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <h1 className="font-bold text-2xl text-indigo-200 text-center">
                Administrador de Pacientes de<span className="text-white font-black"> Veterinaria</span>
            </h1>

            <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
                <Link to="/admin" className="text-white text-sm uppercase font-bold hover:text-indigo-300">
                    Pacientes
                </Link>
                <Link to="/perfil" className="text-white text-sm uppercase font-bold hover:text-indigo-300">
                    Perfil
                </Link>

                <button type="button" className="text-white text-sm uppercase font-bold hover:text-indigo-300" onClick={cerrarSesion}>
                    Cerrar Sesión
                </button>
            </nav>
        </div>
    </header>
  )
}

export default Headers
