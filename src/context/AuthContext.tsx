import {createContext, useContext, useState} from "react"
import { User } from "../type";

type AuthContextType = {
   user: User|null
   setUser: (user:User | null) => void
}

const defaultValue: AuthContextType = {
    user: null,
    setUser: () => {}
}

export const AuthContext = createContext<AuthContextType>(defaultValue)


const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(() => {
        try {
            const userFromStorage = localStorage.getItem('authenticated-user')
            return userFromStorage ? JSON.parse(userFromStorage): null
        } catch(error) {
            console.error('Error parsing user from local storage', error)
            return null
        }
    })
  

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

//hook to use context
export function useAuthContext() {
    const context = useContext(AuthContext)
    return context
}