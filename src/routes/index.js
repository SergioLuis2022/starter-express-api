const express = require("express")
const router = express.Router();

const monsters_router = require("../components/monsters/routes");

router.use("/monsters", monsters_router);

module.exports = router;
