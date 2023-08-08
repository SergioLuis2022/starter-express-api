const express = require("express");
const router = require("./routes");
const app = express();
require('./db.js')

// var corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200
// }
app.use("/", router);

module.exports = app;
