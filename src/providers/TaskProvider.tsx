import {createContext, useContext, useState} from "react"
import { Task, fakeTasks } from "../type"

type TaskContextType = {
    tasks: Task[]
    addTask: (task:Task) => void
    addBlockToTask: (taskId: number, blockDuration: number) => void
}

const defaultValue: TaskContextType = {
    tasks: fakeTasks, 
    addTask: ()=> {}, 
    addBlockToTask: () => {}
}

export const TaskContext = createContext<TaskContextType>(defaultValue)


const TaskProvider = ({children}: {children: React.ReactNode}) => {
    const [tasks, setTasks] = useState<Task[]>(defaultValue.tasks)

    const addTask = (task: Task) => {
        console.log("adding to tasks")
    }

    const addBlockToTask = (taskId:number, blockDuration:number) => {
        //find task index
        const taskIndex = tasks.findIndex((task) => task.id === taskId)
        if (taskIndex !== -1) {
            const newBlock = {id: 100, duration: blockDuration, completed:false }
            let updatedTasks = [...tasks]
            const existingBlockArray = updatedTasks[taskIndex].blocks || [];
            updatedTasks[taskIndex].blocks = existingBlockArray.concat(newBlock)
            console.log("updated tasks", updatedTasks)
            setTasks(updatedTasks)
        }
    }   

    return (
        <TaskContext.Provider value={{tasks,addTask, addBlockToTask}}>
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