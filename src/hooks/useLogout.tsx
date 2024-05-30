import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"

const useLogout = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const {setUser} = useAuthContext()
    
    const logout = async() => {
        setLoading(false)
        try {
            const res = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"}
            })
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            //remove from local storage and update context
            localStorage.removeItem('authenticated-user')
            setUser(null)
        } catch(error) {
            console.log("error when logging out", error)
        } finally {
                setLoading(false)
        }
    }
    return {loading, logout}
}
export default useLogout