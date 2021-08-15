import express from 'express';
import router from "./routes/tasksRouter";
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = 3000;
const url = 'mongodb+srv://todoProject:1234566@tasksproject.jrm7b.mongodb.net/todoDB?retryWrites=true&w=majority'


app.use(express.json())
app.use(cors())
app.use('/tasks', router)


mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then((db) => {
    console.log('mongoDB connect')
}).catch((error) => {
    console.log(error)
})


app.get('/', (req, res) => {
   res.send("Hello Wold")
})


app.listen(port);