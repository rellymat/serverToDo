import mongoose from 'mongoose';

export interface ITask {
    id: number;
    task: string;
    status: boolean;
}


const createSchema = new mongoose.Schema<ITask>({
    id: {type: Number, required: true},
    task: {type: String, required: true},
    status: {type: Boolean, required: true}
})

const Task = mongoose.model('tasks', createSchema)

export default Task;