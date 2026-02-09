const router = require("express").Router();
const controller = require("../controllers/taskController");
const auth = require("../middlewares/authMiddleware");

router.post("/", auth, controller.createTask);
router.get("/", auth, controller.getTasks);

module.exports = router;
