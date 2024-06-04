import {createContext, useContext, useState, useEffect} from "react"
import { Task, fakeTasks } from "../type"
import {v4 as uuidv4} from 'uuid';
import { useHttp } from "../hooks/useHttp";


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
    const {fetchData} = useHttp()
    const [tasks, setTasks] = useState<Task[]>([])

    const [currentTask] = useState<Task| null>(fakeTasks[0])

    // useEffect(() => {
    //     const getTasks = async() => {
    //         try {
    //             const response = await fetchData("http://localhost:8080/tasks")
    //             // const data = response.json()
    //             console.log("tasks fetched", response)
    //             setTasks(tasks)
    //         }catch(err) {
    //             console.log(err)
    //         }
    //     }
    //     getTasks()
    // }, [])

    const addTask = async (title: string, description: string) => {
            if (title === '') {
                throw new Error('Title cannot be empty!')
            }
            //send task details to backend 
            try {
                const newTask = {
                    id: uuidv4(),
                    title, 
                    description, 
                    blocks: []
                }
                const response = await fetchData('http://localhost:8080/tasks', 'POST', newTask)
                const updatedTasks = [...tasks, newTask]
                console.log("updated task after adding", response)
                setTasks(updatedTasks)
            }catch (err) {  
                console.log(err)
            }
            
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