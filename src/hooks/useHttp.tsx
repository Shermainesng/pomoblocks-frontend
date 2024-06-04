import { useRef, useState } from "react"
import { Task } from "../type"

export const useHttp = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const abortControllerRef = useRef<AbortController | null>(null)

    const fetchData = async (url: string, method= 'GET', body:Task|null = null)=> {
        setIsLoading(true)
        setError("")
        if (abortControllerRef.current) {
            abortControllerRef.current.abort()
        }

        abortControllerRef.current = new AbortController()
        try {
            console.log("getting data")
            const response = await fetch(url, {
                // headers, 
                // body,
                method,
                signal: abortControllerRef.current.signal
            })

            console.log("response", response)
            if (!response.ok) {
                throw new Error(response.statusText)
            }

            const responseData  = await response.json()
            
            return responseData
        } catch(error) {
            console.log("error")
            setError((error as Error).message)
        } finally {
            setIsLoading(false)
            abortControllerRef.current = null
        }
    }

    return {isLoading, error, fetchData}
}