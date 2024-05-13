import {useState} from 'react'
import {useAuthContext } from '../context/AuthContext' 
import { toast } from 'react-toastify'

const useSignup = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const {setUser} = useAuthContext()

    const signup = async (username:string, email:string, password:string) => {
        console.log('reached signup')
        const readyToSubmit = finalChecks(username, email, password)
        if (!readyToSubmit) return
        setLoading(true)
        try {
            const res = await fetch("http://localhost:8080/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, email, password})
            })
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            //local storage
            localStorage.setItem("authenticated-user", JSON.stringify(data))
            setUser(data) 
        } catch (error) {
            console.log("error when signing up", (error as Error).message)
            toast.error('Error while signing up', {
                closeOnClick:true, 
                pauseOnHover:false,
            })
        } finally {
            setLoading(false)
        }
        
    }
    return {loading, signup}

}

export default useSignup

function finalChecks(username:string, email:string, password:string) {
	if (!username || !email || !password) {
		toast.error("Please fill in all fields");
		return false;
	}
	return true;
}