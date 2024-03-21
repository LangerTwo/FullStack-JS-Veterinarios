import { useState, useEffect, createContext, useContext } from 'react'


const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({})

    return(
        <AuthContext.Provider value={{
            auth,
            setAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext