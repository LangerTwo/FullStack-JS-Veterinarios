import { createContext, useState, useEffect } from "react";
import clienteAxios from '../config/axios'

const PacientesContext = createContext()

export const PacientesProvider = ({children}) => {

    const [pacientes, setPacientes] = useState([])
    const [paciente, setPaciente] = useState({})

    useEffect(() => {
        const obtnerPacientes = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clienteAxios('/pacientes', config)
                setPacientes(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtnerPacientes()
    }, [])

    const guardarPaciente = async (paciente) => {

        console.log(paciente)
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        if (paciente.id) {
            try {
                const { data } = await clienteAxios.put(`/pacientes/${paciente.id}`, paciente, config)
                const pacienteActualizado = pacientes.map( pacienteState => pacienteState._id === data._id ? data : pacienteState )
                setPacientes(pacienteActualizado)
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const { data } = await clienteAxios.post('/pacientes', paciente, config)
                const { createdAt, updatedAt, __v, ...pacienteAlmacenado } = data
                setPacientes([pacienteAlmacenado, ...pacientes])
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }
    }

    const seEdicion = (paciente) => {
        // console.log('editando ', id)
        setPaciente(paciente)
    }

    

    return (
        <PacientesContext.Provider value={{pacientes, guardarPaciente, seEdicion, paciente}}>
            {children}
        </PacientesContext.Provider>
    )
}

export default PacientesContext;