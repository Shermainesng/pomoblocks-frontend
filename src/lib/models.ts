import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    authentication: {
      password: {type: String, required: true, select: false},
      salt: {type: String, select:false},
      sessionToken: {type: String, select:false}
    }
});
  
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    blocks: [{ type: mongoose.Types.ObjectId, required: false, ref: "Block" }],
});

const blockSchema = new mongoose.Schema({
    task: { type: mongoose.Types.ObjectId, required: true, ref: "Task" },
    duration: { type: Number, required: true },
    completed: { type: Boolean, reqcuired: true },
    
});
  
export const UserModel = mongoose.models.User || mongoose.model('User', userSchema)
export const TaskModel = mongoose.models.Task || mongoose.model('Task', taskSchema)
export const BlockModel = mongoose.models.Block || mongoose.model('Block', blockSchema)

