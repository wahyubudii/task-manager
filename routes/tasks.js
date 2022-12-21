const express = require("express")
const router = express.Router()

const { getAllTasks, createTasks, getTask, updateTasks, deleteTasks } = require("../controllers/tasksController")

router.route("/").get(getAllTasks).post(createTasks)
router.route("/:id").get(getTask).put(updateTasks).delete(deleteTasks)

module.exports = router