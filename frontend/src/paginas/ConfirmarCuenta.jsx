import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import axios from 'axios'
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => {
    const [cuentaCormirmada, setCuentaCormirmada] = useState(false)
    const [cargando, setCargando] = useState(true)
    const [ alerta, setAlerta] = useState({})

    const params = useParams()
    const { id } = params

    
    useEffect(() => {
      console.log("Efecto ejecutado");
      const confirmarCuenta2 = async () => {
        try {
          const url = `http://localhost:3300/api/veterinarios/confirmar/${id}`
          const { data } = await axios(url)
          setCuentaCormirmada(true)
          setAlerta({ 
            msg: data.msg
          })
        } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error: true
          })
        }

        setCargando(false)
      }
      confirmarCuenta2();
    }, [id])
  
    return (
      <>
        
        <div>
          <h1 className="text-indigo-600 font-black text-6xl">
            Confirma tu cuenta y Comienza a Administrar
            <span className="text-black"> tus Pacientes </span></h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg px-5 py-5 rounded-xl bg-white">
         {!cargando && <Alerta alerta={alerta}/>}
         {cuentaCormirmada && (
          <Link to="/" className="block text-center my-5 text-gray-500">Inicia Sesión</Link>
         )}
       </div>

      </>
    )
}
  
export default ConfirmarCuenta