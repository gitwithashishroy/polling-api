const express = require("express");
const router = express.Router();

const questionController = require("../controllers/question_controller");

router.post("/create", questionController.create);
router.get("/:id", questionController.showQuestion);
router.get("/:id/delete", questionController.deleteQuestion);
router.post("/:id/options/create", questionController.addOptions);

module.exports = router;
