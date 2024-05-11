import {useState} from 'react';
import { useTaskContext } from '../../providers/TaskProvider';
import { IoAddCircleSharp } from "react-icons/io5";
import Timer from './Timer';
export interface ITimerScreenProps {
}

export default function TimerScreen (props: ITimerScreenProps) {
    const {currentTask} = useTaskContext()
    const [canAddTime] = useState<boolean>(false)
   
   
    
  return (
    <div className='flex flex-col p-4 items-center'>
      <div className='flex flex-row justify-center'>
            <p>--------------</p>
            <h1>{currentTask ? `Current Task: ${currentTask.title}`: 'No Task Started Yet!'}</h1>
            <p>--------------</p>
        </div>

        <Timer/>
        {/* <div className='w-full flex justify-center'>
            <div className=' bg-brightOrange rounded-lg flex flex-col items-center justify-center ' style={{height:"250px", width:'500px'}}>
                <p className='text-center text-white text-5xl'>50:00</p>
                <button className='btn bg-white text-darkPurple btn-wide mt-3' onClick={()=>setTimerRunning((prev)=>!prev)}>{timerRunning ? 'Stop' : 'Start'}</button>
            </div>
        </div> */}

        <div className='flex flex-col justify-center items-center'>
            <button disabled={!canAddTime} className={`text-8xl  ${canAddTime ? 'text-white hover:text-darkPurple': 'text-grey-200'}`}><IoAddCircleSharp /></button>
            <p className='text-darkPurple'>Add Time</p>
        </div>
    </div>
  );
}
