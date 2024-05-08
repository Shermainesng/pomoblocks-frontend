import React, {useEffect, useState} from 'react';
import { useTaskContext } from '../../providers/TaskProvider';
import MainContainer from '../MainContainer';
import Task from './Task';
import { IoAddCircleSharp } from "react-icons/io5";


export interface ITaskListProps {
}

export default function TaskList (props: ITaskListProps) {
    const {tasks, addBlockToTask} = useTaskContext()
    const [showNewTaskForm, setShowNewTaskForm] = useState<boolean>(false)
   

  return (
    <div className='vh[100] vw[100] flex flex-col p-4 items-center'>
        <div className='flex flex-row justify-center'>
            <p>--------------</p>
            <h1>Tasks to Complete</h1>
            <p>--------------</p>
        </div>
        <div className='flex flex-col w-full md:w-1/2 lg:w-1/3'>
            {tasks.length>0 && tasks.map((task) => (
                <Task key={task.id} task={task} addBlockToTask={addBlockToTask}/>
            ))}
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3'>
            {
                showNewTaskForm && (
                        <div className=" bg-brightOrange text-white border-4 border-dashed border-white p-3">
                            <button onClick={()=>setShowNewTaskForm((prev)=>!prev)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h3 className="font-bold text-lg">Add a new task!</h3>
                            <form method="dialog">
                            <label>Task:</label>
                            </form>
                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                        </div>
                )
            }
        </div>
        <div className='flex flex-col justify-center items-center'>
            <button onClick={()=>setShowNewTaskForm((prev)=>!prev)} className='text-8xl text-white hover:text-darkPurple'><IoAddCircleSharp /></button>
            <p className='text-darkPurple'>Add Task</p>
        </div>

    </div>
  );
}
