const express = require('express');
const app = express();
require("dotenv").config();
require("./conn/conn")

//creating port
app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${process.env.PORT}`)
})