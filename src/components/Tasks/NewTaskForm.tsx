import {useState} from 'react';
import { useTaskContext } from '../../context/TaskContext';
// import { ToastContainer, toast } from 'react-toastify';
// import { RxCross1 } from "react-icons/rx";

export interface TaskFormProps {
    closeModal: () => void
}

export default function  NewTaskForm() {
    const {addTask} = useTaskContext()
    const [newTaskTitle, setNewTaskTitle] = useState<string>("")
    const [newTaskDescription, setNewTaskDescription] = useState<string>("")
    
    const handleSubmit = () => {
        // e.preventDefault()
        console.log("handle submit")
        // try {
        //     addTask(newTaskTitle, newTaskDescription)
        // } catch(error) {
        //     console.log("error in frontend", (error as Error).message)
        //     toast((error as Error).message, {
        //         closeOnClick:true, 
        //         pauseOnHover:false,
        //     })
        //     // toast(error);
        // }
        // setShowNewTaskForm(false)
    }
  return (
    <>
      <div className="modal-box bg-brightOrange text-white">
        <form  method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <label htmlFor='task'>Task:</label>
                <input type='text' id='title' value={newTaskTitle} className="input input-bordered w-full max-w-xs bg-white text-black" onChange={(e)=>setNewTaskTitle(e.target.value)}></input>
            <label htmlFor='description'>Description:</label>
            <input type='text' id='description' value={newTaskDescription} className="input input-bordered w-full max-w-xs bg-white text-black" onChange={(e)=>setNewTaskDescription(e.target.value)}></input>
            <button onClick={()=> handleSubmit()} type='submit' className='btn bg-darkPurple text-white border-none mt-2'>Add Task!</button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
     </form>
   
   
  </>
  // <>
  //   <div className="modal-box">
  //     <h3 className="font-bold text-lg">Hello!</h3>
  //     <p className="py-4">Press ESC key or click outside to close</p>
  //   </div>
  //   <form method="dialog" className="modal-backdrop">
  //     <button>close</button>
  //   </form>

  // </>
  );
}
