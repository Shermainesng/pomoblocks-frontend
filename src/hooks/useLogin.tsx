import {useState, useContext} from 'react'
import { useAuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify'

const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const {setUser} = useAuthContext()

    const login = async (email: string, password:string) => {
        console.log("email and password in useLogin hook", email, password)
        const validatedFields = validateFields(email, password)
        if (!validatedFields) return 
        setLoading(true)
        try {
            const response = await fetch('http://localhost:8080/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json' 
              },
              body: JSON.stringify({ email, password}), 
            });
            const loginData = await response.json();
            if (loginData.error) {
                throw new Error(loginData.error)
            }
            //local storage and update context
            localStorage.setItem("authenticated-user", JSON.stringify(loginData))
            setUser(loginData)
            return loginData;
        } catch (error) {
            console.log("error when logging in", (error as Error).message)
            toast.error('Invalid Credentials', {
                closeOnClick:true, 
                pauseOnHover:false,
            })
        } finally {
            setLoading(false)
        }
    }
    return {loading, login}
}

export default useLogin

function validateFields(email: string, password:string) {
	if (!email || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}
