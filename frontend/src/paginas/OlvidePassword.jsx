import { Link } from "react-router-dom"

const OlvidePassword = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Recura tu Acceso t no Pierdas <span className="text-black">tus Pacientes </span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-5 rounded-xl bg-white">
          <form action="">
            <div className="my-3">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Email
                </label>
                <input type="email" placeholder="Email de Registro" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
            </div>

            <input type="submit" value="Enviar Instrucciones" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer md:w-auto" />
          </form>

          <nav className="mt-5 lg:flex lg:justify-between">
            <Link to="/" className="block text-center my-3 teext-gray-500">
              ¿Ya tienes una cuenta? Inicia Sesión
            </Link>
            <Link to="/registrar" className="block text-center my-5 teext-gray-500">
             ¿No tienes una cuenta? Regístrate
            </Link>
          </nav>
        </div>
      
    </>
  )
}

export default OlvidePassword
