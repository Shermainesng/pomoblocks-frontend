import { UserModel } from "../models"
import { connectToDb } from "../utils"


export const getUsers =()=> {
    try {
        connectToDb()
        const posts = UserModel.find()
        return posts
    }catch(err) {
        console.log(err)
        throw new Error('failed to get users')
    }
}

export const getUserById = (id: number | string) => {
    try {
        connectToDb()
        const post = UserModel.findById(id)
        return post
    }catch(err) {
        console.log(err)
        throw new Error('failed to get user')
    }
}

export const getUserByEmail = (email:string) => UserModel.find({email})
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({
    'authentication.sessionToken': sessionToken
})
export const createUser = (values: Record<string, any>) => new UserModel(values)
                                                            .save().then((user)=> user.toObject())
export const deleteUserById = (id:string) => UserModel.findOneAndDelete({_id: id})
export const updateUserById = (id:string, values: Record<string, any>) => UserModel.findById(id, values)