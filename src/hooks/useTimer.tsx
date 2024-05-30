//pass in minutes and seconds, and we start running the timer here and return the returned mins and secs 
import {useState, useRef, useEffect} from 'react'

const useTimer = () => {
    const [remainingSeconds, setRemainingSeconds] = useState<number>(0)
    const intervalRef = useRef< NodeJS.Timer | undefined>(undefined)

    const startTimer = (minutes: number, seconds: number) => {
        console.log('timer started')
        const totalInitialSeconds = minutes * 60 + seconds
        setRemainingSeconds(totalInitialSeconds)
        
        if (intervalRef.current) { 
            clearInterval(intervalRef.current)
        }
        intervalRef.current = setInterval(() => {
            console.log('remaining', remainingSeconds)
            if (remainingSeconds > 0) {
              setRemainingSeconds((prev) => prev - 1);
            } else {
              clearInterval(intervalRef.current);
            }
        }, 1000);
    }

    //cleanup the clear interval on unmount
    useEffect(() => {
        clearInterval(intervalRef.current)
    }, [])

    return {remainingSeconds, startTimer}
}

export default useTimer

//const {minutes, seconds, startTimer } = useTimer()
//startTimer(50, 0)