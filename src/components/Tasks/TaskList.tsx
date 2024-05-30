import React, {useState} from 'react';
import { useTaskContext } from '../../context/TaskContext';
import Task from './Task';
import { IoAddCircleSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewTaskForm from './NewTaskForm';

export interface ITaskListProps {
}

export default function TaskList (props: ITaskListProps) {
    const {tasks,addTask, addBlockToTask} = useTaskContext()
    const [showNewTaskForm, setShowNewTaskForm] = useState<boolean>(false)
    const [newTaskTitle, setNewTaskTitle] = useState<string>("")
    const [newTaskDescription, setNewTaskDescription] = useState<string>("")
    // const [err, setErr] = useState<string|null>("")
 
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     try {
    //         addTask(newTaskTitle, newTaskDescription)
    //     } catch(error) {
    //         console.log("error in frontend", (error as Error).message)
    //         toast((error as Error).message, {
    //             closeOnClick:true, 
    //             pauseOnHover:false,
    //         })
    //         // toast(error);
    //     }
    //     setShowNewTaskForm(false)
    // }
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
        <div data-testid="tasklist-1" className='flex flex-col w-full md:w-1/2 lg:w-1/3'>
            {tasks.length>0 && tasks.map((task) => (
                <Task key={task.id} task={task} addBlockToTask={addBlockToTask}/>
            ))}
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3'>
            {
                showNewTaskForm && 
                <NewTaskForm setShowNewTaskForm={setShowNewTaskForm}/>
            }
        </div>
        <div className='flex flex-col justify-center items-center'>
            <button data-testid="add-task-btn" onClick={()=>setShowNewTaskForm((prev)=>!prev)} className='text-8xl text-white hover:text-darkPurple'><IoAddCircleSharp /></button>
            <p className='text-darkPurple'>Add Task</p>
        </div>

    </div>
  );
}
