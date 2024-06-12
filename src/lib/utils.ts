import mongoose from "mongoose"
type ConnectionType = {
    isConnected: boolean
}

const connection: ConnectionType = {isConnected: false}


export const connectToDb = async() => {
    try {
        console.log("look here", process.env.MONGO_URI)
        if (connection.isConnected) {
            console.log("already connected")
            return
        }
        const db = await mongoose.connect(process.env.MONGO_URI as string)
        connection.isConnected = db.connections[0].readyState ? true : false
    } catch(error) {
        console.log(error)
        throw new Error(error)
    }
}