import React, {useState} from 'react';

export interface ITimerProps {
}

export default function Timer () {
    // const [minutes, setMinutes] = useState(50)
    // const [seconds, setSeconds] = useState(0)
    const [timerRunning, setTimerRunning] = useState<boolean>(false)

    // const startTimer = () => {
    //     if (secondsRemaining === 0 || timerRunning) {
    //         return 
    //     }
    //     setInterval(()=> {
    //         setSecondsRemaining((prev)=> prev-1)
    //     })
    // }

    // const pauseTimer = () => {

    
  return (
    <div className='w-full flex justify-center'>
            <div className=' bg-brightOrange rounded-lg flex flex-col items-center justify-center ' style={{height:"250px", width:'500px'}}>
                <p className='text-center text-white text-5xl'>50:00</p>
                <button className='btn bg-white text-darkPurple btn-wide mt-3' onClick={()=>setTimerRunning((prev)=>!prev)}>{timerRunning ? 'Stop' : 'Start'}</button>
            </div>
        </div>
  );
}
