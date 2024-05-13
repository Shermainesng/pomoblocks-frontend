import {useState, useEffect} from 'react';
import { useTaskContext } from '../../context/TaskContext';
import { IoAddCircleSharp } from "react-icons/io5";
import Timer from './Timer';
export interface ITimerScreenProps {
}

export default function TimerScreen (props: ITimerScreenProps) {
    const {currentTask} = useTaskContext()
    const [canAddTime] = useState<boolean>(false)
    const [blockNum, setBlockNum] = useState<number>(0)


    let blockPeriod =0
    useEffect(() => {
        if(currentTask) {
            blockPeriod = currentTask.blocks[blockNum].duration
        }
    }, [currentTask])
    
  return (
    <div className='flex flex-col p-4 items-center'>
      <div className='flex flex-row justify-center'>
            <p>--------------</p>
            <h1>{currentTask ? `Current Task: ${currentTask.title}`: 'No Task Started Yet!'}</h1>
            <p>--------------</p>
        </div>

        <Timer pomoType={blockPeriod}/>

        <div className='flex flex-col justify-center items-center'>
            <button disabled={!canAddTime} className={`text-8xl  ${canAddTime ? 'text-white hover:text-darkPurple': 'text-grey-200'}`}><IoAddCircleSharp /></button>
            <p className='text-darkPurple'>Add Time</p>
        </div>
    </div>
  );
}
