const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    status:{type:Boolean, required:true},
});

const Task = mongoose.model("Tasks", taskSchema);

module.exports = {Task}