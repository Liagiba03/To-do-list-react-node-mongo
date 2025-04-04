const {Task} = require('../taskModel/taskModel');

//CREATE TASK
const createTask = async (title, description, status) =>{
   try {
     const newTask = new Task({title:title, description:description, status:status});
     const savedTask = await newTask.save();
     return savedTask;

   } catch (error) {
    console.error("error"+error);
    return null;

   }

}

//SHOW ALL TASK
const showAllTask = async ()=>{
    try {
        const tasks = await Task.find();
        return tasks;
    } catch (error) {
        console.error("error"+error);
        return null;
    }
}

//SHOW TASK COMPLETE
const TaskComplete = async ()=>{
    try {
        const taskComplete = await Task.find({status:true});
        return taskComplete;;
    } catch (error) {
        console.error("error"+error);
        return null;
    }
}

//Show task incomplete
const taskIncomplete = async () =>{
    try {
        const taskIncomplete = await Task.find({status:false});
        return taskIncomplete;
    } catch (error) {
        console.error("error"+error);
        return null;
    }
}

//UPDATE TASK
const updateTask = async (id) => {
    try {
        // Buscar la tarea por su ID
        const task = await Task.findById(id);
        if (!task) {
            console.log(`Task with ID ${id} not found`);
            return null;
        }

        // Invertir el valor de 'status'
        task.status = !task.status;

        // Guardar la tarea actualizada
        const taskUpdated = await task.save();

        return taskUpdated;
    } catch (error) {
        console.error("Error: " + error);
        return null;
    }
}


//DELETE TASK BY NAME
const deleteTask = async (id)=>{
    try {
        const deletedUser = await Task.findOneAndDelete({_id:id});
        if(!deletedUser){
            console.log(`User with ID ${id} not found`);
            return null;
        }
        return deletedUser;
    } catch (error) {
        console.error("error"+error);
        return null;
        
    }
}

module.exports = {createTask, showAllTask, TaskComplete, taskIncomplete, updateTask, deleteTask};