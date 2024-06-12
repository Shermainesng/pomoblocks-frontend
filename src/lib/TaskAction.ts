// type FormDataType = {
//     title: string
//     description: string
// }

"use server"
import { connectToDb } from "./utils"
import { revalidatePath } from "next/cache"
import { TaskModel } from "./models"

export const addTask = async (title:string, description: string) => {
    console.log("hit addTask")
    try {
        connectToDb()
        const newTask = new TaskModel({
            title, 
            description
        })
        await newTask.save()
        revalidatePath("/tasks")
    } catch(error) {
        console.log(error)
    }

}

export const deleteTaskById = async (taskId:string) => {
    try {
        connectToDb()
        await TaskModel.findOneAndDelete({_id: taskId})
        revalidatePath("/tasks")
    } catch(error) {
        console.log(error)
        throw new Error('failed to delete task')
    }
}