const express = require("express");
const router = express.Router();
const  UserAuth = require('../../components/middlewares/auth');

const controller = require("./controller");

//router.post("/archivos/listar", UserAuth, controller.listar_archivos);
router.get("/usuarios/listar",  controller.listar_usuarios);
module.exports = router;
