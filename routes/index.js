const express = require("express");
const router = express.Router();


const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.get("/api", homeController.api);

router.use("/question", require("./question"));
router.use("/option", require("./option"));

module.exports = router;
