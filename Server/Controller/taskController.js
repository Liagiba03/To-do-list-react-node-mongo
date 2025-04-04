const {createTask, showAllTask, TaskComplete, taskIncomplete, updateTask, deleteTask} = require("../Service/taskService");

//CREATE TASK
const createTaskController = async (req, res) => {
    const {title, description, status} = req.body;
    const task = await createTask(title, description, status);
    if(task){
        res.status(200).json(task);
    }else{
        res.status(500).json({message: "Error creating task"});
    }
}

//SHOW ALL TASK
const showAllTaskController = async (req, res) => {
    const tasks = await showAllTask();
    if(tasks){
        res.status(200).json(tasks);
    }else{
        res.status(500).json({message: "Error showing tasks"});
    }
}

//SHOW TASK COMPLETE
const TaskCompleteController = async (req, res) => {
    const taskComplete = await TaskComplete();
    if(taskComplete){
        res.status(200).json(taskComplete);
    }else{
        res.status(500).json({message: "Error showing task complete"});
    }
}

//SHOW TASK INCOMPLETE
const taskIncompleteController = async (req, res) => {
    const taskIncompleteData = await taskIncomplete();
    if(taskIncompleteData){
        res.status(200).json(taskIncompleteData);
    }else{
        res.status(500).json({message: "Error showing task incomplete"});
    }
}

//UPDATE TASK
const updateTaskController = async (req, res) => {
    const {id} = req.params;
    const taskUpdated = await updateTask(id);
    if(taskUpdated){
        res.status(200).json(taskUpdated);
    }else{
        res.status(500).json({message: "Error updating task"});
    }
}

//DELETE TASK
const deleteTaskController = async (req, res) => {
    const {id} = req.params;
    const taskDeleted = await deleteTask(id);
    if(taskDeleted){
        res.status(200).json(taskDeleted);
    }else{
        res.status(500).json({message: "Error deleting task"});
    }
}

module.exports = {createTaskController, showAllTaskController, TaskCompleteController, taskIncompleteController, updateTaskController, deleteTaskController};

