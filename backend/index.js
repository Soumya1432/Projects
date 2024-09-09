const express = require('express');
const  bodyParser = require('body-parser');
const noteRoute = require('./routes/note.route');
const dotenv= require('dotenv');
const app = express();
const port= process.env.PORT|| 4000;
dotenv.config();
app.use(bodyParser.json());

app.use("/api",noteRoute);

const db =require('./db/db.js');

db.sequelize.sync();

app.listen(port,()=>{
    console.log(`Server started on ${port}`)
})