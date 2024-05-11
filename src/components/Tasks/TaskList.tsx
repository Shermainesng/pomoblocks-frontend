import React, {useEffect, useState} from 'react';
import { useTaskContext } from '../../providers/TaskProvider';
import MainContainer from '../MainContainer';
import Task from './Task';
import { IoAddCircleSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface ITaskListProps {
}

export default function TaskList (props: ITaskListProps) {
    const {tasks,addTask, addBlockToTask} = useTaskContext()
    const [showNewTaskForm, setShowNewTaskForm] = useState<boolean>(false)
    const [newTaskTitle, setNewTaskTitle] = useState<string>("")
    const [newTaskDescription, setNewTaskDescription] = useState<string>("")
    // const [err, setErr] = useState<string|null>("")
   

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            addTask(newTaskTitle, newTaskDescription)
        } catch(error) {
            console.log("error in frontend", (error as Error).message)
            toast((error as Error).message, {
                closeOnClick:true, 
                pauseOnHover:false,
            })
            // toast(error);
        }
        setShowNewTaskForm(false)
    }
  return (
    <div className='flex flex-col p-4 items-center'>
         <ToastContainer 
            position='top-left'
            closeOnClick
            />
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
                            {/* <h3 className="font-bold text-lg">Add a new task!</h3> */}
                            <button className='text-2xl' onClick={()=> setShowNewTaskForm((prev)=>!prev)}><RxCross1 /></button>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='task'>Task:</label>
                                <input type='text' id='title' value={newTaskTitle} className="input input-bordered w-full max-w-xs bg-white text-black" onChange={(e)=>setNewTaskTitle(e.target.value)}></input>
                                <label htmlFor='description'>Description:</label>
                                <input type='text' id='description' value={newTaskDescription} className="input input-bordered w-full max-w-xs bg-white text-black" onChange={(e)=>setNewTaskDescription(e.target.value)}></input>
                                <button type='submit' className='btn bg-darkPurple text-white border-none mt-2'>Add Task!</button>
                            </form>
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
