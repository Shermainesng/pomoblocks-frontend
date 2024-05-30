import {useState} from 'react';
import { useTaskContext } from '../../context/TaskContext';
import { ToastContainer, toast } from 'react-toastify';
import { RxCross1 } from "react-icons/rx";

export interface TaskFormProps {
    // showTaskForm: boolean
    setShowNewTaskForm: (showTaskForm: boolean) => void
}

export default function  NewTaskForm({setShowNewTaskForm}: TaskFormProps) {
    const {addTask} = useTaskContext()
    const [newTaskTitle, setNewTaskTitle] = useState<string>("")
    const [newTaskDescription, setNewTaskDescription] = useState<string>("")
    
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
    <div className=" bg-brightOrange text-white border-4 border-dashed border-white p-3">
        <button onClick={()=>setShowNewTaskForm(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        {/* <h3 className="font-bold text-lg">Add a new task!</h3> */}
        <button className='text-2xl' onClick={()=> setShowNewTaskForm(false)}><RxCross1 /></button>
        <form onSubmit={handleSubmit}>
            <label htmlFor='task'>Task:</label>
            <input type='text' id='title' value={newTaskTitle} className="input input-bordered w-full max-w-xs bg-white text-black" onChange={(e)=>setNewTaskTitle(e.target.value)}></input>
            <label htmlFor='description'>Description:</label>
            <input type='text' id='description' value={newTaskDescription} className="input input-bordered w-full max-w-xs bg-white text-black" onChange={(e)=>setNewTaskDescription(e.target.value)}></input>
            <button type='submit' className='btn bg-darkPurple text-white border-none mt-2'>Add Task!</button>
        </form>
    </div>
  );
}
