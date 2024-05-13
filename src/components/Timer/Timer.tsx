import {useState, useEffect} from 'react';

export default function Timer ({pomoType}: {pomoType:number}) {
    const [minutes, setMinutes] = useState<number>(pomoType === 25 ? 25:50)
    const [seconds, setSeconds] = useState<number>(0)
    const [timerRunning, setTimerRunning] = useState<boolean>(false)

    useEffect(()=> {
        console.log("hit useeffect")
        if (timerRunning) {
            console.log("timer running")
             const interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else {
                        resetTimer();
                        setTimerRunning(false); // Stop the timer when it ends
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
            return () => {console.log('cleaning'); clearInterval(interval);}
        }
        
    }, [timerRunning, minutes, seconds])


    const resetTimer = () => {
        setMinutes(50)
        setSeconds(0)
    }

    
  return (
    <div className='w-full flex justify-center'>
            <div className=' bg-brightOrange rounded-lg flex flex-col items-center justify-center ' style={{height:"250px", width:'500px'}}>
                <p className='text-center text-white text-5xl'>{minutes}:{seconds===0 ? '00':seconds}</p>
                <button className='btn bg-white text-darkPurple btn-wide mt-3' onClick={()=>setTimerRunning((prev)=>!prev)}>{timerRunning ? 'Stop' : 'Start'}</button>
                {/* <button className='btn bg-white text-darkPurple btn-wide mt-3' onClick={startTimer}>{'Start'}</button> */}
            </div>
        </div>
  );
}
