import { TaskModel } from "../models"
import { connectToDb } from "../utils"
import { unstable_noStore } from "next/cache"


export const getTasks =()=> {
    unstable_noStore()
    try {
        console.log("in getTasks")
        connectToDb()
        const tasks = TaskModel.find()
        return tasks
    }catch(err) {
        console.log(err)
        throw new Error('failed to get tasks')
    }
}

export const getTask = (slug: number | string) => {
    try {
        connectToDb()
        const post = TaskModel.findOne({slug})
        return post
    }catch(err) {
        console.log(err)
        throw new Error('failed to get task')
    }
}

export const createTask = (values: Record<string, any>) => new TaskModel(values)
                                                            .save().then((task)=> task.toObject())
export const updateTaskById = (id:string, values: Record<string, any>) => TaskModel.findById(id, values)