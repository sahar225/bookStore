const express = require('express');
const app = express();
require("dotenv").config();
require("./conn/conn")
const User = require("./routes/user");
const Books = require("./routes/book");
const bodyparser = require("body-parser");
const cors = require("cors")
/*assuming an express app is declared here*/
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

//creating routes
app.use("/api/v1", User);
app.use("/api/v1",Books);
//creating port
app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${process.env.PORT}`)
})