import {createContext, useContext, useState} from "react"
import { Task, fakeTasks } from "../type"
import {v4 as uuidv4} from 'uuid';

type TaskContextType = {
    tasks: Task[]
    addTask: (title: string, description: string) => void
    addBlockToTask: (taskId: string, blockDuration: number) => void
    currentTask: Task|null
}

const defaultValue: TaskContextType = {
    tasks: fakeTasks, 
    addTask: ()=> {}, 
    addBlockToTask: () => {},
    currentTask: null
}

export const TaskContext = createContext<TaskContextType>(defaultValue)


const TaskProvider = ({children}: {children: React.ReactNode}) => {
    const [tasks, setTasks] = useState<Task[]>(defaultValue.tasks)
    const [currentTask, setCurrentTask] = useState<Task| null>(null)

    const addTask = (title: string, description: string) => {
        // console.log("adding to tasks")

            if (title === '') {
                throw new Error('Title cannot be empty!')
            }
            const newTask = {
                id: uuidv4(),
                title, 
                description, 
                blocks: []
            }
            const updatedTasks = [...tasks, newTask]
            console.log("updated task after adding", updatedTasks)
            setTasks(updatedTasks)
            // setError(null)

      
        
    }

    const addBlockToTask = (taskId:string, blockDuration:number) => {
        //find task index
        const taskIndex = tasks.findIndex((task) => task.id === taskId)
        if (taskIndex !== -1) {
            const newBlock = {id: "100", duration: blockDuration, completed:false }
            let updatedTasks = [...tasks]
            const existingBlockArray = updatedTasks[taskIndex].blocks || [];
            updatedTasks[taskIndex].blocks = existingBlockArray.concat(newBlock)
            console.log("updated tasks", updatedTasks)
            setTasks(updatedTasks)
        }
    }   

    return (
        <TaskContext.Provider value={{tasks, addTask, addBlockToTask, currentTask}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider

//hook to use context
export function useTaskContext() {
    const context = useContext(TaskContext)
    return context
}