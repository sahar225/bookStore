const express = require('express');
const app = express();
require("dotenv").config();
require("./conn/conn")
const user = require("./routes/user");
const bodyparser = require("body-parser");
/*assuming an express app is declared here*/
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

//creating routes
app.use("/api/v1", user)
//creating port
app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${process.env.PORT}`)
})