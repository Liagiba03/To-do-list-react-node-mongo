const {createTaskController, showAllTaskController, TaskCompleteController, taskIncompleteController, updateTaskController, deleteTaskController} = require("../Controller/taskController");
const router = require("express").Router();

router.post("/create", createTaskController);
router.get("/show",showAllTaskController);
router.get("/complete",TaskCompleteController);
router.get("/incomplete",taskIncompleteController);
router.patch("/update/:id",updateTaskController);
router.delete("/delete/:id",deleteTaskController);

module.exports = router;